import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/useGames';
import { GameQuery } from '../../App';
import { GameCard } from '../GameCard';
import { GameCardSkeleton } from '../GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

export function GameList({ gameQuery }: Props) {
  const { data: games, isLoading, error } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text color='red.500'>{error}</Text>;

  return (
    <SimpleGrid columns={3} spacing={5} minChildWidth='250px'>
      {!isLoading
        ? games.map((game) => <GameCard key={game.id} game={game} />)
        : skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
    </SimpleGrid>
  );
}
