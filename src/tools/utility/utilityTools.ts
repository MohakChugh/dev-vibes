import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import { UAParser } from 'ua-parser-js';

// 31. Hashes
export const sha256 = (str: string) => CryptoJS.SHA256(str).toString();
export const md5 = (str: string) => CryptoJS.MD5(str).toString();

// 34. Password Gen
export const generatePassword = (len: number) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    return Array.from({length: len}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

// 35. UUID
export const generateUuid = () => uuidv4();

// 92. UA Parser
export const parseUA = (ua: string) => new UAParser(ua).getResult();
