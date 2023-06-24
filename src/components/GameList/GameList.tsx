import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaWindows,
  FaApple,
} from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { apiInstance } from '../../services/api-client';

interface Platform {
  platform: {
    id: number;
    name: string;
  };
}
interface GameData {
  id: number;
  background_image: string;
  name: string;
  slug: string;
  metacritic: number;
  parent_platforms: Platform[];
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
              <Flex alignItems='end' gap={3}>
                <FaPlaystation />
                <FaLinux />
                <FaXbox />
                <FaApple />
                <FaWindows />
              </Flex>
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
