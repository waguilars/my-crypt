import { es as alphabet } from '../../alphabet.json'
import { getCharacterIdx, isLowerCase, normalizeKey } from '../util'

const L = alphabet.length

/**
 * Encrypt a text using the vigenere algorithm
 * @param {string} text - text to be encripted
 * @param {string} key  - key to encrypt
 * @returns {string} Encrypted text
 */
const encrypt = (text, key) => {
  if (!text || !key) {
    throw Error('El texto y la llave son necesarios')
  }

  text = [...text]
  key = normalizeKey(text, key)

  const encryptedText = text.map((char, i) => {
    const isLower = isLowerCase(char)
    const textIdx = getCharacterIdx(char, alphabet)
    const keyIdx = getCharacterIdx(key[i], alphabet)

    if (textIdx < 0) { return ' ' }

    const encryptedIdx = (textIdx + keyIdx) % L
    return isLower
      ? alphabet[encryptedIdx].toLowerCase()
      : alphabet[encryptedIdx]
  })

  return encryptedText.join('')
}

/**
 * Decrypt a text that was encrypted with vigenere method
 * @param {string} text - text to be decrypted
 * @param {string} key  - text to decrypt the text
 * @returns {string} text decrypted
 */
const decrypt = (text, key) => {
  if (!text || !key) {
    throw Error('El texto y la llave son necesarios')
  }

  text = [...text]
  key = normalizeKey(text, key)

  const decryptedText = text.map((char, i) => {
    const isLower = isLowerCase(char)
    const textIdx = getCharacterIdx(char, alphabet)
    const keyIdx = getCharacterIdx(key[i], alphabet)

    const encryptedIdx = (textIdx - keyIdx) >= 0
      ? (textIdx - keyIdx) % L
      : (textIdx - keyIdx + L) % L

    return isLower
      ? alphabet[encryptedIdx].toLowerCase()
      : alphabet[encryptedIdx]
  })

  return decryptedText.join('')
}

export default {
  encrypt,
  decrypt
}
