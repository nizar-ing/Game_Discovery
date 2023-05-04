import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";
import React, {useState} from "react";

export const ColorModeSwitch: React.FC<{handleToggleColor: () => void, colorMode: string}> = ({handleToggleColor, colorMode}) => {

    return (
        <HStack>
            <Switch colorScheme='teal' isChecked={colorMode === 'dark'} onChange={handleToggleColor} />
            <Text fontFamily='monospace' fontWeight='extrabold' fontSize="14px" whiteSpace={'nowrap'}>Dark Mode</Text>
        </HStack>
    );
};