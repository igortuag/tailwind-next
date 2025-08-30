"use client";
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import Profile from "./Profile";
import * as Collapsable from "@radix-ui/react-collapsible";
import * as Input from "../Input";
import { Button } from "../Button";

export const Sidebar = () => {
  return (
    <Collapsable.Root className="border-b data-[state=open]:h-screen lg:data-[state=close]:h-screen border-zinc-200 lg:px-5 p-4 lg:py-8 flex flex-col gap-6 fixed left-0 top-0 right-0 data-[state=open]:bottom-0 lg:data-[state=close]:bottom-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <Logo />
        <Button variant="ghost">
          <Menu className="h-6 w-6" />
          <Collapsable.Trigger className="lg:hidden"></Collapsable.Trigger>
        </Button>
      </div>

      <Collapsable.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=close]:hidden lg:data-[state=close]:flex"
      >
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsable.Content>
    </Collapsable.Root>
  );
};
