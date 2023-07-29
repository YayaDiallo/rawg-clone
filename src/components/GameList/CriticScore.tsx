import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

export function CriticScore({ score }: Props) {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge fontSize='0.8em' colorScheme={color}>
      {score}
    </Badge>
  );
}
