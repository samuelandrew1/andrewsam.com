import { useEffect, useState } from "react";
import ApiClient from "../../Services/Api-Client";
import { CanceledError } from "axios";
import { ErrorResponse } from "./useGame";

export interface genres_props {
    name: string
    id: number
    image_background: string
}
export interface fetchResData<T> {
    count: number
    genres: genres_props[]
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<ErrorResponse | string>("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const Controller = new AbortController()
        ApiClient.get<fetchResData<T>>(endpoint, { signal: Controller.signal })
            .then((response) => {
                setLoading(false)
                setData(response.data.results)
            })
            .catch((err: ErrorResponse) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            });
        return () => Controller.abort()
    }, []);
    return { data, error, loading }
}

export default useData