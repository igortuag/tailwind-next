import { LogOut } from "lucide-react";
import { Button } from "../Button";
import { Switch } from "@/components/ui/switch";

export default function Profile() {
  // change app theme
  function handleToggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }

  return (
    <div className="flex items-center gap-3 ">
      <img
        src="http://github.com/igortuag.png"
        alt="user avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Igor Tuag
        </span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
          <a href="http://github.com/igortuag" target="_blank">
            http://github.com/igortuag
          </a>
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
        <span className="sr-only">Logout</span>
      </Button>
      <Switch
        onCheckedChange={handleToggleTheme}
        defaultChecked={
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        }
        className="data-[state=checked]:bg-violet-500 h-6 w-11 bg-zinc-200 dark:bg-zinc-700 relative rounded-full shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
      >
        <span className="sr-only">Toggle theme</span>
        <span className="data-[state=checked]:translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform" />
      </Switch>
    </div>
  );
}
