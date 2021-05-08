import Cesar from './lib/cesar'
import Vigenere from './lib/vigenere'
import Polibio from './lib/polibio'

const mensaje = 'hoyesveinteysietedeabrilj'
const key = 'martes'

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

const encPolibio = Polibio.encrypt(mensaje)
const decPolibio = Polibio.decrypt(encPolibio)

console.log('Polibio')
console.log('Encriptado', encPolibio)
console.log('Desencriptado', decPolibio)
