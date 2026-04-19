import * as React from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface Props {
  value: string;
}

export default function CopyButton({ value }: Props) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success("Copied to clipboard")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy")
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copy}
      disabled={!value}
      class="h-8 w-8"
    >
      {copied ? <Check class="h-4 w-4" /> : <Copy class="h-4 w-4" />}
      <span class="sr-only">Copy</span>
    </Button>
  )
}
