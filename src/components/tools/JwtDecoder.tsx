import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { jwtDecode } from "@/tools/encoding/encodingTools"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function JwtDecoder() {
  const [input, setInput] = React.useState("")
  const [header, setHeader] = React.useState("")
  const [payload, setPayload] = React.useState("")

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setHeader("")
        setPayload("")
        return
      }
      const decoded = jwtDecode(input)
      setHeader(JSON.stringify(decoded.header, null, 2))
      setPayload(JSON.stringify(decoded.payload, null, 2))
    } catch (e: any) {
      setHeader(`// Error: ${e.message}`)
      setPayload(`// Error: ${e.message}`)
    }
  }, [input])

  return (
    <div class="space-y-6">
      <CodeEditor
        label="JWT Token"
        value={input}
        onChange={setInput}
        placeholder="Paste your JWT here..."
        className="min-h-[100px]"
      />
      
      <ToolGrid>
        <CodeEditor
          label="Header"
          value={header}
          readOnly
          placeholder="Header will appear here..."
        />
        <CodeEditor
          label="Payload"
          value={payload}
          readOnly
          placeholder="Payload will appear here..."
        />
      </ToolGrid>
      
      <Card class="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900">
        <CardHeader>
          <CardTitle class="text-yellow-800 dark:text-yellow-200 text-sm font-bold">Security Note</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-xs text-yellow-700 dark:text-yellow-300">
            This tool decodes the JWT locally in your browser. It does NOT validate the signature or send the token to any server. Use it only for debugging.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
