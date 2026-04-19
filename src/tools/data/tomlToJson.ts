import toml from "@iarna/toml";

export function tomlToJson(tomlStr: string): string {
  try {
    const doc = toml.parse(tomlStr);
    return JSON.stringify(doc, null, 2);
  } catch (e: any) {
    throw new Error(`Invalid TOML: ${e.message}`);
  }
}
