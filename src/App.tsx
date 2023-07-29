import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { GameList } from './components/GameList';
import { GameFilter } from './components/GameFilter';
import { GameSorting } from './components/GameSorting';
import { useState } from 'react';
import { Platform } from './hooks/usePlatforms';
import { Genre } from './hooks/useGenres';
import { GameHeading } from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      p={4}
      templateAreas={`"nav nav""aside main"`}
      gridTemplateColumns={'250px 1fr'}
      gap={8}
    >
      <GridItem area='nav'>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem as='aside' area='aside'>
        <Sidebar
          onSetGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem as='main' area='main'>
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={4} py={4}>
          <GameFilter
            onSetPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameSorting
            sortOrder={gameQuery.sortOrder}
            onSetSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameList gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
