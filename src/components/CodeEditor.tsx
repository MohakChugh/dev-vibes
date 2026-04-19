import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import CopyButton from "./CopyButton"

interface Props {
  label?: string;
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
}

export default function CodeEditor({ label, value, onChange, placeholder, readOnly, className }: Props) {
  return (
    <div class="grid w-full gap-1.5">
      <div class="flex items-center justify-between">
        {label && <Label>{label}</Label>}
        {readOnly && <CopyButton value={value} />}
      </div>
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        class={`min-h-[300px] font-mono text-sm resize-y ${className}`}
      />
    </div>
  )
}
