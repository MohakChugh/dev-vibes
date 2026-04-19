import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { yamlToJson, jsonToYaml } from "@/tools/data/yamlJson"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function YamlJsonConverter() {
  const [yamlInput, setYamlInput] = React.useState('name: Dev-Vibes\nversion: 1.0.0\ndescription: 100 developer tools\nfeatures:\n  - client-side\n  - fast\n  - free')
  const [jsonOutput, setJsonOutput] = React.useState("")
  
  const [jsonInput, setJsonInput] = React.useState('{\n  "name": "Dev-Vibes",\n  "version": "1.0.0",\n  "description": "100 developer tools"\n}')
  const [yamlOutput, setYamlOutput] = React.useState("")

  React.useEffect(() => {
    try {
      if (yamlInput.trim()) {
        setJsonOutput(yamlToJson(yamlInput))
      }
    } catch (e: any) {
      setJsonOutput(`// Error: ${e.message}`)
    }
  }, [yamlInput])

  React.useEffect(() => {
    try {
      if (jsonInput.trim()) {
        setYamlOutput(jsonToYaml(jsonInput))
      }
    } catch (e: any) {
      setYamlOutput(`# Error: ${e.message}`)
    }
  }, [jsonInput])

  return (
    <Tabs defaultValue="yaml-to-json" class="w-full">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="yaml-to-json">YAML → JSON</TabsTrigger>
        <TabsTrigger value="json-to-yaml">JSON → YAML</TabsTrigger>
      </TabsList>
      <TabsContent value="yaml-to-json">
        <ToolGrid>
          <CodeEditor
            label="YAML Input"
            value={yamlInput}
            onChange={setYamlInput}
            placeholder="Paste YAML here..."
          />
          <CodeEditor
            label="JSON Output"
            value={jsonOutput}
            readOnly
            placeholder="JSON will appear here..."
          />
        </ToolGrid>
      </TabsContent>
      <TabsContent value="json-to-yaml">
        <ToolGrid>
          <CodeEditor
            label="JSON Input"
            value={jsonInput}
            onChange={setJsonInput}
            placeholder="Paste JSON here..."
          />
          <CodeEditor
            label="YAML Output"
            value={yamlOutput}
            readOnly
            placeholder="YAML will appear here..."
          />
        </ToolGrid>
      </TabsContent>
    </Tabs>
  )
}
