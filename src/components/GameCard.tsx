import React from "react";
import {Game} from "../models/Game.Model";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import {PlatformIconsList} from "./PlatformIconsList";
import {CriticScore} from "./CriticScore";
import {getCroppedImageUrl} from "../services/getCroppedImageUrl";

export const GameCard: React.FC<{game: Game}> = ({game}) => {
    return (
      <Card borderRadius={10} overflow='hidden'>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
              <Heading fontSize="2xl">{game.name}</Heading>
              <HStack justifyContent='space-between'>
                  <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                  <CriticScore score={game.metacritic} />
              </HStack>
          </CardBody>
      </Card>
    );
};