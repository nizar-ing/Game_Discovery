import {useGenre} from "../hooks/useGenre";
import {useData} from "../hooks/useData";
import {Genre} from "../models/Genre.Model";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import {getCroppedImageUrl} from "../services/getCroppedImageUrl";

export const GenreList = () => {
    const {data, isLoading, error} = useGenre();
    if(error) return null;
    if(isLoading) return <Spinner />;
    return (
        <List>
            { data.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius='8' src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};