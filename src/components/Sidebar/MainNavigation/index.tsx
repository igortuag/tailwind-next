import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation() {
  return (
    <nav>
      <NavItem title="Home" icon={Home} href="/" />
      <NavItem title="Dashboard" icon={BarChart} href="/dashboard" />
      <NavItem title="Projects" icon={SquareStack} href="/projects" />
      <NavItem title="Tasks" icon={CheckSquare} href="/tasks" />
      <NavItem title="Reporting" icon={Flag} href="/reporting" />
      <NavItem title="Users" icon={Users} href="/users" />
    </nav>
  );
}
