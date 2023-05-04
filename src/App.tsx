import {Grid, GridItem, HStack, Show, useColorMode} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {GenreList} from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./models/Genre.Model";
import {PlatformSelector} from "./components/PlatformSelector";
import {PlatformModel} from "./models/Platform.Model";
import GameQuery from "./queryObjects/GameQuery";
import {SortSelector} from "./components/SortSelector";

function App() {
    /*const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformModel | null>(null);*/
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const {colorMode, toggleColorMode} =  useColorMode();
    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
          templateColumns={{
              base: '1fr',
              lg: '200px 1fr'
          }}
        >
            <GridItem area="nav">
                <NavBar colorMode={colorMode} toggleColorMode={() => toggleColorMode()} />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} paddingY={3}>
                    <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre})} colorMode={colorMode} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <HStack mt={3} ml={2} mb={4} spacing={5}>
                    <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform: PlatformModel) => setGameQuery({ ...gameQuery, platform})} />
                    <SortSelector />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    )
}

export default App
