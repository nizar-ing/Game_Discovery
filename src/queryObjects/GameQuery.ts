import {Genre} from "../models/Genre.Model";
import {PlatformModel} from "../models/Platform.Model";

 interface GameQuery {
    genre: Genre | null;
    platform: PlatformModel | null;
    sortOrder: string;
    searchText: string;
}
export default GameQuery;