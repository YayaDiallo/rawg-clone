import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { GoGoal } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { apiInstance } from '../../services/api-client';
import { PlatformIconList } from './PlatformIconList';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface GameData {
  id: number;
  background_image: string;
  name: string;
  slug: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

export function GameList() {
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiInstance
      .get(`/games?key=${import.meta.env.VITE_RAWG_API_KEY}`)
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <SimpleGrid columns={3} spacing={5} minChildWidth='250px'>
      {error && <Text color='red.500'>{error}</Text>}
      {games.map((game) => (
        <Box
          key={game.id}
          maxW='sm'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
        >
          <Image
            objectFit='cover'
            src={game.background_image}
            alt={game.slug}
          />
          <Flex p={3} flexDirection='column' gap={3}>
            <Box display='flex' justifyContent='space-between'>
              <PlatformIconList
                platforms={game.parent_platforms.map(
                  ({ platform }) => platform,
                )}
              />
              <Badge fontSize='0.8em' colorScheme='green'>
                {game.metacritic}
              </Badge>
            </Box>
            <Heading my={2} as='h2' size='md'>
              {game.name}
            </Heading>
            <Box>
              <GoGoal size={30} />
            </Box>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}
