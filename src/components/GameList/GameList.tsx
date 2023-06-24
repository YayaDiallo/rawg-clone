import { Badge, Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import {
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaWindows,
  FaApple,
} from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';

export function GameList() {
  const property = {
    imageUrl:
      'https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <SimpleGrid columns={3} spacing={5} minChildWidth='250px'>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image
          objectFit='cover'
          src={property.imageUrl}
          alt={property.imageAlt}
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
              89
            </Badge>
          </Box>
          <Heading my={2} as='h2' size='md'>
            {property.title}
          </Heading>
          <Box>
            <GoGoal size={30} />
          </Box>
        </Flex>
      </Box>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image
          objectFit='cover'
          src={property.imageUrl}
          alt={property.imageAlt}
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
              89
            </Badge>
          </Box>
          <Heading my={2} as='h2' size='md'>
            {property.title}
          </Heading>
          <Box>
            <BiLike size={30} />
          </Box>
        </Flex>
      </Box>
    </SimpleGrid>
  );
}
