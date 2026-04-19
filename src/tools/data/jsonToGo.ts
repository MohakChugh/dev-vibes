export function jsonToGo(json: string, rootName: string = "RootObject"): string {
  try {
    const obj = JSON.parse(json);
    const structs: string[] = [];
    const seenStructs = new Set<string>();

    function toPascalCase(str: string): string {
      return str.replace(/(_\w)/g, m => m[1].toUpperCase()).replace(/^./, m => m.toUpperCase());
    }

    function generate(data: any, name: string): string {
      if (data === null) return "interface{}";
      if (Array.isArray(data)) {
        if (data.length === 0) return "[]interface{}";
        const types = new Set(data.map(item => generate(item, name)));
        return `[]${Array.from(types)[0] || "interface{}"}`;
      }
      if (typeof data === "object") {
        const structName = toPascalCase(name);
        if (seenStructs.has(structName)) return structName;

        let result = `type ${structName} struct {\n`;
        for (const key in data) {
          const type = generate(data[key], key);
          result += `  ${toPascalCase(key)} ${type} \`json:"${key}"\`\n`;
        }
        result += `}`;
        structs.push(result);
        seenStructs.add(structName);
        return structName;
      }
      
      switch (typeof data) {
        case "string": return "string";
        case "number": return data % 1 === 0 ? "int" : "float64";
        case "boolean": return "bool";
        default: return "interface{}";
      }
    }

    generate(obj, rootName);
    return structs.reverse().join("\n\n");
  } catch (e) {
    throw new Error("Invalid JSON input");
  }
}
