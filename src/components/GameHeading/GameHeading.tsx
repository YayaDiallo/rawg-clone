import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../../App';

interface Props {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as='h2' size='3xl' py={2} mb={4}>
      {heading}
    </Heading>
  );
}
