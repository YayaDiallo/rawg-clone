import { Grid, GridItem, Heading } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { GameList } from './components/GameList';

function App() {
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
        <Heading as='h2' size='3xl' pt='4px'>
          [Type] Games
        </Heading>
        <GameList />
      </GridItem>
    </Grid>
  );
}

export default App;
