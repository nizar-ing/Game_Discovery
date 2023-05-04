import {Button, Flex, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import {usePlatforms} from "../hooks/usePlatforms";

export const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    if(error) return null;
    return (
        <Flex mt={2} ml={2}>
            <Menu >
                <MenuButton as={Button} rightIcon={<BsChevronDown />} >Platforms</MenuButton>
                <MenuList>
                    {
                        data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)
                    }
                </MenuList>
            </Menu>
        </Flex>
    );
};