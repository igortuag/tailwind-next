import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="http://github.com/igortuag.png"
        alt="user avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col flex-1 truncate">
        <span className="text-sm font-semibold text-zinc-700">Igor Tuag</span>
        <span className="text-xs text-zinc-500 truncate">
          <a href="http://github.com/igortuag" target="_blank">
            http://github.com/igortuag
          </a>
        </span>
      </div>
      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-50 rounded-mds"
      >
        <LogOut className="w-5 h-5 text-zinc-500" />
        <span className="sr-only">Logout</span>
      </button>
    </div>
  );
}
