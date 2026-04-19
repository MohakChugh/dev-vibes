import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { tomlToJson } from "@/tools/data/tomlToJson"

export default function TomlToJson() {
  const [input, setInput] = React.useState('title = "TOML Example"\n\n[owner]\nname = "Tom Preston-Werner"\ndob = 1979-05-27T07:32:00Z\n\n[database]\nserver = "192.168.1.1"\nports = [ 8001, 8001, 8002 ]\nconnection_max = 5000\nenabled = true')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = tomlToJson(input)
      setOutput(result)
    } catch (e: any) {
      setOutput(`// Error: ${e.message}`)
    }
  }, [input])

  return (
    <ToolGrid>
      <CodeEditor
        label="TOML Input"
        value={input}
        onChange={setInput}
        placeholder="Paste TOML here..."
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
