import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import { Button } from "@/components/ui/button"
import { sha256, md5, generatePassword, generateUuid } from "@/tools/utility/utilityTools"

export const HashTool = ({ type }: { type: 'sha256' | 'md5' }) => {
    const [input, setInput] = React.useState("")
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { setOutput(type === 'sha256' ? sha256(input) : md5(input)) }, [input, type])
    return <div className="space-y-4"><CodeEditor value={input} onChange={setInput} label="Input Text" /><CodeEditor value={output} readOnly label="Hash" /></div>
}

export const PasswordTool = () => {
    const [len, setLen] = React.useState(16)
    const [output, setOutput] = React.useState(generatePassword(16))
    return <div className="space-y-4"><Button onClick={() => setOutput(generatePassword(len))}>Generate</Button><CodeEditor value={output} readOnly label="Password" /></div>
}

export const UuidTool = () => {
    const [output, setOutput] = React.useState(generateUuid())
    return <div className="space-y-4"><Button onClick={() => setOutput(generateUuid())}>Generate New</Button><CodeEditor value={output} readOnly label="UUID" /></div>
}
