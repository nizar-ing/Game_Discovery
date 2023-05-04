import {useGenre} from "../hooks/useGenre";
import {Button, ColorMode, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import {getCroppedImageUrl} from "../services/getCroppedImageUrl";
import React from "react";
import {Genre} from "../models/Genre.Model";

export const GenreList: React.FC<{selectedGenre: Genre | null, colorMode: ColorMode ,onSelectedGenre: (genre: Genre) => void}> = ({selectedGenre, onSelectedGenre, colorMode}) => {
    const {data, isLoading, error} = useGenre();
    if(error) return null;
    if(isLoading) return <Spinner />;
    return (
        <List>
            { data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px' bg={(colorMode === 'dark') && (genre.id === selectedGenre?.id) ?
                                                            'gray.700' : (colorMode === 'light') && (genre.id === selectedGenre?.id) ? 'gray.100' : ''}>
                    <HStack>
                        <Image boxSize='32px' borderRadius='8' src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};