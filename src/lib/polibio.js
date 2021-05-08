import { en as alphabet } from '../../alphabet.json'
import { findCharacterFromKey, findKeyFromCharacter } from '../util'

/**
 * Encrypt a text using the polibio's encryption
 * @param {string} text - text to be encrypted
 * @returns {Array<string>} An array with the keys of each character encrypted
 */
const encrypt = (text) => {
  const n = 5
  let polibioMtx = new Array(n).fill(new Array(n))
  const newAlphabet = alphabet.filter(char => char !== 'J')

  polibioMtx = polibioMtx
    .map((row, i) => {
      return newAlphabet.slice(i * 5, i * 5 + 5)
    })

  const encrypt = Array.from(text)
    .map(character => findKeyFromCharacter(character, polibioMtx))
    .filter(key => key)

  return encrypt
}

/**
 * Decrypt the keys into text
 * @param {Array<string>} encryptedKeys An array with the encrypted keys
 * @returns {string} String decrypted
 */
const decrypt = (encryptedKeys) => {
  const n = 5
  const newAlphabet = alphabet.filter(char => char !== 'J')
  let polibioMtx = new Array(n).fill(new Array(n))

  polibioMtx = polibioMtx
    .map((row, i) => {
      return newAlphabet.slice(i * 5, i * 5 + 5)
    })

  const decryptedText = encryptedKeys.map(key => {
    return findCharacterFromKey(key, polibioMtx)
  })

  return decryptedText.join('')
}

export default {
  encrypt,
  decrypt
}
