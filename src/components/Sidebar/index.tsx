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
    <aside className="border-b h-screen border-zinc-200 lg:px-5 p-4 lg:py-8 flex flex-col gap-6 fixed left-0 top-0 right-0 bottom-0 lg:bottom-auto z-20 bg-white lg:right-auto lg:w-80 lg:border-r">
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
