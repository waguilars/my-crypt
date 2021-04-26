import Cesar from './lib/cesar'
import Vigenere from './lib/vigenere'

const mensaje = 'bienvenido'
const key = 'estrellado'

console.log('Mensaje', mensaje)

const encCesar = Cesar.encrypt(mensaje)
const decCesar = Cesar.decrypt(encCesar)

console.log('Cesar')
console.log('Encriptado', encCesar)
console.log('Desencriptado', decCesar)

const encVigenere = Vigenere.encrypt(mensaje, key)
const decVigenere = Vigenere.decrypt(encVigenere, key)

console.log('Vigenere')
console.log('Encriptado', encVigenere)
console.log('Desencriptado', decVigenere)
