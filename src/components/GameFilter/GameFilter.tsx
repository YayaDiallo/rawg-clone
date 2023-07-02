import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { apiInstance } from '../../services/api-client';
import { Platform } from '../GameList/GameList';

interface Props {
  onSetPlatformId: (id: number) => void;
}

export function GameFilter({ onSetPlatformId }: Props) {
  const [selectedPlatform, setSelectedPlatform] = useState('Platforms');
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiInstance
      .get(`/platforms/lists/parents?key=${import.meta.env.VITE_RAWG_API_KEY}`)
      .then((response) => setPlatforms(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  const handleChangePlatform = (platform: Platform) => {
    setSelectedPlatform(platform.name);
    onSetPlatformId(platform.id);
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
