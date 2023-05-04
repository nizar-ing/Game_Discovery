import {Grid, GridItem, Show, useColorMode} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {GenreList} from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./models/Genre.Model";
import {PlatformSelector} from "./components/PlatformSelector";
import {PlatformModel} from "./models/Platform.Model";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformModel | null>(null);

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
                    <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} colorMode={colorMode} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform: PlatformModel) => setSelectedPlatform(platform)} />
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
            </GridItem>
        </Grid>
    )
}

export default App
