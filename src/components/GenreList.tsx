import {useGenre} from "../hooks/useGenre";
import {Button, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import {getCroppedImageUrl} from "../services/getCroppedImageUrl";
import React from "react";
import {Genre} from "../models/Genre.Model";

export const GenreList: React.FC<{onSelectedGenre: (genre: Genre) => void}> = ({onSelectedGenre}) => {
    const {data, isLoading, error} = useGenre();
    if(error) return null;
    if(isLoading) return <Spinner />;
    return (
        <List>
            { data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius='8' src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontSize='lg' variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};