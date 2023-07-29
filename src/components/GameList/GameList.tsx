import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { GoGoal } from 'react-icons/go';
import { PlatformIconList } from './PlatformIconList';
import { useGames } from '../../hooks/useGames';
import { EmptyState } from '../EmptyState';
import { getCroppedImageUrl } from '../../utils/croppedImageUrl';
import { GameQuery } from '../../App';

interface Props {
  gameQuery: GameQuery;
}

export function GameList({ gameQuery }: Props) {
  const { data: games, isLoading, error } = useGames(gameQuery);

  if (games?.length === 0) {
    return (
      <Box>
        <EmptyState resource='games' />
      </Box>
    );
  }

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
          <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <Image
              objectFit='cover'
              src={getCroppedImageUrl(game.background_image)}
              alt={game.name}
            />
          </Skeleton>
          <Flex p={3} flexDirection='column' gap={3}>
            <Skeleton isLoaded={!isLoading} fadeDuration={1}>
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
            </Skeleton>
            <Skeleton isLoaded={!isLoading} fadeDuration={1}>
              <Heading my={2} as='h2' size='md'>
                {game.name}
              </Heading>
            </Skeleton>
            <Skeleton isLoaded={!isLoading} fadeDuration={1}>
              <Box>
                <GoGoal size={30} />
              </Box>
            </Skeleton>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}
