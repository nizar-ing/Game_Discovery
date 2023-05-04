import {useData} from "./useData";
import {PlatformModel} from "../models/Platform.Model";

export const usePlatforms = () => useData<PlatformModel>('/platforms/lists/parents');