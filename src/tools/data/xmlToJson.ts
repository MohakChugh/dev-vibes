import { XMLParser } from "fast-xml-parser";

export function xmlToJson(xml: string): string {
  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_"
    });
    const jsonObj = parser.parse(xml);
    return JSON.stringify(jsonObj, null, 2);
  } catch (e) {
    throw new Error("Invalid XML input");
  }
}
