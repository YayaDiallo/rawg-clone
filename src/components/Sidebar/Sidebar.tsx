import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  VStack,
  Text,
} from '@chakra-ui/react';
import { apiInstance } from '../../services/api-client';

interface GenresData {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

export function Sidebar() {
  const [genres, setGenres] = useState<GenresData[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiInstance
      .get(`/genres?key=${import.meta.env.VITE_RAWG_API_KEY}`)
      .then((response) => setGenres(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <VStack pt={4} alignItems='flex-start'>
      <Heading>Genres</Heading>
      {error && <Text color='red.500'>{error}</Text>}
      <UnorderedList m='0px'>
        {genres.map((genre) => (
          <ListItem key={genre.id} listStyleType='none' pt='8x' pb='8px'>
            <Flex gap='8px'>
              <Box>
                <Image
                  boxSize='32px'
                  objectFit='cover'
                  borderRadius='6px'
                  src={genre.image_background}
                  alt={genre.slug}
                />
              </Box>
              <Button variant='link' fontWeight='normal'>
                {genre.name}
              </Button>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
}
