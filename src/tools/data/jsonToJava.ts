export function jsonToJava(json: string, rootName: string = "RootObject"): string {
  try {
    const obj = JSON.parse(json);
    const classes: string[] = [];
    const seenClasses = new Set<string>();

    function toPascalCase(str: string): string {
      return str.replace(/(_\w)/g, m => m[1].toUpperCase()).replace(/^./, m => m.toUpperCase());
    }

    function generate(data: any, name: string): string {
      if (data === null) return "Object";
      if (Array.isArray(data)) {
        if (data.length === 0) return "List<Object>";
        const types = new Set(data.map(item => generate(item, name)));
        return `List<${Array.from(types)[0] || "Object"}>`;
      }
      if (typeof data === "object") {
        const className = toPascalCase(name);
        if (seenClasses.has(className)) return className;

        let result = `@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class ${className} {\n`;
        for (const key in data) {
          const type = generate(data[key], key);
          result += `  private ${type} ${key};\n`;
        }
        result += `}`;
        classes.push(result);
        seenClasses.add(className);
        return className;
      }
      
      switch (typeof data) {
        case "string": return "String";
        case "number": return data % 1 === 0 ? "Long" : "Double";
        case "boolean": return "Boolean";
        default: return "Object";
      }
    }

    generate(obj, rootName);
    return "import lombok.Data;\nimport lombok.NoArgsConstructor;\nimport lombok.AllArgsConstructor;\nimport java.util.List;\n\n" + classes.reverse().join("\n\n");
  } catch (e) {
    throw new Error("Invalid JSON input");
  }
}
