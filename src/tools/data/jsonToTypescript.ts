export function jsonToTypescript(json: string, rootName: string = "RootObject"): string {
  try {
    const obj = JSON.parse(json);
    const interfaces: string[] = [];
    const seenTypes = new Set<string>();

    function generate(data: any, name: string): string {
      if (data === null) return "any";
      if (Array.isArray(data)) {
        if (data.length === 0) return "any[]";
        const types = new Set(data.map(item => generate(item, name + "Item")));
        return Array.from(types).join(" | ") + "[]";
      }
      if (typeof data === "object") {
        const interfaceName = name.charAt(0).toUpperCase() + name.slice(1);
        if (seenTypes.has(interfaceName)) return interfaceName;
        
        let result = `export interface ${interfaceName} {\n`;
        for (const key in data) {
          const type = generate(data[key], key);
          result += `  ${key}: ${type};\n`;
        }
        result += `}`;
        interfaces.push(result);
        seenTypes.add(interfaceName);
        return interfaceName;
      }
      return typeof data;
    }

    generate(obj, rootName);
    return interfaces.reverse().join("\n\n");
  } catch (e) {
    throw new Error("Invalid JSON input");
  }
}
