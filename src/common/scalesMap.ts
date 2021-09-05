import { keyNames } from './keyMap'

const major = [2, 2, 1, 2, 2, 2] // , 1
const minorNatural = [2, 1, 2, 2, 1, 2] // , 2
const minorHarmonic = [2, 1, 1, 2, 1, 3] // , 1
const minorMelodic = [2, 1, 2, 2, 2, 2] // , 1

const scaleKinds = [major, minorNatural, minorHarmonic, minorMelodic]
const scaleNames = [
  'major',
  'minor (natural)',
  'minor (harmonic)',
  'minor (melodic)',
]

let scales = {}

keyNames.forEach((keyName, keyIndex) => {
  scaleKinds.forEach((scaleKind, scaleKindIndex) => {
    let scale = [keyNames[keyIndex]]

    let currentIndex = 0
    scaleKind.forEach((degree) => {
      currentIndex += degree
      const nextKey = (keyIndex + currentIndex) % 12
      scale.push(keyNames[nextKey])
    })

    const indexOfC = scale.lastIndexOf('c')
    const indexOfCSharp = scale.lastIndexOf('c#')
    const rotateCount = indexOfC > -1 ? indexOfC : indexOfCSharp
    scale = rotate(scale, rotateCount)

    const scaleStr = scale.join(' ')

    scales[scaleStr] = `${keyName} ${
      scaleNames[scaleKindIndex]
    } keyIndex: ${keyIndex} scaleKindIndex: ${scaleKindIndex} mf: ${Math.floor(
      keyIndex / 4
    )}`
  })
})

export { scales }

function rotate(arr, count) {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)]
}
