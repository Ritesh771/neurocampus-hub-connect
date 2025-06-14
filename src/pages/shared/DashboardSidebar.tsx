import { NavLink } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface MenuItem {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface DashboardSidebarProps {
  menuItems: MenuItem[];
}

export const DashboardSidebar = ({ menuItems }: DashboardSidebarProps) => {
  const { logout } = useAuth();

  return (
    <Sidebar>
      <div className="flex flex-col h-full">
        <div className="flex-1 py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-glass text-white"
                      : "text-gray-300 hover:bg-glass hover:text-white"
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-glass-border">
          <button
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-glass hover:text-white rounded-md"
            onClick={logout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </Sidebar>
  );
}; 