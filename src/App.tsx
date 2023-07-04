import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { GameList } from './components/GameList';
import { GameFilter } from './components/GameFilter';
import { GameSorting } from './components/GameSorting';
import { useState } from 'react';
import { GenreData } from './components/Sidebar/Sidebar';
import { SortItem } from './components/GameSorting/GameSorting';

function App() {
  const [platformId, setPlatformId] = useState<number>();
  const [genre, setGenre] = useState<GenreData>();
  const [sortItem, setSortItem] = useState<SortItem>();
  const [searchValue, setSearchValue] = useState<string | undefined>();

  return (
    <Grid
      p={4}
      templateAreas={`"nav nav""aside main"`}
      gridTemplateColumns={'250px 1fr'}
      gap={8}
    >
      <GridItem area='nav'>
        <Navbar onSetSearchValue={setSearchValue} />
      </GridItem>
      <GridItem as='aside' area='aside'>
        <Sidebar onSetGenre={setGenre} />
      </GridItem>
      <GridItem as='main' area='main'>
        <Heading as='h2' size='3xl' py={2} mb={4}>
          {genre && genre.name} Games
        </Heading>
        <Flex gap={4} py={4}>
          <GameFilter onSetPlatformId={setPlatformId} />
          <GameSorting onSetSortItem={setSortItem} />
        </Flex>
        <GameList
          platformId={platformId}
          genreId={genre?.id}
          sortItem={sortItem}
          searchValue={searchValue}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
