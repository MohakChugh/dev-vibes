export function jsonToPython(json: string, rootName: string = "RootObject"): string {
  try {
    const obj = JSON.parse(json);
    const classes: string[] = [];
    const seenClasses = new Set<string>();

    function toPascalCase(str: string): string {
      return str.replace(/(_\w)/g, m => m[1].toUpperCase()).replace(/^./, m => m.toUpperCase());
    }

    function generate(data: any, name: string): string {
      if (data === null) return "Any";
      if (Array.isArray(data)) {
        if (data.length === 0) return "List[Any]";
        const types = new Set(data.map(item => generate(item, name)));
        return `List[${Array.from(types)[0] || "Any"}]`;
      }
      if (typeof data === "object") {
        const className = toPascalCase(name);
        if (seenClasses.has(className)) return className;

        let result = `@dataclass\nclass ${className}:\n`;
        const keys = Object.keys(data);
        if (keys.length === 0) {
            result += "    pass\n";
        } else {
            for (const key in data) {
              const type = generate(data[key], key);
              result += `    ${key}: ${type}\n`;
            }
        }
        classes.push(result);
        seenClasses.add(className);
        return className;
      }
      
      switch (typeof data) {
        case "string": return "str";
        case "number": return data % 1 === 0 ? "int" : "float";
        case "boolean": return "bool";
        default: return "Any";
      }
    }

    generate(obj, rootName);
    return "from dataclasses import dataclass\nfrom typing import List, Any\n\n\n" + classes.reverse().join("\n\n");
  } catch (e) {
    throw new Error("Invalid JSON input");
  }
}
