import Cesar from './lib/cesar'
import Polybio from './lib/polibio'
import Vigenere from './lib/vigenere'

const frase = 'AMORCONAMORSEPAGA'
const secret = 'AMARILLO'

// const code = Cesar.encrypt(frase, 3)
const code = Polybio.encrypt(frase).join('')
// const code = Vigenere.encrypt(frase, secret)

console.log(code)
