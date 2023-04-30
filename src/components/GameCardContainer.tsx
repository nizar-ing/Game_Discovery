import React, {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

export const GameCardContainer: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Box width="300px" borderRadius={10} overflow='hidden'>
            {children}
        </Box>
    );
};