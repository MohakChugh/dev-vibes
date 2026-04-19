export const unixToDate = (ts: number) => new Date(ts * 1000).toISOString();
export const bytesToMb = (bytes: number) => (bytes / 1024 / 1024).toFixed(2) + " MB";
