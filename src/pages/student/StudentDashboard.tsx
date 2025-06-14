import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { GlassSidebar } from "@/components/ui/GlassSidebar";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  Calendar,
  Clock,
  ClipboardList,
  BookOpen,
  FileText,
  Award,
  Camera,
  Bell,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";
import { Dashboard } from "./Dashboard";
import { Timetable } from "./Timetable";
import { WeeklySchedule } from "./WeeklySchedule";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { LeaveRequest } from "./LeaveRequest";
import { LeaveStatus } from "./LeaveStatus";
import { InternalMarks } from "./InternalMarks";
import { Certificates } from "./Certificates";
import { Chat } from "./Chat";
import { FaceRecognition } from "./FaceRecognition";
import { Attendance } from "./Attendance";
import { Announcements } from "./Announcements";

const menuItems = [
  { path: "", icon: Home, label: "Dashboard", color: "text-blue-400" },
  { path: "timetable", icon: Calendar, label: "Timetable", color: "text-purple-400" },
  { path: "weekly-schedule", icon: Clock, label: "Weekly Schedule", color: "text-pink-400" },
  { path: "attendance", icon: ClipboardList, label: "Attendance", color: "text-cyan-400" },
  { path: "internal-marks", icon: BookOpen, label: "Internal Marks", color: "text-orange-400" },
  { path: "leave-request", icon: FileText, label: "Leave Request", color: "text-green-400" },
  { path: "leave-status", icon: FileText, label: "Leave Status", color: "text-red-400" },
  { path: "certificates", icon: Award, label: "Certificates", color: "text-yellow-400" },
  { path: "face-recognition", icon: Camera, label: "Face Recognition", color: "text-blue-400" },
  { path: "announcements", icon: Bell, label: "Announcements", color: "text-pink-400" },
  { path: "chat", icon: MessageSquare, label: "Chat", color: "text-purple-400" },
  { path: "notifications", icon: Bell, label: "Notifications", color: "text-pink-400" },
  { path: "profile", icon: User, label: "Profile", color: "text-gray-400" },
];

export const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== "student") {
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
            title="Student Portal"
            menuItems={menuItems}
            user={{
              name: user.name || "Student User",
              email: user.email || "student@university.edu",
              avatar: user.profilePic,
            }}
            onLogout={handleLogout}
          />
        </div>
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b bg-card">
          <div className="flex items-center space-x-3">
            <SidebarTrigger className="text-foreground" />
            <h1 className="text-lg font-semibold">Student Portal</h1>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="weekly-schedule" element={<WeeklySchedule />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="leave-request" element={<LeaveRequest />} />
            <Route path="leave-status" element={<LeaveStatus />} />
            <Route path="internal-marks" element={<InternalMarks />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="chat" element={<Chat />} />
            <Route path="face-recognition" element={<FaceRecognition />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="announcements" element={<Announcements />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}; 