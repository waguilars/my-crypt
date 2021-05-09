import Vigenere from './lib/vigenere'

const msg = 'Vigenere encryption by wilson aguilar'
const key = 'superkey'

const newMsg = Vigenere.encrypt(msg, key)
console.log(newMsg) // Ñcvieñvc whrvpzxghh qc ñroqhh pkmroyk

const originalMsg = Vigenere.decrypt(newMsg, key)
console.log(originalMsg) // Vigenere encryption by wilson aguilar
