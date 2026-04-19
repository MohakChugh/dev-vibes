import Papa from "papaparse";

export function csvToJson(csvStr: string): string {
  try {
    const result = Papa.parse(csvStr, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true
    });
    return JSON.stringify(result.data, null, 2);
  } catch (e: any) {
    throw new Error(`Invalid CSV: ${e.message}`);
  }
}

export function jsonToCsv(jsonStr: string): string {
  try {
    const obj = JSON.parse(jsonStr);
    return Papa.unparse(obj);
  } catch (e: any) {
    throw new Error(`Invalid JSON: ${e.message}`);
  }
}
