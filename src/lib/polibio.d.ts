/**
 * Encrypt a text using the polibio's encryption
 * @param {string} text - text to be encrypted
 * @returns {Array<string>} An array with the keys of each character encrypted
 */
export declare const encrypt: (text: string) => string[];



/**
 * Decrypt the keys into text
 * @param {Array<string>} encryptedKeys An array with the encrypted keys
 * @returns {string} String decrypted
 */
export declare const decrypt: (encryptedKeys: string[]) => string