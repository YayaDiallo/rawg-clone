import { Grid, GridItem } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { GameList } from './components/GameList';

function App() {
  return (
    <Grid
      p={4}
      templateAreas={`"nav nav""aside main"`}
      gridTemplateColumns={'250px 1fr'}
      gap={4}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <GridItem as='aside' bg='purple' area='aside'>
        <Sidebar />
      </GridItem>
      <GridItem as='main' area='main'>
        <GameList />
      </GridItem>
    </Grid>
  );
}

export default App;
