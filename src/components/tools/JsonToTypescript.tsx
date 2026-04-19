import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { jsonToTypescript } from "@/tools/data/jsonToTypescript"
import { toast } from "sonner"

export default function JsonToTypescript() {
  const [input, setInput] = React.useState('{\n  "id": 1,\n  "name": "Leanne Graham",\n  "username": "Bret",\n  "email": "Sincere@april.biz",\n  "address": {\n    "street": "Kulas Light",\n    "suite": "Apt. 556",\n    "city": "Gwenborough",\n    "zipcode": "92998-3874"\n  }\n}')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = jsonToTypescript(input)
      setOutput(result)
    } catch (e: any) {
      // Don't toast on every keystroke error, but maybe show in output
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
        label="TypeScript Interfaces"
        value={output}
        readOnly
        placeholder="TypeScript interfaces will appear here..."
      />
    </ToolGrid>
  )
}
