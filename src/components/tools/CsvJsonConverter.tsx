import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { csvToJson, jsonToCsv } from "@/tools/data/csvJson"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CsvJsonConverter() {
  const [csvInput, setCsvInput] = React.useState('id,name,email\n1,Leanne Graham,Sincere@april.biz\n2,Ervin Howell,Shanna@melissa.tv')
  const [jsonOutput, setJsonOutput] = React.useState("")
  
  const [jsonInput, setJsonInput] = React.useState('[\n  {\n    "id": 1,\n    "name": "Leanne Graham",\n    "email": "Sincere@april.biz"\n  },\n  {\n    "id": 2,\n    "name": "Ervin Howell",\n    "email": "Shanna@melissa.tv"\n  }\n]')
  const [csvOutput, setCsvOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (csvInput.trim()) {
        setJsonOutput(csvToJson(csvInput))
      }
    } catch (e: any) {
      setJsonOutput(`// Error: ${e.message}`)
    }
  }, [csvInput])

  React.useEffect(() => {
    try {
      if (jsonInput.trim()) {
        setCsvOutput(jsonToCsv(jsonInput))
      }
    } catch (e: any) {
      setCsvOutput(`# Error: ${e.message}`)
    }
  }, [jsonInput])

  return (
    <Tabs defaultValue="csv-to-json" class="w-full">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="csv-to-json">CSV → JSON</TabsTrigger>
        <TabsTrigger value="json-to-csv">JSON → CSV</TabsTrigger>
      </TabsList>
      <TabsContent value="csv-to-json">
        <ToolGrid>
          <CodeEditor
            label="CSV Input"
            value={csvInput}
            onChange={setCsvInput}
            placeholder="Paste CSV here..."
          />
          <CodeEditor
            label="JSON Output"
            value={jsonOutput}
            readOnly
            placeholder="JSON will appear here..."
          />
        </ToolGrid>
      </TabsContent>
      <TabsContent value="json-to-csv">
        <ToolGrid>
          <CodeEditor
            label="JSON Input"
            value={jsonInput}
            onChange={setJsonInput}
            placeholder="Paste JSON array here..."
          />
          <CodeEditor
            label="CSV Output"
            value={csvOutput}
            readOnly
            placeholder="CSV will appear here..."
          />
        </ToolGrid>
      </TabsContent>
    </Tabs>
  )
}
