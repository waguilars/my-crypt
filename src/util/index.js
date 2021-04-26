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
  let newKey = ''.concat(key)
  while (newKey.length < text.length) {
    newKey += key
  }

  return newKey.slice(0, text.length)
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
