import yaml from "js-yaml";

export function yamlToJson(yamlStr: string): string {
  try {
    const doc = yaml.load(yamlStr);
    return JSON.stringify(doc, null, 2);
  } catch (e: any) {
    throw new Error(`Invalid YAML: ${e.message}`);
  }
}

export function jsonToYaml(jsonStr: string): string {
  try {
    const obj = JSON.parse(jsonStr);
    return yaml.dump(obj, { indent: 2 });
  } catch (e: any) {
    throw new Error(`Invalid JSON: ${e.message}`);
  }
}
