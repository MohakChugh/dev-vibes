export const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;
export const countChars = (text: string) => text.length;
export const removeDuplicates = (text: string) => [...new Set(text.split('\n'))].join('\n');
export const sortLines = (text: string) => text.split('\n').sort().join('\n');
