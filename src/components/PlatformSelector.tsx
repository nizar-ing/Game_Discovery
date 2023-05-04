import {Button, Flex, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

export const PlatformSelector = () => {
    return (
        <Flex mt={4}>
            <Menu >
                <MenuButton as={Button} rightIcon={<BsChevronDown />} >Platforms</MenuButton>
                <MenuList>
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>
                    <MenuItem>Item 3</MenuItem>
                    <MenuItem>Item 4</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};