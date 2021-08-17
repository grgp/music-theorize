import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react'

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

  const mappedKeyData = sortedKeyData.map((key, i) => {
    let note = key.note && keyMap[key.note].note.replace('s', '#')

    if (!note) return null

    const noteName = note.substr(0, note.length - 1)
    const octave = note[note.length - 1]

    const relNote = (key.note % 12) + 1

    return { ...key, noteName, octave, relNote }
  })

  const relations = [] as number[]
  for (let n = 0; n < mappedKeyData.length - 1; n++) {
    const key1 = mappedKeyData[n].relNote
    const key2 = mappedKeyData[n + 1].relNote
    let diff = 0

    if (key1 <= key2) {
      diff = key2 - key1
    } else {
      diff = (key2 + 12) - key1
    }

    relations.push(diff)
  }

  const relationsMap = {
    '4 3': { kind: 'major', inv: 0, root: 0 },
    '3 5': { kind: 'major', inv: 1, root: 2 },
    '5 4': { kind: 'major', inv: 2, root: 1 },
    '3 4': { kind: 'minor', inv: 0, root: 0 },
    '4 5': { kind: 'minor', inv: 1, root: 2 },
    '5 3': { kind: 'minor', inv: 2, root: 1 },
  }

  return (
    <div className="App">
      <Flex width="100%">
        <Flex flexDir="column" width="400px" height="100vh" p={4}>
          <Heading>Notes:</Heading>
          <Heading fontSize="24px">Relations: {relations.join(' ')}</Heading>
          <Box>
            {mappedKeyData.filter(Boolean).map((key, i) => {
              const { noteName, octave, relNote } = key

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
                    {relNote}
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
