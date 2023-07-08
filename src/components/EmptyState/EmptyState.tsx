import { Box, Text } from '@chakra-ui/react';

interface Props {
  match: string;
}

export function EmptyState({ match }: Props) {
  return (
    <Box>
      <Text as='h2' fontSize='3xl'>
        No {match} found!
      </Text>
    </Box>
  );
}
