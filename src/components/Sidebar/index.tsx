import { Search } from "lucide-react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";

export const Sidebar = () => {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 space-y-6">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-none bg-transparent text-zinc-900 placeholder-zinc-900"
          placeholder="Search"
        />
      </div>

      <MainNavigation />
    </aside>
  );
};
