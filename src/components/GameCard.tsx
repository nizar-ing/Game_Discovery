import React from "react";
import {Game} from "../models/Game.Model";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import {PlatformIconsList} from "./PlatformIconsList";
import {CriticScore} from "./CriticScore";
import {getCroppedImageUrl} from "../services/getCroppedImageUrl";
import {Emoji} from "./Emoji";

export const GameCard: React.FC<{game: Game}> = ({game}) => {
    return (
      <Card height='370px'>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
              <HStack justifyContent='space-between' marginBottom={3}>
                  <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                  <CriticScore score={game.metacritic} />
              </HStack>
              <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top} /></Heading>
          </CardBody>
      </Card>
    );
};