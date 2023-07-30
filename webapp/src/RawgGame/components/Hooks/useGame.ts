import { useState, useEffect, ReactNode } from "react";
import ApiClient from "../../Services/Api-Client";
import {CanceledError} from 'axios'

export interface platform{
    id:  number;
    name: string,
    slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image:string
  parent_platforms: {platform:platform}[]
  metacritic: string

}
 interface GameResData {
  count: number;
  results: Game[];
}
export interface ErrorResponse {
  err: () => void
  error: string
  message: string

}
const useGame = () => {
   const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<ReactNode>('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const Controller = new AbortController()
    ApiClient.get<GameResData>("/games", { signal: Controller.signal })
      .then((response) => {
        setLoading(false)
        setGames(response.data.results)})
      .catch((err: ErrorResponse) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
    });
    return ()=>Controller.abort()
  }, []);
  return {games, error, loading}
}

export default useGame