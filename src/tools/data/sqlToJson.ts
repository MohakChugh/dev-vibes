export function sqlToJson(sql: string): string {
  try {
    const lines = sql.split('\n').filter(l => l.trim().toLowerCase().startsWith('insert into'));
    if (lines.length === 0) {
      throw new Error("No INSERT INTO statements found");
    }

    const results: any[] = [];

    lines.forEach(line => {
      const match = line.match(/insert into\s+(\w+)\s*\((.*?)\)\s*values\s*\((.*?)\)/i);
      if (match) {
        const columns = match[2].split(',').map(c => c.trim().replace(/[`"']/g, ''));
        const values = match[3].split(',').map(v => {
          v = v.trim();
          if (v.toLowerCase() === 'null') return null;
          if (v.startsWith("'") || v.startsWith('"')) return v.slice(1, -1);
          if (!isNaN(Number(v))) return Number(v);
          return v;
        });

        const obj: any = {};
        columns.forEach((col, i) => {
          obj[col] = values[i];
        });
        results.push(obj);
      }
    });

    return JSON.stringify(results, null, 2);
  } catch (e: any) {
    throw new Error(`Error parsing SQL: ${e.message}`);
  }
}
