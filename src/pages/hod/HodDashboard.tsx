import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GlassSidebar } from "@/components/ui/GlassSidebar";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  BarChart,
  Users,
  UserCheck,
  Calendar,
  ClipboardList,
  FileText,
  BookOpen,
  Building2,
  Bell,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Dashboard } from "./Dashboard";
import { DashboardOverview } from "./DashboardOverview";
import { Timetable } from "./Timetable";
import { Profile } from "./Profile";
import { Students } from "./Students";
import { Proctors } from "./Proctors";
import { Notices } from "./Notices";
import { Performance } from "./Performance";
import { LowAttendance } from "./LowAttendance";
import { FacultyAssignments } from "./FacultyAssignments";
import { Chat } from "./Chat";
import { AcademicStructure } from "./AcademicStructure";

// TODO: Import HOD-specific screen components
// import { DepartmentOverview } from "./components/screens/DepartmentOverview";
// import { FacultyManagement } from "./components/screens/FacultyManagement";
// etc.

const menuItems = [
  { path: "", icon: Home, label: "Dashboard", color: "text-blue-400" },
  { path: "overview", icon: BarChart, label: "Department Overview", color: "text-purple-400" },
  { path: "faculty", icon: Users, label: "Faculty Management", color: "text-green-400" },
  { path: "students", icon: Users, label: "Students", color: "text-yellow-400" },
  { path: "proctors", icon: UserCheck, label: "Proctors", color: "text-pink-400" },
  { path: "timetable", icon: Calendar, label: "Timetable", color: "text-orange-400" },
  { path: "attendance", icon: ClipboardList, label: "Attendance Reports", color: "text-cyan-400" },
  { path: "performance", icon: BarChart, label: "Performance", color: "text-blue-400" },
  { path: "low-attendance", icon: FileText, label: "Low Attendance", color: "text-red-400" },
  { path: "faculty-assignments", icon: BookOpen, label: "Faculty Assignments", color: "text-purple-400" },
  { path: "academic-structure", icon: Building2, label: "Academic Structure", color: "text-gray-400" },
  { path: "notices", icon: Bell, label: "Notices", color: "text-pink-400" },
  { path: "chat", icon: MessageSquare, label: "Chat", color: "text-blue-400" },
  { path: "profile", icon: Settings, label: "Profile", color: "text-gray-400" },
];

export const HodDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== "hod") {
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
            title="HOD Portal"
            menuItems={menuItems}
            user={{
              name: user.name || "HOD User",
              email: user.email || "hod@university.edu",
              avatar: user.profilePic,
            }}
            onLogout={handleLogout}
          />
        </div>
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="text-foreground" />
            <h1 className="text-lg font-semibold">HOD Portal</h1>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="profile" element={<Profile />} />
            <Route path="students" element={<Students />} />
            <Route path="proctors" element={<Proctors />} />
            <Route path="notices" element={<Notices />} />
            <Route path="performance" element={<Performance />} />
            <Route path="low-attendance" element={<LowAttendance />} />
            <Route path="faculty-assignments" element={<FacultyAssignments />} />
            <Route path="chat" element={<Chat />} />
            <Route path="academic-structure" element={<AcademicStructure />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}; 