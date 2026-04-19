import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { prettifyGraphQL, generateMarkdownTable, renderLatex } from "@/tools/format/moreFormatTools"
import { Card, CardContent } from "@/components/ui/card"

export const GraphQLPrettifier = () => {
    const [input, setInput] = React.useState('query{user(id:1){name}}')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { try { setOutput(prettifyGraphQL(input)) } catch(e) { setOutput("Invalid GraphQL") } }, [input])
    return <ToolGrid><CodeEditor value={input} onChange={setInput} /><CodeEditor value={output} readOnly /></ToolGrid>
}

export const MarkdownTableGenerator = () => {
    const [input, setInput] = React.useState('[{"Name":"Alice","Age":30},{"Name":"Bob","Age":25}]')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { try { setOutput(generateMarkdownTable(JSON.parse(input))) } catch(e) { setOutput("Invalid JSON") } }, [input])
    return <ToolGrid><CodeEditor value={input} onChange={setInput} /><CodeEditor value={output} readOnly /></ToolGrid>
}

export const LatexEditor = () => {
    const [input, setInput] = React.useState('E = mc^2')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { setOutput(renderLatex(input)) }, [input])
    return <div className="space-y-4"><CodeEditor value={input} onChange={setInput} label="LaTeX Equation" /><Card className="p-4"><div dangerouslySetInnerHTML={{__html: output}}/></Card></div>
}
