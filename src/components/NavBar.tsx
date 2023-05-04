import {ColorMode, HStack, Image, Text, Show, Box} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import {ColorModeSwitch} from "./ColorModeSwitch";
import React from "react";
import {SearchInput} from "./SearchInput";

export const NavBar: React.FC<{ colorMode: ColorMode, toggleColorMode: () => void }> = ({
                                                                                            colorMode,
                                                                                            toggleColorMode
                                                                                        }) => {
    //const {colorMode, toggleColorMode} =  useColorMode();

    return (
        <HStack paddingRight="10px" borderBottom='1px'
                borderColor={colorMode === 'dark' ? 'whitesmoke' : 'gray.700'}
                bg={colorMode === 'dark' ? 'gray.700' : 'whitesmoke'}
        >
            <Image src={logo} boxSize='60px'/>
            <SearchInput/>
            <ColorModeSwitch handleToggleColor={toggleColorMode} colorMode={colorMode}/>
        </HStack>
    );
};