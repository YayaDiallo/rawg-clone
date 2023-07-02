import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { GameList } from './components/GameList';
import { GameFilter } from './components/GameFilter';
import { GameSorting } from './components/GameSorting';
import { useState } from 'react';

function App() {
  const [platformId, setPlatformId] = useState<number>();

  return (
    <Grid
      p={4}
      templateAreas={`"nav nav""aside main"`}
      gridTemplateColumns={'250px 1fr'}
      gap={8}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <GridItem as='aside' area='aside'>
        <Sidebar />
      </GridItem>
      <GridItem as='main' area='main'>
        <Heading as='h2' size='3xl' py={2} mb={4}>
          [Type] Games
        </Heading>
        <Flex gap={4} py={4}>
          <GameFilter onSetPlatformId={setPlatformId} />
          <GameSorting />
        </Flex>
        <GameList platformId={platformId} />
      </GridItem>
    </Grid>
  );
}

export default App;
