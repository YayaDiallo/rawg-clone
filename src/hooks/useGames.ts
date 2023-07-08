import { useEffect, useState } from 'react';
import { GameData } from '../components/GameList/GameList';
import { CanceledError, apiInstance } from '../services/api-client';

export function useGames(gamesUrl: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    apiInstance
      .get(gamesUrl, {
        signal: abortController.signal,
      })
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => abortController.abort();
  }, [gamesUrl]);

  return { games, isLoading, error };
}
