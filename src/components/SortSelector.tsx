import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import React from "react";

export const SortSelector: React.FC<{sortOrder: string, onSelectSortOrder: (sortOrder: string) => void}> = ({sortOrder, onSelectSortOrder}) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}
    ];
    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {
                    sortOrders.map((item) => <MenuItem key={item.value} value={item.value} onClick={() => onSelectSortOrder(item.value)}>{item.label}</MenuItem>)
                }
            </MenuList>
        </Menu>
    );
};