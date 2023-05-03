import {useData} from "./useData";
import {Game} from "../models/Game.Model";
import {Genre} from "../models/Genre.Model";

export const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);