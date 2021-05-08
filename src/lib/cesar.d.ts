/**
   * Encrypt text  using spanish Cesar encryption
   * @param {string} text - A string to be encrypted
   * @param {number} rot - Scroll numer, can be from 0 to 26
   * @returns {string} Encrypted text
   */
export declare const encrypt: (text: string, rot: number = 3) => string;

/**
   * Decrypt text using spanish Cesar encryption
   * @param {string} text - A string to be decrypted
   * @param {number} rot - Scroll numer, can be from 0 to 26
   * @returns {string} Decrypted text
   */
export declare const decrypt: (text: string, rot: number = 3) => string;