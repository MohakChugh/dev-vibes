import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { jsonToJava } from "@/tools/data/jsonToJava"

export default function JsonToJava() {
  const [input, setInput] = React.useState('{\n  "id": 1,\n  "name": "Leanne Graham",\n  "username": "Bret",\n  "email": "Sincere@april.biz"\n}')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = jsonToJava(input)
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
        label="Java POJOs (Lombok)"
        value={output}
        readOnly
        placeholder="Java classes will appear here..."
      />
    </ToolGrid>
  )
}
