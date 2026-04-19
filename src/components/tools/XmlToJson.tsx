import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { xmlToJson } from "@/tools/data/xmlToJson"

export default function XmlToJson() {
  const [input, setInput] = React.useState('<note>\n  <to>Tove</to>\n  <from>Jani</from>\n  <heading>Reminder</heading>\n  <body>Don\'t forget me this weekend!</body>\n</note>')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = xmlToJson(input)
      setOutput(result)
    } catch (e: any) {
      setOutput(`// Error: ${e.message}`)
    }
  }, [input])

  return (
    <ToolGrid>
      <CodeEditor
        label="XML Input"
        value={input}
        onChange={setInput}
        placeholder="Paste your XML here..."
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
