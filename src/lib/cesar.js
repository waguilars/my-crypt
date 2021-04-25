import { es as alphabet } from './alphabet.json'
import { isLowerCase } from '../util/char'

const MAX_ROT = alphabet.length

/**
 * Encrypt text  using spanish Cesar encryption
 * @param {string} text - A string to be encrypted
 * @param {number} rot - Scroll numer, can be from 0 to 26
 */
export const encrypt = (text, rot = 3) => {
  if (rot > MAX_ROT || rot < 0) {
    throw Error('rot can be only beetween 0 to 26')
  }

  text = Array.from(text)

  const encryptedText = text.map((char) => {
    const isLower = isLowerCase(char)
    const idx = alphabet.indexOf(char.toUpperCase())

    if (idx === -1) { return char }

    const encryptedIdx = (idx + rot) % MAX_ROT
    const encryptedChar = alphabet[encryptedIdx]

    return isLower
      ? encryptedChar.toLowerCase()
      : encryptedChar
  })

  return encryptedText.join('')
}

/**
 * Encrypt text  using spanish Cesar encryption
 * @param {string} text - A string to be decrypted
 * @param {number} rot - Scroll numer, can be from 0 to 26
 */
export const decrypt = (text, rot = 3) => {
  if (rot > MAX_ROT || rot < 0) {
    throw Error('rot can be only beetween 0 to 26')
  }

  text = Array.from(text)

  const decryptedText = text.map((char) => {
    const isLower = isLowerCase(char)
    const idx = alphabet.indexOf(char.toUpperCase())

    if (idx === -1) { return char }

    let decryptedIdx = (idx - rot) % MAX_ROT

    decryptedIdx = decryptedIdx < 0
      ? decryptedIdx + MAX_ROT
      : decryptedIdx

    const decryptedChar = alphabet[decryptedIdx]

    return isLower
      ? decryptedChar.toLowerCase()
      : decryptedChar
  })

  return decryptedText.join('')
}
