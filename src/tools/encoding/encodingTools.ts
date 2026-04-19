import { Buffer } from "buffer";
import { decoder as base32Decoder, encoder as base32Encoder } from "base32.js";
import bs58 from "bs58";
import punycode from "punycode";
import he from "he";

// 11. Base64
export const base64Encode = (str: string) => btoa(unescape(encodeURIComponent(str)));
export const base64Decode = (str: string) => decodeURIComponent(escape(atob(str)));

// 12. URL
export const urlEncode = (str: string) => encodeURIComponent(str);
export const urlDecode = (str: string) => decodeURIComponent(str);

// 13. JWT
export const jwtDecode = (token: string) => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error("Invalid JWT format");
    const header = JSON.parse(base64Decode(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
    const payload = JSON.parse(base64Decode(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    return { header, payload };
  } catch (e: any) {
    throw new Error(`JWT Decode Error: ${e.message}`);
  }
};

// 14. HTML Entities
export const htmlEncode = (str: string) => he.encode(str);
export const htmlDecode = (str: string) => he.decode(str);

// 15. Binary
export const textToBinary = (str: string) => str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
export const binaryToText = (bin: string) => bin.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');

// 16. Hex
export const stringToHex = (str: string) => str.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
export const hexToString = (hex: string) => (hex.match(/.{1,2}/g) || []).map(h => String.fromCharCode(parseInt(h, 16))).join('');

// 17. Base32 / Base58
export const base32EncodeStr = (str: string) => {
    const buf = Buffer.from(str, 'utf8');
    return new base32Encoder({ type: "rfc4648", lc: false }).write(buf).finalize();
}
export const base32DecodeStr = (str: string) => {
    const buf = new base32Decoder({ type: "rfc4648" }).write(str).finalize();
    return Buffer.from(buf).toString('utf8');
}
export const base58EncodeStr = (str: string) => bs58.encode(Buffer.from(str, 'utf8'));
export const base58DecodeStr = (str: string) => Buffer.from(bs58.decode(str)).toString('utf8');

// 18. Punycode
export const punycodeEncode = (str: string) => punycode.toASCII(str);
export const punycodeDecode = (str: string) => punycode.toUnicode(str);

// 19. Rot13
export const rot13 = (str: string) => str.replace(/[a-zA-Z]/g, (c: any) => String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26));

// 20. Morse
const MORSE_CODE: Record<string, string> = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};
const REVERSE_MORSE = Object.fromEntries(Object.entries(MORSE_CODE).map(([k, v]) => [v, k]));

export const textToMorse = (str: string) => str.toUpperCase().split('').map(c => MORSE_CODE[c] || '').join(' ');
export const morseToText = (morse: string) => morse.split(' ').map(m => REVERSE_MORSE[m] || '').join('');
