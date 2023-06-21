import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { sortList } from '../../utils/constants';

export function GameSorting() {
  const [sortItem, setSortItem] = useState('Relevance');
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {sortItem}
      </MenuButton>
      <MenuList>
        {sortList.map((item) => (
          <MenuItem key={item} onClick={() => setSortItem(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
