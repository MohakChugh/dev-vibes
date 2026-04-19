import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import ToolGrid from "@/components/ToolGrid"
import { formatSql, beautifyCode, formatXml, explainCron } from "@/tools/format/formatTools"
import { Card, CardContent } from "@/components/ui/card"

export const JsonFormatter = () => {
    const [input, setInput] = React.useState('{"a":1,"b":[1,2]}')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { try { setOutput(JSON.stringify(JSON.parse(input), null, 2)) } catch(e) { setOutput("Invalid JSON") } }, [input])
    return <ToolGrid><CodeEditor value={input} onChange={setInput} /><CodeEditor value={output} readOnly /></ToolGrid>
}

export const SqlFormatter = () => {
    const [input, setInput] = React.useState('select * from users where id=1')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { setOutput(formatSql(input)) }, [input])
    return <ToolGrid><CodeEditor value={input} onChange={setInput} /><CodeEditor value={output} readOnly /></ToolGrid>
}

export const CodeBeautifier = ({ parser }: { parser: 'babel' | 'html' }) => {
    const [input, setInput] = React.useState(parser === 'html' ? '<div><p>hi</p></div>' : 'const a=1;if(a){console.log(a)}')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { beautifyCode(input, parser).then(setOutput) }, [input, parser])
    return <ToolGrid><CodeEditor value={input} onChange={setInput} /><CodeEditor value={output} readOnly /></ToolGrid>
}

export const XmlFormatter = () => {
    const [input, setInput] = React.useState('<note><body>hi</body></note>')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { try { setOutput(formatXml(input)) } catch(e) { setOutput("Invalid XML") } }, [input])
    return <ToolGrid><CodeEditor value={input} onChange={setInput} /><CodeEditor value={output} readOnly /></ToolGrid>
}

export const CronExplainer = () => {
    const [input, setInput] = React.useState('* * * * *')
    const [output, setOutput] = React.useState("")
    React.useEffect(() => { try { setOutput(explainCron(input)) } catch(e) { setOutput("Invalid Cron") } }, [input])
    return <div className="space-y-4"><CodeEditor value={input} onChange={setInput} label="Cron Expression" /><Card className="p-4">{output}</Card></div>
}
