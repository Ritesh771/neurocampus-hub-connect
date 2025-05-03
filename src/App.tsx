
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

// Placeholder components for feature pages
const UsersPage = () => <div className="p-4">Users Management Page</div>;
const DepartmentsPage = () => <div className="p-4">Departments Page</div>;
const FacultyPage = () => <div className="p-4">Faculty Management Page</div>;
const StudentsPage = () => <div className="p-4">Students Management Page</div>;
const CoursesPage = () => <div className="p-4">Courses Page</div>;
const GradesPage = () => <div className="p-4">Grades Page</div>;
const MaterialsPage = () => <div className="p-4">Study Materials Page</div>;
const ChatPage = () => <div className="p-4">Chat Interface</div>;
const RankPage = () => <div className="p-4">Ranking System</div>;
const SettingsPage = () => <div className="p-4">Settings Page</div>;

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
              <Route path="departments" element={<DepartmentsPage />} />
              <Route path="faculty" element={<FacultyPage />} />
              <Route path="students" element={<StudentsPage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="attendance" element={<AttendancePage />} />
              <Route path="grades" element={<GradesPage />} />
              <Route path="materials" element={<MaterialsPage />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="rank" element={<RankPage />} />
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
