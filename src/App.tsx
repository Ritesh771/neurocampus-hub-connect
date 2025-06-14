
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AttendancePage from "./pages/AttendancePage";
import NotFound from "./pages/NotFound";
import RankPage from "./pages/RankPage";
import MaterialsPage from "./pages/MaterialsPage";
import ChatPage from "./pages/ChatPage";
import GradesPage from "./pages/GradesPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import FacultyPage from "./pages/FacultyPage";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import EnrollUserPage from "./pages/EnrollUserPage";
import BulkUploadPage from "./pages/BulkUploadPage";
import BranchesPage from "./pages/BranchesPage";
import NotificationsPage from "./pages/NotificationsPage";
import HODLeavesPage from "./pages/HODLeavesPage";
import ProfilePage from "./pages/ProfilePage";

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
            <Route path="/" element={<Index />} />
            
            {/* Dashboard routes - protected by DashboardLayout */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="enroll-user" element={<EnrollUserPage />} />
              <Route path="bulk-upload" element={<BulkUploadPage />} />
              <Route path="branches" element={<BranchesPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="hod-leaves" element={<HODLeavesPage />} />
              <Route path="departments" element={<DepartmentsPage />} />
              <Route path="faculty" element={<FacultyPage />} />
              <Route path="students" element={<StudentsPage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="attendance" element={<AttendancePage />} />
              <Route path="grades" element={<GradesPage />} />
              <Route path="materials" element={<MaterialsPage />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="rank" element={<RankPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            
            {/* Catch all 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
