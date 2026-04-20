export const getLocalStorage = () => JSON.stringify(localStorage);
export const getBrowserInfo = () => ({ ua: navigator.userAgent, lang: navigator.language });
