import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Login from "./pages/Login";
import { NotFound } from "./pages/shared/NotFound";

// Admin Pages
import { Users } from "./pages/admin/Users";
import { Notifications } from "./pages/admin/Notifications";
import { Profile } from "./pages/admin/Profile";
import { HODLeaves } from "./pages/admin/HODLeaves";
import { EnrollUser } from "./pages/admin/EnrollUser";
import { DashboardOverview } from "./pages/admin/DashboardOverview";
import { BulkUpload } from "./pages/admin/BulkUpload";
import { Branches } from "./pages/admin/Branches";
import AdminDashboard from "./pages/admin";

// Faculty Pages
import { FacultyDashboard } from "./pages/faculty/FacultyDashboard";
import { Timetable as FacultyTimetable } from "./pages/faculty/Timetable";
import { UploadMarks } from "./pages/faculty/UploadMarks";
import { TakeAttendance } from "./pages/faculty/TakeAttendance";
import { ProctorStudents } from "./pages/faculty/ProctorStudents";
import { Mentoring } from "./pages/faculty/Mentoring";
import { ManageStudentLeave } from "./pages/faculty/ManageStudentLeave";
import { LeaveApplication } from "./pages/faculty/LeaveApplication";
import { GenerateStatistics } from "./pages/faculty/GenerateStatistics";
import { AttendanceRecords } from "./pages/faculty/AttendanceRecords";
import { Chat as FacultyChat } from "./pages/faculty/Chat";
import { Announcements as FacultyAnnouncements } from "./pages/faculty/Announcements";

// Student Pages
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { WeeklySchedule } from "./pages/student/WeeklySchedule";
import { Timetable as StudentTimetable } from "./pages/student/Timetable";
import { Notifications as StudentNotifications } from "./pages/student/Notifications";
import { Profile as StudentProfile } from "./pages/student/Profile";
import { LeaveRequest } from "./pages/student/LeaveRequest";
import { LeaveStatus } from "./pages/student/LeaveStatus";
import { InternalMarks } from "./pages/student/InternalMarks";
import { Certificates } from "./pages/student/Certificates";
import { Chat as StudentChat } from "./pages/student/Chat";
import { FaceRecognition } from "./pages/student/FaceRecognition";
import { Attendance } from "./pages/student/Attendance";
import { Announcements as StudentAnnouncements } from "./pages/student/Announcements";

// HOD Pages
import { HodDashboard } from "./pages/hod/HodDashboard";
import { Timetable as HodTimetable } from "./pages/hod/Timetable";
import { Profile as HodProfile } from "./pages/hod/Profile";
import { Students } from "./pages/hod/Students";
import { Proctors } from "./pages/hod/Proctors";
import { Notices } from "./pages/hod/Notices";
import { Performance } from "./pages/hod/Performance";
import { LowAttendance } from "./pages/hod/LowAttendance";
import { DashboardOverview as HodDashboardOverview } from "./pages/hod/DashboardOverview";
import { FacultyAssignments } from "./pages/hod/FacultyAssignments";
import { Chat as HodChat } from "./pages/hod/Chat";
import { AcademicStructure } from "./pages/hod/AcademicStructure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminDashboard />} />
            
            {/* Faculty routes */}
            <Route path="/faculty/*" element={<FacultyDashboard />} />
            
            {/* Student routes */}
            <Route path="/student/*" element={<StudentDashboard />} />
            
            {/* HOD routes */}
            <Route path="/hod/*" element={<HodDashboard />} />
            
            {/* Catch all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
