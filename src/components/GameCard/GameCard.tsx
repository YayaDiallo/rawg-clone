import { Box, Flex, Heading, Image } from '@chakra-ui/react';

import { getCroppedImageUrl } from '../../utils/croppedImageUrl';

import { Game } from '../../hooks/useGames';
import { PlatformIconList } from '../GameList/PlatformIconList';
import { Emoji } from '../GameList/Emoji';
import { CriticScore } from '../GameList/CriticScore';

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  return (
    <Box
      key={game.id}
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Image
        objectFit='cover'
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />

      <Flex p={3} flexDirection='column' gap={3}>
        <Box display='flex' justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </Box>

        <Heading my={2} as='h2' size='md'>
          {game.name}
        </Heading>

        <Emoji rating={game.rating_top} />
      </Flex>
    </Box>
  );
}
