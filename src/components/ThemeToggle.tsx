import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("light")

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setThemeState(isDark ? "dark" : "light")
  }, [])

  React.useEffect(() => {
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setThemeState(theme === "light" ? "dark" : "light")}
    >
      <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span class="sr-only">Toggle theme</span>
    </Button>
  )
}
