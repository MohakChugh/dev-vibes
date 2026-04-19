import * as React from "react"
import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { tools } from "@/config/tools"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export default function Search() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        class="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
      >
        <SearchIcon class="mr-2 h-4 w-4" />
        <span>Search tools...</span>
        <kbd class="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span class="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a tool name or category..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Array.from(new Set(tools.map(t => t.category))).map(category => (
            <CommandGroup key={category} heading={category}>
              {tools.filter(t => t.category === category).map(tool => (
                <CommandItem
                  key={tool.id}
                  onSelect={() => {
                    window.location.href = tool.route
                    setOpen(false)
                  }}
                >
                  <span>{tool.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
