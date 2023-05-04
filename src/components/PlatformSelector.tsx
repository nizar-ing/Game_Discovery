import {Button, Flex, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import {usePlatforms} from "../hooks/usePlatforms";
import React from "react";
import {PlatformModel} from "../models/Platform.Model";

export const PlatformSelector: React.FC<{selectedPlatform: PlatformModel | null, onSelectedPlatform: (platform: PlatformModel) => void}> = ({selectedPlatform, onSelectedPlatform}) => {
    const { data, error } = usePlatforms();
    if(error) return null;
    return (
        <Flex>
            <Menu >
                <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                    { selectedPlatform?.name || 'Platforms'}
                </MenuButton>
                <MenuList>
                    {
                        data.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>)
                    }
                </MenuList>
            </Menu>
        </Flex>
    );
};