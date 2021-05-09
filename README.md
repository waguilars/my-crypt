<h1 align="center">Welcome to my-crypt 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/waguilars" target="_blank">
    <img alt="Twitter: waguilars" src="https://img.shields.io/twitter/follow/waguilars.svg?style=social" />
  </a>
</p>

> This package contains some cryptography algorithms 

## Install

```sh
npm install
```

## Usage

To start the app in development mode use:

```sh
npm run start:dev
```

To build the project use:

```sh
npm run build
```

## Examples

All of this examples use the spanish alphabet.

### Cesar Encryption

If you encrypt a message without the number of jumps, by default uses 3.

```javascript
import Cesar from './lib/cesar'


const message = 'Very secure encryption'

// To encrypt a message use encrypt method
const newMessage = Cesar.encrypt(message)
console.log('Encrypted message: ', newMessage) // Must return: Yhub vhfxuh hpfubswlrp

// To decrypt the message use decrypt method
const originalMessage = Cesar.decrypt(newMessage)
console.log('Original message:', originalMessage) // Must return:  Very secure encryption
```

If you need to set the number of jumps, send as second parameter a number between 0 and 26

```javascript
const anotherMsg = 'Encrypted Hello world'

// Now use 5 jumps to encrypt
const encrypted = Cesar.encrypt(anotherMsg, 5)
console.log(encrypted) // Jrhwduyji Mjppt btwpi

const decrypted = Cesar.decrypt(encrypted, 5)
console.log(decrypted) // Encrypted Hello world
```

### Vigenere Encryption

```javascript
import Vigenere from './lib/vigenere'

const msg = 'Vigenere encryption by wilson aguilar'
const key = 'superkey'

const newMsg = Vigenere.encrypt(msg, key)
console.log(newMsg) // Ñcvieñvc whrvpzxghh qc ñroqhh pkmroyk

const originalMsg = Vigenere.decrypt(newMsg, key)
console.log(originalMsg) // Vigenere encryption by wilson aguilar

```

### Polybio Encryption

```javascript
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
```

## Author

👤 **Wilson Aguilar <waguilars@est.ups.edu.ec>**

* Twitter: [@waguilars](https://twitter.com/waguilars)
* Github: [@waguilars](https://github.com/waguilars)
* LinkedIn: [@waguilars](https://linkedin.com/in/waguilars)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_