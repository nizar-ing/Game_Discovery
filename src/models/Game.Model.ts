import {PlatformModel} from "./Platform.Model";

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: PlatformModel}[],
    metacritic: number,
    rating_top: number
}