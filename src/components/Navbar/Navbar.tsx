import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Switch,
  FormLabel,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import { FormEvent, useRef } from 'react';

interface Props {
  onSetSearchValue: (value?: string) => void;
}

export function Navbar({ onSetSearchValue }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSetSearchValue(searchRef.current?.value);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as='nav' justify='space-around' alignItems='center' gap='2'>
      <Box>
        <Heading as='h1' size='lg'>
          RAWG
        </Heading>
      </Box>
      <Spacer />
      <InputGroup as='form' onSubmit={handleSubmit}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input
          ref={searchRef}
          borderRadius='3xl'
          type='search'
          placeholder='Search Game...'
        />
      </InputGroup>
      <Spacer />
      <HStack spacing='20px' whiteSpace='nowrap'>
        <Switch
          id='toggleMode'
          colorScheme='green'
          size='lg'
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
        <FormLabel htmlFor='toggleMode' m='0'>
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </FormLabel>
      </HStack>
    </Flex>
  );
}
