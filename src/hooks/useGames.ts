import { GameQuery } from '../App';
import { useData } from './useData';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  background_image: string;
  name: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

export function useGames(gameQuery: GameQuery) {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery],
  );
}
