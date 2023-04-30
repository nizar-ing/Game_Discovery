import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

export const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} =  useColorMode();
    return (
        <HStack>
            <Switch colorScheme='teal' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    );
};