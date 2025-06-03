import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users
} from "lucide-react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

export const Sidebar = () => {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-none bg-transparent text-zinc-900 placeholder-zinc-900"
          placeholder="Search"
        />
      </div>

      <nav>
        <NavItem title="Home" icon={Home} href="/" />
        <NavItem title="Dashboard" icon={BarChart} href="/dashboard" />
        <NavItem title="Projects" icon={SquareStack} href="/projects" />
        <NavItem title="Tasks" icon={CheckSquare} href="/tasks" />
        <NavItem title="Reporting" icon={Flag} href="/reporting" />
        <NavItem title="Users" icon={Users} href="/users" />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} href="/support" />
          <NavItem title="Settings" icon={Cog} href="/settings" />
        </nav>

        <UsedSpaceWidget />
      </div>
    </aside>
  );
};
