import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GlassSidebar } from "@/components/ui/GlassSidebar";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  Calendar,
  Upload,
  UserCheck,
  ClipboardList,
  Users,
  BookOpen,
  FileText,
  BarChart,
  Bell,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Dashboard } from "./Dashboard";
import { Timetable } from "./Timetable";
import { UploadMarks } from "./UploadMarks";
import { Profile } from "./Profile";
import { TakeAttendance } from "./TakeAttendance";
import { ProctorStudents } from "./ProctorStudents";
import { Mentoring } from "./Mentoring";
import { ManageStudentLeave } from "./ManageStudentLeave";
import { LeaveApplication } from "./LeaveApplication";
import { GenerateStatistics } from "./GenerateStatistics";
import { AttendanceRecords } from "./AttendanceRecords";
import { Chat } from "./Chat";
import { Announcements } from "./Announcements";

const menuItems = [
  { path: "", icon: Home, label: "Dashboard", color: "text-blue-400" },
  { path: "timetable", icon: Calendar, label: "Timetable", color: "text-purple-400" },
  { path: "upload-marks", icon: Upload, label: "Upload Marks", color: "text-orange-400" },
  { path: "take-attendance", icon: UserCheck, label: "Take Attendance", color: "text-green-400" },
  { path: "attendance-records", icon: ClipboardList, label: "Attendance Records", color: "text-cyan-400" },
  { path: "proctor-students", icon: Users, label: "Proctor Students", color: "text-yellow-400" },
  { path: "mentoring", icon: BookOpen, label: "Mentoring", color: "text-pink-400" },
  { path: "manage-leaves", icon: FileText, label: "Manage Leaves", color: "text-red-400" },
  { path: "leave-application", icon: FileText, label: "Leave Application", color: "text-red-400" },
  { path: "statistics", icon: BarChart, label: "Statistics", color: "text-blue-400" },
  { path: "announcements", icon: Bell, label: "Announcements", color: "text-pink-400" },
  { path: "chat", icon: MessageSquare, label: "Chat", color: "text-purple-400" },
  { path: "profile", icon: Settings, label: "Profile", color: "text-gray-400" },
];

export const FacultyDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== "faculty") {
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
            title="Faculty Portal"
            menuItems={menuItems}
            user={{
              name: user.name || "Faculty User",
              email: user.email || "faculty@university.edu",
              avatar: user.profilePic,
            }}
            onLogout={handleLogout}
          />
        </div>
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="text-foreground" />
            <h1 className="text-lg font-semibold">Faculty Portal</h1>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="upload-marks" element={<UploadMarks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="take-attendance" element={<TakeAttendance />} />
            <Route path="proctor-students" element={<ProctorStudents />} />
            <Route path="mentoring" element={<Mentoring />} />
            <Route path="manage-leaves" element={<ManageStudentLeave />} />
            <Route path="leave-application" element={<LeaveApplication />} />
            <Route path="statistics" element={<GenerateStatistics />} />
            <Route path="attendance-records" element={<AttendanceRecords />} />
            <Route path="chat" element={<Chat />} />
            <Route path="announcements" element={<Announcements />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}; 