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
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import Profile from "./Profile";
import * as Input from "../Input";

export const Sidebar = () => {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="text-zinc-400" />
        </Input.Prefix>
        <Input.Control />
      </Input.Root>

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

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
};
