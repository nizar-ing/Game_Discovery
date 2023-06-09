import {SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from "../hooks/useGames";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import {Game} from "../models/Game.Model";
import {useData} from "../hooks/useData";
import React from "react";
import {Genre} from "../models/Genre.Model";
import {PlatformModel} from "../models/Platform.Model";
import GameQuery from "../queryObjects/GameQuery";


export const GameGrid: React.FC<{ gameQuery: GameQuery }> = ({gameQuery}) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    if (error) return <Text>{error}</Text>;
    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding="10px">
            {isLoading && skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )
            )}
            {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )
            )}
        </SimpleGrid>
    );
};