import { Platform } from './GameList';
import {
  FaApple,
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { IconType } from 'react-icons';
import { Flex, Icon } from '@chakra-ui/react';

interface Props {
  platforms: Platform[];
}

export function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    web: BsGlobe,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };

  return (
    <>
      <Flex alignItems='end' gap={3}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color='gray.500' />
        ))}
      </Flex>
    </>
  );
}
