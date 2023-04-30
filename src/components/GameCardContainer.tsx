import React, {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

export const GameCardContainer: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Box borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    );
};