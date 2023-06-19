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

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as='nav' justify='space-around' alignItems='center' gap='2'>
      <Box>
        <Heading as='h1' size='lg'>
          RAWG
        </Heading>
      </Box>
      <Spacer />
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input borderRadius='3xl' type='search' placeholder='Search Game...' />
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
