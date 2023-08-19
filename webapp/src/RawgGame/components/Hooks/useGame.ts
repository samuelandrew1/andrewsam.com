import useData, { genres_props } from "./UseData";

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

const useGame = (selectedGenres: genres_props | null, selectedPlatform: platform | null) =>
  useData<Game>('/games',
    {
      params: {
        genres: selectedGenres?.id,
        platforms: selectedPlatform?.id
      },
    },
    [selectedGenres?.id, selectedPlatform?.id])


export default useGame