/**
 *
 * @param {string} char
 * @returns A boolean that represents if the character is lowerCase
 */
export const isLowerCase = (char) => {
  return char === char.toLowerCase()
}
/**
 *
 * @param {string} char
 * @returns A boolean that represents if the character is uppercase
 */
export const isUpperCase = (char) => {
  return char === char.toUpperCase()
}

/**
 * @param {string} text
 * @param {string} key
 * @returns {string} The same key with the text length
 */
export const normalizeKey = (text, key) => {
  // let newKey = ''.concat(key)
  // while (newKey.length < text.length) {
  //   newKey += key
  // }

  let newkey = ''

  let ikey = 0
  while (newkey.length !== text.length) {
    if (text[newkey.length] === ' ') {
      newkey += ' '
    } else {
      newkey += key[ikey]
      ikey = ikey >= key.length - 1 ? 0 : ikey + 1
    }
  }
  return newkey
  // return newKey.slice(0, text.length)
}

/**
 *
 * @param {string} char - A charcter to be searched in the alphabet
 * @param {Array<string>} alphabet - A string list that contains the alphabet
 * @returns {number}the index of the charact in the alphabet
 */
export const getCharacterIdx = (char, alphabet) => {
  char = char.toUpperCase()
  return alphabet.indexOf(char)
}

/**
 * This function find a character into polibio's matrix and return the keys
 * @param {String} char - Character to find in the matrix
 * @param {Array<Array<number>>} mtx - Polibio's matrix
 *
 * @returns {Array<number>} An array with the keys of the character
 */
export const findKeyFromCharacter = (char, mtx) => {
  const charUpper = char.toUpperCase()
  const keys = ['A', 'B', 'C', 'D', 'E']

  for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[0].length; j++) {
      if (charUpper === mtx[i][j]) {
        return [keys[i], keys[j]].join('')
      }

      if (charUpper === 'J' && mtx[i][j] === 'I') {
        return [keys[i], keys[j]].join('')
      }
    }
  }
}

/**
 * Find the original value in the polibio's matrix using the key
 * @param {string} key A string with the key to be finded
 * @param {string[][]} mtx Polibio's matrix to desencrypt the key
 * @returns {string} a character decrypted
 */
export const findCharacterFromKey = (key, mtx) => {
  const [key1, key2] = key.toUpperCase()
  const keys = ['A', 'B', 'C', 'D', 'E']

  const index1 = keys.indexOf(key1)
  const index2 = keys.indexOf(key2)

  return mtx[index1][index2]
}
