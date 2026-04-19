import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {
  encodeLabel?: string;
  decodeLabel?: string;
  onEncode: (val: string) => string;
  onDecode: (val: string) => string;
  initialValue?: string;
}

export default function EncoderDecoder({ 
  encodeLabel = "Plain Text", 
  decodeLabel = "Encoded Output", 
  onEncode, 
  onDecode,
  initialValue = "Hello World!"
}: Props) {
  const [plain, setPlain] = React.useState(initialValue)
  const [encoded, setEncoded] = React.useState("")
  
  const [encodedIn, setEncodedIn] = React.useState("")
  const [plainOut, setPlainOut] = React.useState("")

  React.useEffect(() => {
    try {
      setEncoded(plain ? onEncode(plain) : "")
    } catch (e: any) {
      setEncoded(`Error: ${e.message}`)
    }
  }, [plain, onEncode])

  React.useEffect(() => {
    try {
      setPlainOut(encodedIn ? onDecode(encodedIn) : "")
    } catch (e: any) {
      setPlainOut(`Error: ${e.message}`)
    }
  }, [encodedIn, onDecode])

  return (
    <Tabs defaultValue="encode" class="w-full">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="encode">Encode</TabsTrigger>
        <TabsTrigger value="decode">Decode</TabsTrigger>
      </TabsList>
      <TabsContent value="encode">
        <ToolGrid>
          <CodeEditor
            label={encodeLabel}
            value={plain}
            onChange={setPlain}
          />
          <CodeEditor
            label={decodeLabel}
            value={encoded}
            readOnly
          />
        </ToolGrid>
      </TabsContent>
      <TabsContent value="decode">
        <ToolGrid>
          <CodeEditor
            label={decodeLabel}
            value={encodedIn}
            onChange={setEncodedIn}
          />
          <CodeEditor
            label={encodeLabel}
            value={plainOut}
            readOnly
          />
        </ToolGrid>
      </TabsContent>
    </Tabs>
  )
}
