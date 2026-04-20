import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import { Card } from "@/components/ui/card"

export const GenericTool = ({ title, logic }: { title: string, logic: (input: string) => string }) => {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    React.useEffect(() => { try { setOutput(logic(input)) } catch(e) { setOutput("Error") } }, [input, logic]);
    return <div className="space-y-4"><CodeEditor value={input} onChange={setInput} label="Input" /><CodeEditor value={output} readOnly label="Result" /></div>
}
