import React from "react";

import {HStack, Icon} from "@chakra-ui/react";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox, BsGlobe, MdPhoneIphone, SiNintendo} from "react-icons/all";
import {IconType} from "react-icons";

import {PlatformModel} from "../models/Platform.Model";



export const PlatformIconsList: React.FC<{platforms: PlatformModel[]}> = ({platforms}) => {
    const iconMap: {[key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    };
    return (
        <HStack marginY={2}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color="gray.500" /> ) }
        </HStack>
    );
};