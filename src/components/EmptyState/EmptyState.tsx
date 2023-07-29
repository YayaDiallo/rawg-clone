import { Box, Text } from '@chakra-ui/react';

interface Props {
  resource: string;
}

export function EmptyState({ resource }: Props) {
  return (
    <Box>
      <Text as='h2' fontSize='3xl'>
        No {resource} found!
      </Text>
    </Box>
  );
}
