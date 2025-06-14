import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface GlassSidebarMenuItem {
  path: string;
  icon: React.ElementType;
  label: string;
  color?: string; // e.g. 'text-blue-400'
}

export interface GlassSidebarProps {
  title: React.ReactNode;
  menuItems: GlassSidebarMenuItem[];
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout: () => void;
}

export const GlassSidebar = ({ title, menuItems, user, onLogout }: GlassSidebarProps) => {
  return (
    <aside className="flex flex-col h-full w-64 bg-glass/80 backdrop-blur-md border-r border-glass-border shadow-lg">
      <div className="p-6 border-b border-glass-border">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <nav className="flex-1 py-4 flex flex-col gap-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-5 py-2.5 text-base font-medium rounded-xl transition-all",
                isActive
                  ? "border border-blue-400/60 bg-white/10 text-white shadow-md"
                  : "text-gray-300 hover:bg-white/10 hover:text-white",
                item.color
              )
            }
            end={item.path === ""}
          >
            <item.icon className={cn("h-5 w-5", item.color)} />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto p-5 border-t border-glass-border flex items-center gap-3">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
            {user.name?.[0]?.toUpperCase() || "U"}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-white truncate">{user.name}</div>
          <div className="text-xs text-gray-300 truncate">{user.email}</div>
        </div>
        <button
          onClick={onLogout}
          className="ml-2 text-gray-400 hover:text-red-400 transition-colors"
          title="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-6-3h12m0 0l-3-3m3 3l-3 3" />
          </svg>
        </button>
      </div>
    </aside>
  );
}; 