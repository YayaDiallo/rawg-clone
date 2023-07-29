import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

interface Props {
  onSetSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export function GameSorting({ onSetSortOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metatcritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => {
              onSetSortOrder(item.value);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
