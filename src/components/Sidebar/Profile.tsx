import { LogOut } from "lucide-react";
import { Button } from "../Button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function Profile() {
  const { setTheme, theme } = useTheme();

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
      <Switch
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        defaultChecked={
          theme === "dark" ||
          (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        }
      >
        <span className="sr-only">Toggle theme:</span>
        <span className="sr-only data-[state=checked]:hidden">Light</span>
        <span className="sr-only hidden data-[state=checked]:inline">Dark</span>
        <span className="data-[state=checked]:translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform" />
      </Switch>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
        <span className="sr-only">Logout</span>
      </Button>
    </div>
  );
}
