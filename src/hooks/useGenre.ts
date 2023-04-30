import {useData} from "./useData";
import {Genre} from "../models/Genre.Model";

export const useGenre = () => useData<Genre>('/genres');