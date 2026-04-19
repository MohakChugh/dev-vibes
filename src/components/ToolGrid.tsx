import * as React from "react"

interface Props {
  children: React.ReactNode;
}

export default function ToolGrid({ children }: Props) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  )
}
