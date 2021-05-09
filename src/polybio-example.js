import Polybio from './lib/polibio'

const msg = 'TESTINGTHEPOLYBIOMETHOD'

const newMsg = Polybio.encrypt(msg)
console.log(newMsg)
// This returns an array with each character encrypted
// [
//   'DD', 'AE', 'DC', 'DD',
//   'BD', 'CC', 'BB', 'DD',
//   'BC', 'AE', 'CE', 'CD',
//   'CA', 'ED', 'AB', 'BD',
//   'CD', 'CB', 'AE', 'DD',
//   'BC', 'CD', 'AD'
// ]

const original = Polybio.decrypt(newMsg)
console.log(original) // Return the original message but ignore the spaces
// TESTINGTHEPOLYBIOMETHOD
