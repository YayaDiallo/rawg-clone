import { useEffect, useState } from 'react';
import {
  CanceledError,
  apiInstance,
  AxiosRequestConfig,
} from '../services/api-client';

interface fetchResponse<T> {
  count: number;
  results: T[];
}

export function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[],
) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(
    () => {
      setIsLoading(true);
      const abortController = new AbortController();

      apiInstance
        .get<fetchResponse<T>>(endpoint, {
          signal: abortController.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setIsLoading(false);
        });

      return () => abortController.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies ? [...dependencies] : [],
  );

  return { data, isLoading, error };
}
