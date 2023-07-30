import { useEffect, useState } from "react";
import ApiClient from "../../Services/Api-Client";
import { CanceledError } from "axios";
import { ErrorResponse } from "./useGame";

interface genres_props{
    name: string
    id: number
}
 export interface genresResDta{
    count: number
     results: genres_props[]
     genres: genres_props[]
}

const useGenres= () => {
    const [genres, setGenres] = useState<genres_props[]>([]);
  const [error, setError] = useState<ErrorResponse | string>("");
   const [loading, setLoading] = useState(false)
 
   useEffect(() => {
     setLoading(true)
     const Controller = new AbortController()
     ApiClient.get<genresResDta>("/genres", {signal:Controller.signal})
       .then((response) => {
         setLoading(false)
         setGenres(response.data.results)})
       .catch((err: ErrorResponse) => {
         if(err instanceof CanceledError) return
         setError(err.message)
         setLoading(false)
     });
     return ()=>Controller.abort()
   }, []);
   return {genres, error, loading}
 }
 
 export default useGenres