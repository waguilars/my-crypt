import Cesar from './lib/cesar'

const message = 'Very secure encryption'

// To encrypt a message use encrypt method
const newMessage = Cesar.encrypt(message)
console.log('Encrypted message: ', newMessage) // Must return: Yhub vhfxuh hpfubswlrp

// To decrypt the message use decrypt method
const originalMessage = Cesar.decrypt(newMessage)
console.log('Original message:', originalMessage) // Must return:  Very secure encryption

const anotherMsg = 'Encrypted Hello world'

// Now use 5 jumps to encrypt
const encrypted = Cesar.encrypt(anotherMsg, 5)
console.log(encrypted) // Jrhwduyji Mjppt btwpi

const decrypted = Cesar.decrypt(encrypted, 5)
console.log(decrypted) // Encrypted Hello world
