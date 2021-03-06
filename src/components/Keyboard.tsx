import React, { ReactElement, useContext } from 'react'
import { MidiDataContext } from 'web-midi-hooks'
import '../styles/keyboard.css'
import { keyMap } from '../common/keyMap'
import { Text } from '@chakra-ui/react'

let regularKeys = [] as ReactElement[]

for (let key in keyMap) {
  const keyStyle = { left: keyMap[key].offset }
  if (keyMap[key].color === 'white') {
    regularKeys.push(
      <div style={keyStyle} className="white-key" key={key}>
        <Text
          fontWeight="bold"
          color="black"
          pl={4 * (Number(key) % 3) + 'px'}
          pt="120px"
          fontSize="14px"
        >
          {key}
        </Text>
      </div>
    )
  } else {
    regularKeys.push(
      <div style={keyStyle} className="black-key" key={key}>
        <Text
          fontWeight="bold"
          color="white"
          pt="20px"
          fontSize="10px"
        >
          {key}
        </Text>
      </div>
    )
  }
}

const Keyboard = () => {
  const { keyData, pitch, modulation } = useContext(MidiDataContext)

  const pitchStyle = { bottom: pitch }
  const modStyle = { bottom: modulation }

  const pressedKeys = keyData.map((key, i) => {
    let keyToRender = null as ReactElement | null

    if (key.note) {
      if (!keyMap[key.note]) return keyToRender

      const keyStyle = {
        left: keyMap[key.note].offset,
      }
      if (keyMap[key.note].color === 'white') {
        keyToRender = (
          <div
            style={keyStyle}
            className="white-key white-pressed"
            key={i}
          ></div>
        )
      } else {
        keyToRender = (
          <div
            style={keyStyle}
            className="black-key black-pressed"
            key={i}
          ></div>
        )
      }
    }
    return keyToRender
  })

  return (
    <div className="keyboard-outer">
      <div className="keyboard-inner">
        <div className="controls line"></div>
        <div className="controls top"></div>
        <div className="button b1"></div>
        <div className="button b2"></div>
        <div className="button b3"></div>
        <div className="button b4"></div>
        <div className="controls left"></div>
        <div className="dial modulation">
          <div style={modStyle} className="handle-mod"></div>
        </div>
        <div className="dial pitch">
          <div style={pitchStyle} className="handle-pitch"></div>
        </div>
        <div className="key-container">
          {regularKeys}
          {pressedKeys}
        </div>
      </div>
    </div>
  )
}

export default Keyboard
