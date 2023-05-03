import {HStack, Image, Text, useColorMode} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import {ColorModeSwitch} from "./ColorModeSwitch";
import {useState} from "react";


export const NavBar = () => {
    const {colorMode, toggleColorMode} =  useColorMode();

    return (
        <HStack justifyContent="space-between" paddingRight="10px" borderBottom='1px'
                borderColor={colorMode === 'dark' ? 'whitesmoke' : 'gray.700'}
                bg={colorMode === 'dark' ? 'gray.700' : 'whitesmoke'}
        >
            <HStack>
                <Image src={logo} boxSize='60px' />
                <Text fontFamily='monospace' fontSize='18px' fontWeight='extrabold' color={colorMode === 'dark' ? 'whitesmoke' : 'gray.800'}>INizar&copy;2023</Text>
            </HStack>
            <ColorModeSwitch handleToggleColor={toggleColorMode} colorMode={colorMode} />
        </HStack>
    );
};