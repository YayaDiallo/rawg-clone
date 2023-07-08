import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { GoGoal } from 'react-icons/go';
import { PlatformIconList } from './PlatformIconList';
import { SortItem } from '../GameSorting/GameSorting';
import { useGames } from '../../hooks/useGames';
import { EmptyState } from '../EmptyState';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameData {
  id: number;
  background_image: string;
  name: string;
  slug: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

interface Props {
  platformId?: number;
  genreId?: number;
  sortItem?: SortItem;
  searchValue?: string;
}

export function GameList({
  platformId,
  genreId,
  sortItem,
  searchValue,
}: Props) {
  const key: string = import.meta.env.VITE_RAWG_API_KEY;

  const queryParams = {
    key,
    parent_platforms: platformId,
    genres: genreId,
    ordering: sortItem?.value,
    search: searchValue,
  };

  const constructUrlParams = (params: typeof queryParams) => {
    let myParams = `?key=${params.key}`;
    for (const query in params) {
      const isParamsFilter = query !== 'key';
      myParams +=
        isParamsFilter && params[query as keyof typeof params]
          ? `&${query}=${params[query as keyof typeof params]}`
          : '';
    }

    return myParams;
  };

  const gamesUrl = `/games${constructUrlParams(queryParams)}`;
  const { games, isLoading, error } = useGames(gamesUrl);

  if (isLoading) {
    return (
      <Flex justifyContent='center' alignItems='center' h='55vh'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Flex>
    );
  }

  if (games?.length === 0) {
    return (
      <Box>
        <EmptyState match='games' />
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
              src={game.background_image}
              alt={game.slug}
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
