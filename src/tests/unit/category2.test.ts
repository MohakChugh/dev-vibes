import { describe, it, expect } from 'vitest';
import * as tools from '@/tools/encoding/encodingTools';

describe('Category 2: Encoders & Decoders', () => {
  it('Tool 11: Base64', () => {
    const text = 'Hello World';
    const encoded = tools.base64Encode(text);
    expect(encoded).toBe('SGVsbG8gV29ybGQ=');
    expect(tools.base64Decode(encoded)).toBe(text);
  });

  it('Tool 12: URL', () => {
    const text = 'Hello World!';
    const encoded = tools.urlEncode(text);
    expect(encoded).toBe('Hello%20World!');
    expect(tools.urlDecode(encoded)).toBe(text);
  });

  it('Tool 13: JWT', () => {
    // Just a sample JWT (header.payload.sig)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoyNTE2MjM5MDIyfQ.sig';
    const decoded = tools.jwtDecode(token);
    expect(decoded.header.alg).toBe('HS256');
    expect(decoded.payload.name).toBe('John Doe');
  });

  it('Tool 14: HTML Entities', () => {
    const text = '<p>Hello</p>';
    const encoded = tools.htmlEncode(text);
    expect(tools.htmlDecode(encoded)).toBe(text);
  });

  it('Tool 15: Binary', () => {
    const text = 'A';
    const binary = tools.textToBinary(text);
    expect(binary).toBe('01000001');
    expect(tools.binaryToText(binary)).toBe(text);
  });

  it('Tool 16: Hex', () => {
    const text = 'A';
    const hex = tools.stringToHex(text);
    expect(hex).toBe('41');
    expect(tools.hexToString(hex)).toBe(text);
  });

  it('Tool 17: Base58', () => {
    const text = 'Hello';
    const encoded = tools.base58EncodeStr(text);
    expect(tools.base58DecodeStr(encoded)).toBe(text);
  });

  it('Tool 18: Punycode', () => {
    const domain = 'mañana.com';
    const encoded = tools.punycodeEncode(domain);
    expect(encoded).toBe('xn--maana-pta.com');
    expect(tools.punycodeDecode(encoded)).toBe(domain);
  });

  it('Tool 19: Rot13', () => {
    const text = 'Hello';
    const encoded = tools.rot13(text);
    expect(encoded).toBe('Uryyb');
    expect(tools.rot13(encoded)).toBe(text);
  });

  it('Tool 20: Morse', () => {
    const text = 'SOS';
    const morse = tools.textToMorse(text);
    expect(morse).toBe('... --- ...');
    expect(tools.morseToText(morse)).toBe('SOS');
  });
});
