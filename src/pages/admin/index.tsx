import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GlassSidebar } from "@/components/ui/GlassSidebar";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  BarChart,
  UserPlus,
  Upload,
  GitBranch,
  Bell,
  ClipboardList,
  Users as UsersIcon,
  Settings,
  User,
  FileText,
} from "lucide-react";
import { DashboardOverview } from "./DashboardOverview";
import { EnrollUser } from "./EnrollUser";
import { BulkUpload } from "./BulkUpload";
import { Branches } from "./Branches";
import { Notifications } from "./Notifications";
import { HODLeaves } from "./HODLeaves";
import { Users as AdminUsers } from "./Users";
import { Profile } from "./Profile";

const pageMeta = [
  { file: "DashboardOverview.tsx", path: "overview", label: "Overview", icon: BarChart, color: "text-purple-400", element: <DashboardOverview /> },
  { file: "EnrollUser.tsx", path: "enroll", label: "Enroll User", icon: UserPlus, color: "text-green-400", element: <EnrollUser /> },
  { file: "BulkUpload.tsx", path: "bulk-upload", label: "Bulk Upload", icon: Upload, color: "text-orange-400", element: <BulkUpload /> },
  { file: "Branches.tsx", path: "branches", label: "Branches", icon: GitBranch, color: "text-pink-400", element: <Branches /> },
  { file: "Notifications.tsx", path: "notifications", label: "Notifications", icon: Bell, color: "text-pink-400", element: <Notifications /> },
  { file: "HODLeaves.tsx", path: "hod-leaves", label: "HOD Leaves", icon: ClipboardList, color: "text-cyan-400", element: <HODLeaves /> },
  { file: "Users.tsx", path: "users", label: "Users", icon: UsersIcon, color: "text-yellow-400", element: <AdminUsers /> },
  { file: "Profile.tsx", path: "profile", label: "Profile", icon: Settings, color: "text-gray-400", element: <Profile /> },
];

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col lg:flex-row bg-background">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <GlassSidebar
            title="Admin Panel"
            menuItems={pageMeta.map(({ path, label, icon, color }) => ({ path, label, icon, color }))}
            user={{
              name: user.name || "Admin User",
              email: user.email || "admin@university.edu",
              avatar: user.profilePic,
            }}
            onLogout={handleLogout}
          />
        </div>
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="text-foreground" />
            <h1 className="text-lg font-semibold">Admin Portal</h1>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Routes>
            {pageMeta.map(({ path, element }) => (
              <Route key={path || "dashboard"} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
} 