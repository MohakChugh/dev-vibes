import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { jsonToPython } from "@/tools/data/jsonToPython"

export default function JsonToPython() {
  const [input, setInput] = React.useState('{\n  "id": 1,\n  "name": "Leanne Graham",\n  "username": "Bret",\n  "email": "Sincere@april.biz"\n}')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = jsonToPython(input)
      setOutput(result)
    } catch (e: any) {
      setOutput(`# Error: ${e.message}`)
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
        label="Python Dataclasses"
        value={output}
        readOnly
        placeholder="Python classes will appear here..."
      />
    </ToolGrid>
  )
}
