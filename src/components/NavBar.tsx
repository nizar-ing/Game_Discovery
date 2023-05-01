import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import {ColorModeSwitch} from "./ColorModeSwitch";

export const NavBar = () => {
    return (
        <HStack justifyContent="space-between" paddingRight="10px" bg='gray.700' borderBottom='1px' borderColor='whitesmoke'>
            <HStack>
                <Image src={logo} boxSize='60px' />
                <Text fontFamily='monospace' fontSize='14px' fontWeight='extrabold'>NizarIng</Text>
            </HStack>
            <ColorModeSwitch />
        </HStack>
    );
};