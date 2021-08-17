import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import Header from './Header'
import DataVisualizer from './DataVisualizer'
import Keyboard from './Keyboard'
import { useContext } from 'react'
import { MidiDataContext } from 'web-midi-hooks'
import { keyMap } from '../common/keyMap'

const App = () => {
  const { deviceName, keyData, pitch, modulation, errors } =
    useContext(MidiDataContext)

  const { toggleColorMode } = useColorMode()

  return (
    <div className="App">
      <Flex width="100%">
        <Flex flexDir="column" width="400px" height="100vh" p={4}>
          <Heading>Notes:</Heading>
          <Box>
            {keyData.map((key, i) => {
              return (
                <Text key={i} fontSize="24px" fontWeight={600}>
                  {key.note && keyMap[key.note].note}{' '}
                </Text>
              )
            })}
          </Box>
        </Flex>
        <Box flexGrow={1}>
          <Keyboard />
          <DataVisualizer />
        </Box>
      </Flex>
      <Button
        position="absolute"
        top={4}
        right={4}
        variant="link"
        onClick={() => toggleColorMode()}
      >
        toggle dark mode
      </Button>
    </div>
  )
}

export default App
