import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { sqlToJson } from "@/tools/data/sqlToJson"

export default function SqlToJson() {
  const [input, setInput] = React.useState("INSERT INTO users (id, name, email) VALUES (1, 'Leanne Graham', 'Sincere@april.biz');\nINSERT INTO users (id, name, email) VALUES (2, 'Ervin Howell', 'Shanna@melissa.tv');")
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = sqlToJson(input)
      setOutput(result)
    } catch (e: any) {
      setOutput(`// Error: ${e.message}`)
    }
  }, [input])

  return (
    <ToolGrid>
      <CodeEditor
        label="SQL (INSERT statements)"
        value={input}
        onChange={setInput}
        placeholder="INSERT INTO table (col1, col2) VALUES (val1, val2);"
      />
      <CodeEditor
        label="JSON Output"
        value={output}
        readOnly
        placeholder="JSON will appear here..."
      />
    </ToolGrid>
  )
}
