/**
 * Encrypt a text using the vigenere algorithm
 * @param {string} text - text to be encripted
 * @param {string} key  - key to encrypt
 * @returns {string} Encrypted text
 */
export declare const encrypt: (text: string, key: string) => string;

/**
 * Decrypt a text that was encrypted with vigenere method
 * @param {string} text - text to be decrypted
 * @param {string} key  - text to decrypt the text
 * @returns {string} text decrypted
 */
export declare const decrypt: (text: string, key: string) => string;