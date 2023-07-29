import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Platform, usePlatforms } from '../../hooks/usePlatforms';

interface Props {
  onSetPlatform: (platform: Platform) => void;
}

export function GameFilter({ onSetPlatform }: Props) {
  const [selectedPlatform, setSelectedPlatform] = useState('Platforms');

  const { data: platforms } = usePlatforms();

  const handleChangePlatform = (platform: Platform) => {
    setSelectedPlatform(platform.name);
    onSetPlatform(platform);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleChangePlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
