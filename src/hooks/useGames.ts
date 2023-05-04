import {useData} from "./useData";
import {Game} from "../models/Game.Model";
import {Genre} from "../models/Genre.Model";
import {PlatformModel} from "../models/Platform.Model";
import GameQuery from "../queryObjects/GameQuery";

export const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
                                                                          {
                                                                               params: {
                                                                                        genres: gameQuery.genre?.id,
                                                                                        platforms: gameQuery.platform?.id,
                                                                                        ordering: gameQuery.sortOrder
                                                                                       }
                                                                                     },
                                                                                [gameQuery]);