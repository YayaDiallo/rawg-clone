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
import { Genre, useGenres } from '../../hooks/useGenres';

interface Props {
  onSetGenre: (data: Genre) => void;
}

export function Sidebar({ onSetGenre }: Props) {
  const { data: genres, error } = useGenres();

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
                  alt={genre.name}
                />
              </Box>
              <Button
                variant='link'
                fontWeight='normal'
                onClick={() => onSetGenre(genre)}
              >
                {genre.name}
              </Button>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
}
