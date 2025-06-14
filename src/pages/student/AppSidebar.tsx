import { NavLink, useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  Bell,
  User,
  Award,
  LogOut,
  Camera,
  ClipboardList,
  BookOpen,
} from "lucide-react";

const menuItems = [
  { path: "", icon: Home, label: "Dashboard" },
  { path: "timetable", icon: Calendar, label: "Timetable" },
  { path: "weekly-schedule", icon: Clock, label: "Weekly Schedule" },
  { path: "attendance", icon: ClipboardList, label: "Attendance" },
  { path: "internal-marks", icon: BookOpen, label: "Internal Marks" },
  { path: "leave-request", icon: FileText, label: "Leave Request" },
  { path: "leave-status", icon: FileText, label: "Leave Status" },
  { path: "certificates", icon: Award, label: "Certificates" },
  { path: "face-recognition", icon: Camera, label: "Face Recognition" },
  { path: "announcements", icon: Bell, label: "Announcements" },
  { path: "chat", icon: MessageSquare, label: "Chat" },
  { path: "notifications", icon: Bell, label: "Notifications" },
  { path: "profile", icon: User, label: "Profile" },
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
          <h2 className="text-lg font-semibold text-white">Student Portal</h2>
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