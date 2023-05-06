import {Center, Flex, Grid, GridItem, HStack, Image, Show, Text, useColorMode, VStack} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {GenreList} from "./components/GenreList";
import {useState} from "react";
import {PlatformSelector} from "./components/PlatformSelector";
import {PlatformModel} from "./models/Platform.Model";
import GameQuery from "./queryObjects/GameQuery";
import {SortSelector} from "./components/SortSelector";

import nizarImg from "./assets/nizar.jpg";
import {GameHeading} from "./components/GameHeading";

function App() {
    /*const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformModel | null>(null);*/
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const {colorMode, toggleColorMode} =  useColorMode();
    return (
        <Grid templateAreas={{
            base: `"nav" "main" "footer"`,
            lg: `"nav nav" "aside main" "footer footer"`
        }}
          templateColumns={{
              base: '1fr',
              lg: '220px 1fr'
          }}
        >
            <GridItem area="nav">
                <NavBar colorMode={colorMode} toggleColorMode={() => toggleColorMode()} onSearch={(searchText => setGameQuery({ ...gameQuery, searchText}))} />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} paddingY={3}>
                    <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre})} colorMode={colorMode} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameHeading gameQuery={gameQuery} />
                <HStack mt={3} ml={2} mb={4} spacing={5}>
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform: PlatformModel) => setGameQuery({ ...gameQuery, platform})} />
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder})} />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
            <GridItem  area="footer">
                <Center bg='gray.700' m={2} h='150px' color='white' borderRadius='10px' >
                    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Image src={nizarImg} boxSize="70px" borderRadius="full" />
                        <Text fontFamily={'monospace'} fontSize="18px">INizar&copy;2023</Text>
                    </Flex>
                </Center>
            </GridItem>
        </Grid>
    )
}

export default App
