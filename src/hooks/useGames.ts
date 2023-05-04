import {useData} from "./useData";
import {Game} from "../models/Game.Model";
import {Genre} from "../models/Genre.Model";
import {PlatformModel} from "../models/Platform.Model";

export const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatformModel | null) => useData<Game>('/games',
                                                                          { params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}},
                                                                                [selectedGenre?.id, selectedPlatform?.id]);