import * as React from "react"
import CodeEditor from "@/components/CodeEditor"
import { convertBase } from "@/tools/math/mathTools"
import { Input } from "@/components/ui/input"

export const BaseConverter = () => {
    const [num, setNum] = React.useState("10");
    const [from, setFrom] = React.useState(10);
    const [to, setTo] = React.useState(16);
    return <div className="space-y-4">
        <Input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
        <CodeEditor value={convertBase(num, from, to)} readOnly label="Result" />
    </div>
}
