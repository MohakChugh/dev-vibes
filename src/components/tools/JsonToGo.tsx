import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { jsonToGo } from "@/tools/data/jsonToGo"

export default function JsonToGo() {
  const [input, setInput] = React.useState('{\n  "id": 1,\n  "name": "Leanne Graham",\n  "is_active": true,\n  "balance": 1234.56\n}')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = jsonToGo(input)
      setOutput(result)
    } catch (e: any) {
      setOutput(`// Error: ${e.message}`)
    }
  }, [input])

  return (
    <ToolGrid>
      <CodeEditor
        label="JSON Input"
        value={input}
        onChange={setInput}
        placeholder="Paste your JSON here..."
      />
      <CodeEditor
        label="Go Structs"
        value={output}
        readOnly
        placeholder="Go structs will appear here..."
      />
    </ToolGrid>
  )
}
