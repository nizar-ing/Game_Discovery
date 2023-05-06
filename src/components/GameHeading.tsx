import {Heading} from "@chakra-ui/react";
import React from "react";
import GameQuery from "../queryObjects/GameQuery";

export const GameHeading: React.FC<{gameQuery: GameQuery}> = ({gameQuery}) => {
    const heading: string = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
    return (
       <Heading as='h2' fontSize='5xl' fontWeight='bold' p={3}>
           {heading}
       </Heading>
    );
};