import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { sortList } from '../../utils/constants';

export interface SortItem {
  name: string;
  value: string;
}

interface Props {
  onSetSortItem: (sortItem: SortItem) => void;
}

export function GameSorting({ onSetSortItem }: Props) {
  const [sortItemName, setSortItemName] = useState(sortList[0].name);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {sortItemName}
      </MenuButton>
      <MenuList>
        {sortList.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => {
              onSetSortItem(item);
              setSortItemName(item.name);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
