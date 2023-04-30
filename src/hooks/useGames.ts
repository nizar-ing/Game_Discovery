import {useData} from "./useData";
import {Game} from "../models/Game.Model";

export const useGames = () => useData<Game>('/games');