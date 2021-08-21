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

  const mappedKeyData = sortedKeyData
    .map((key, i) => {
      let note = key.note && keyMap[key.note].note.replace('s', '#')

      if (!note) return null

      const noteName = note.substr(0, note.length - 1)
      const octave = note[note.length - 1]

      const relNote = (key.note % 12) + 1

      return { ...key, noteName, octave, relNote }
    })
    .filter(Boolean)

  const relations = [] as number[]
  for (let n = 0; n < mappedKeyData.length - 1; n++) {
    const key1 = mappedKeyData[n].relNote
    const key2 = mappedKeyData[n + 1].relNote
    let diff = 0

    if (key1 <= key2) {
      diff = key2 - key1
    } else {
      diff = key2 + 12 - key1
    }

    relations.push(diff)
  }

  const relationsMap = {
    '3': { kind: 'minor', inv: 0, root: 0 },
    '4': { kind: 'major', inv: 0, root: 0 },
    '8': { kind: 'major', inv: 1, root: 1 },
    '7': { kind: '5', inv: 0, root: 0 },
    '5': { kind: '5', inv: 1, root: 1 },

    '4 3': { kind: 'major', inv: 0, root: 0 },
    '3 5': { kind: 'major', inv: 1, root: 2 },
    '5 4': { kind: 'major', inv: 2, root: 1 },
    '3 4': { kind: 'minor', inv: 0, root: 0 },
    '4 5': { kind: 'minor', inv: 1, root: 2 },
    '5 3': { kind: 'minor', inv: 2, root: 1 },

    '4 4': { kind: 'aug', inv: 0, root: 0 },
    // C aug -> E aug -> Ab aug -> C aug

    '2 5': { kind: 'sus2', inv: 0, root: 0 },
    '5 5': { kind: 'sus2', inv: 1, root: 2 },
    '5 2': { kind: 'sus4', inv: 0, root: 0 },

    '2 2 3': { kind: 'add9', inv: 0, root: 0 },

    '4 3 3': { kind: '7', inv: 0, root: 0 },

    '4 3 4': { kind: 'maj7', inv: 0, root: 0 },
    '3 4 1': { kind: 'maj7', inv: 1, root: 3 },
    '4 1 4': { kind: 'maj7', inv: 2, root: 2 },
    '1 4 3': { kind: 'maj7', inv: 3, root: 1 },

    '3 4 3': { kind: 'm7', inv: 0, root: 0 },
    '3 4 4': { kind: 'm maj7', inv: 0, root: 0 },

    '4 3 2': { kind: '6', inv: 0, root: 0 },
    // OR
    // '4 3 2': { kind: 'min7', inv: 1, root: 3 },

    '3 2 3': { kind: '6', inv: 1, root: 3 },
    // OR
    // '3 2 3': { kind: 'min7', inv: 2, root: 2 },

    '2 3 4': { kind: 'min7', inv: 3, root: 1 },
    // OR
    // '2 3 4': { kind: '6', inv: 2, root: 2 },

    // open chords
    '4 3 5 4 5': { kind: 'minor over major', inv: 1, root: 1 },
    '3 4 3 5': { kind: 'm7', inv: 0, root: 0 },
    '3 4 3 5 4': { kind: 'm7', inv: 0, root: 0 },
    // relative minors/majors
  }

  const quality = relationsMap[relations.join(' ')]
  const chord = quality
    ? mappedKeyData[quality.root].noteName.toUpperCase() +
      ` ${quality.kind} ${quality.inv ? `inv ${quality.inv}` : ''}`
    : ''

  return (
    <div className="App">
      <Flex width="100%">
        <Flex flexDir="column" width="600px" height="100vh" p={4} pt={8}>
          <Heading fontSize="24px">Relations: {relations.join(' ')}</Heading>
          <Flex>
            <Heading fontSize="32px">Chord:</Heading>
            <Heading fontSize="32px" color="blue.600" ml="8px">
              {chord}
            </Heading>
          </Flex>
          <Box minH="120px">
            {mappedKeyData.map((key, i) => {
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
        <Box flexGrow={1} w="100%">
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
        toggle
      </Button>
    </div>
  )
}

export default App
