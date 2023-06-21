import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { genres } from '../../utils/constants';

export function Sidebar() {
  return (
    <VStack pt={4} alignItems='flex-start'>
      <Heading>Genres</Heading>
      <UnorderedList m='0px'>
        {genres.map((genre) => (
          <ListItem key={genre.name} listStyleType='none' pt='8x' pb='8px'>
            <Flex gap='8px'>
              <Box>
                <Image
                  boxSize='32px'
                  objectFit='cover'
                  borderRadius='6px'
                  src={genre.image}
                  alt={genre.name}
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
