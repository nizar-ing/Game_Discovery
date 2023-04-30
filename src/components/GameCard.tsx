import React from "react";
import {Game} from "../models/Game.Model";
import {Card, CardBody, Heading, Image, Text} from "@chakra-ui/react";
import {PlatformIconsList} from "./PlatformIconsList";

export const GameCard: React.FC<{game: Game}> = ({game}) => {
    return (
      <Card borderRadius={10} overflow='hidden'>
          <Image src={game.background_image} />
          <CardBody>
              <Heading fontSize="2xl">{game.name}</Heading>
              <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
          </CardBody>
      </Card>
    );
};