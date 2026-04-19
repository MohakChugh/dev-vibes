import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { jsonToHtmlTable } from "@/tools/data/jsonToHtmlTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function JsonToHtmlTable() {
  const [input, setInput] = React.useState('[\n  {\n    "id": 1,\n    "name": "Leanne Graham",\n    "email": "Sincere@april.biz"\n  },\n  {\n    "id": 2,\n    "name": "Ervin Howell",\n    "email": "Shanna@melissa.tv"\n  }\n]')
  const [output, setOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput("")
        return
      }
      const result = jsonToHtmlTable(input)
      setOutput(result)
    } catch (e: any) {
      setOutput(`<!-- Error: ${e.message} -->`)
    }
  }, [input])

  return (
    <div class="space-y-6">
      <ToolGrid>
        <CodeEditor
          label="JSON Array"
          value={input}
          onChange={setInput}
          placeholder="Paste JSON array here..."
        />
        <CodeEditor
          label="HTML Table Markup"
          value={output}
          readOnly
          placeholder="HTML will appear here..."
        />
      </ToolGrid>
      
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent class="overflow-x-auto">
          <div dangerouslySetInnerHTML={{ __html: output }} />
        </CardContent>
      </Card>
    </div>
  )
}
