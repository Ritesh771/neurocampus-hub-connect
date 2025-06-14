import { NavLink, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  Calendar,
  Users,
  BookOpen,
  Settings,
  LogOut,
  FileText,
  ClipboardList,
  UserCheck,
  MessageSquare,
  Bell,
  BarChart,
  Upload,
} from "lucide-react";

const menuItems = [
  { path: "", icon: Home, label: "Dashboard" },
  { path: "timetable", icon: Calendar, label: "Timetable" },
  { path: "upload-marks", icon: Upload, label: "Upload Marks" },
  { path: "take-attendance", icon: UserCheck, label: "Take Attendance" },
  { path: "attendance-records", icon: ClipboardList, label: "Attendance Records" },
  { path: "proctor-students", icon: Users, label: "Proctor Students" },
  { path: "mentoring", icon: BookOpen, label: "Mentoring" },
  { path: "manage-leaves", icon: FileText, label: "Manage Leaves" },
  { path: "leave-application", icon: FileText, label: "Leave Application" },
  { path: "statistics", icon: BarChart, label: "Statistics" },
  { path: "announcements", icon: Bell, label: "Announcements" },
  { path: "chat", icon: MessageSquare, label: "Chat" },
  { path: "profile", icon: Settings, label: "Profile" },
];

export const AppSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Sidebar>
      <div className="flex flex-col h-full bg-glass backdrop-blur-md border-r border-glass-border">
        <div className="p-4 border-b border-glass-border">
          <h2 className="text-lg font-semibold text-white">Faculty Portal</h2>
        </div>
        <div className="flex-1 py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
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
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white rounded-md"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </Sidebar>
  );
}; 