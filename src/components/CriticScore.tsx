import React from "react";
import {Badge} from "@chakra-ui/react";

export const CriticScore: React.FC<{score: number}> = ({score}) => {
    let color: string = score > 75 ? 'green' : score > 55 ? 'yellow' : '';
    return (
        <Badge fontSize='13px' paddingX={2} borderRadius='4px' colorScheme={color}>
            {score}
        </Badge>
    );
};