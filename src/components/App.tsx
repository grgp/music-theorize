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

  const sortedKeyData = keyData.sort((a, b) => a.note - b.note)
  console.log('what is {efk', { keyData, sortedKeyData })

  return (
    <div className="App">
      <Flex width="100%">
        <Flex flexDir="column" width="400px" height="100vh" p={4}>
          <Heading>Notes:</Heading>
          <Box>
            {sortedKeyData.map((key, i) => {
              let note = key.note && keyMap[key.note].note.replace('s', '#')

              if (!note) return null

              const noteName = note.substr(0, note.length - 1)
              const octave = note[note.length - 1]

              return (
                <Flex key={i}>
                  <Flex alignItems="flex-end" minW="48px">
                    <Text fontSize="24px" fontWeight={600}>
                      {noteName.toUpperCase()}
                    </Text>
                    <Text fontSize="16px">{octave}</Text>
                  </Flex>
                  <Text
                    ml="32px"
                    fontSize="24px"
                    color="blue.600"
                    fontWeight="bold"
                  >
                    {key.note}
                  </Text>
                  <Text
                    ml="32px"
                    fontSize="24px"
                    color="blue.600"
                    fontWeight="bold"
                  >
                    {(key.note % 12) + 1}
                  </Text>
                </Flex>
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
