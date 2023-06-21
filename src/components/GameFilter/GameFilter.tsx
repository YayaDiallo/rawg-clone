import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { platforms } from '../../utils/constants';

export function GameFilter() {
  const [selectedPlatform, setSelectedPlatform] = useState('Platforms');
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
