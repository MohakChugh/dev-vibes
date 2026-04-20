export const levenshtein = (a: string, b: string) => {
    const matrix = Array.from({length: a.length + 1}, (_, i) => [i]);
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            matrix[i][j] = Math.min(matrix[i-1][j] + 1, matrix[i][j-1] + 1, matrix[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
        }
    }
    return matrix[a.length][b.length];
};
