import { NavLink } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

type SidebarLink = {
  to: string;
  label: string;
  icon?: React.ReactNode;
};

type DashboardSidebarProps = {
  links: SidebarLink[];
  title: string;
};

export const DashboardSidebar = ({ links, title }: DashboardSidebarProps) => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <SidebarTrigger className="lg:hidden">
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
      </div>
      <nav className="mt-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 ${
                isActive ? "bg-gray-100 text-indigo-600" : ""
              }`
            }
          >
            {link.icon && <span className="mr-3">{link.icon}</span>}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}; 