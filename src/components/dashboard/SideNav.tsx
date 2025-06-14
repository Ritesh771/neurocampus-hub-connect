
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, Users, GraduationCap, BookOpen, Settings, 
  UserPlus, Upload, Building2, Bell, FileText, UserCheck,
  Calendar, BarChart3, MessageSquare, TrendingUp, ClipboardList,
  Clock, AlertCircle, Award, Camera, CalendarDays,
  FileCheck, UserCircle, Megaphone, MessageCircle, 
  CalendarCheck, PercentIcon, BookMarked,
  FileInput, CheckSquare, UserCog, ScanFace,
  MapPin, Target, BookOpenCheck, LogOut
} from 'lucide-react';
import { 
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar
} from "@/components/ui/sidebar";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<any>;
  roles: string[];
}

const navigationItems: NavItem[] = [
  // Admin Routes
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['admin'] },
  { label: 'Users', href: '/dashboard/users', icon: Users, roles: ['admin'] },
  { label: 'Enroll User', href: '/dashboard/enroll-user', icon: UserPlus, roles: ['admin'] },
  { label: 'Bulk Upload', href: '/dashboard/bulk-upload', icon: Upload, roles: ['admin'] },
  { label: 'Branches', href: '/dashboard/branches', icon: Building2, roles: ['admin'] },
  { label: 'Notifications', href: '/dashboard/notifications', icon: Bell, roles: ['admin'] },
  { label: 'HOD Leaves', href: '/dashboard/hod-leaves', icon: FileText, roles: ['admin'] },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings, roles: ['admin'] },

  // HOD Routes
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['hod'] },
  { label: 'Low Attendance', href: '/dashboard/low-attendance', icon: AlertCircle, roles: ['hod'] },
  { label: 'Academic Structure', href: '/dashboard/academic-structure', icon: GraduationCap, roles: ['hod'] },
  { label: 'Faculty Assignments', href: '/dashboard/faculty-assignments', icon: UserCheck, roles: ['hod'] },
  { label: 'Timetable', href: '/dashboard/timetable', icon: Calendar, roles: ['hod'] },
  { label: 'Notices', href: '/dashboard/notices', icon: FileText, roles: ['hod'] },
  { label: 'Proctors', href: '/dashboard/proctors', icon: Users, roles: ['hod'] },
  { label: 'Performance', href: '/dashboard/performance', icon: BarChart3, roles: ['hod'] },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings, roles: ['hod'] },

  // Faculty Routes
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['faculty'] },
  { label: 'Take Attendance', href: '/dashboard/take-attendance', icon: UserCheck, roles: ['faculty'] },
  { label: 'Upload Marks', href: '/dashboard/upload-marks', icon: Upload, roles: ['faculty'] },
  { label: 'Apply Leave', href: '/dashboard/apply-leave', icon: FileInput, roles: ['faculty'] },
  { label: 'Attendance Records', href: '/dashboard/attendance-records', icon: BarChart3, roles: ['faculty'] },
  { label: 'Announcements', href: '/dashboard/announcements', icon: Megaphone, roles: ['faculty'] },
  { label: 'Proctor Students', href: '/dashboard/proctor-students', icon: Users, roles: ['faculty'] },
  { label: 'Manage Student Leave', href: '/dashboard/manage-student-leave', icon: FileCheck, roles: ['faculty'] },
  { label: 'Timetable', href: '/dashboard/timetable', icon: Calendar, roles: ['faculty'] },
  { label: 'Chat', href: '/dashboard/chat', icon: MessageCircle, roles: ['faculty'] },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCircle, roles: ['faculty'] },
  { label: 'Schedule Mentoring', href: '/dashboard/schedule-mentoring', icon: Clock, roles: ['faculty'] },
  { label: 'Generate Statistics', href: '/dashboard/generate-statistics', icon: TrendingUp, roles: ['faculty'] },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings, roles: ['faculty'] },

  // Student Routes
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['student'] },
  { label: 'Timetable', href: '/dashboard/timetable', icon: Calendar, roles: ['student'] },
  { label: 'Weekly Schedule', href: '/dashboard/weekly-schedule', icon: CalendarDays, roles: ['student'] },
  { label: 'Attendance', href: '/dashboard/attendance', icon: PercentIcon, roles: ['student'] },
  { label: 'Internal Marks', href: '/dashboard/internal-marks', icon: BookMarked, roles: ['student'] },
  { label: 'Leave Request', href: '/dashboard/leave-request', icon: FileInput, roles: ['student'] },
  { label: 'Leave Status', href: '/dashboard/leave-status', icon: CheckSquare, roles: ['student'] },
  { label: 'Certificates', href: '/dashboard/certificates', icon: Award, roles: ['student'] },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCircle, roles: ['student'] },
  { label: 'Announcements', href: '/dashboard/announcements', icon: Megaphone, roles: ['student'] },
  { label: 'Chat', href: '/dashboard/chat', icon: MessageCircle, roles: ['student'] },
  { label: 'Notifications', href: '/dashboard/notifications', icon: Bell, roles: ['student'] },
  { label: 'Face Recognition', href: '/dashboard/face-recognition', icon: Camera, roles: ['student'] },
];

export const SideNav: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  if (!user) return null;

  const userNavItems = navigationItems.filter(item => 
    item.roles.includes(user.role)
  );

  const handleLinkClick = () => {
    // Close mobile sidebar when a link is clicked
    setOpenMobile(false);
  };

  const handleLogout = () => {
    logout();
    setOpenMobile(false);
  };

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="p-4 bg-white border-b">
        <div className="flex items-center gap-3">
          <Logo size="sm" className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-gray-900">NeuroCampus</span>
            <span className="text-xs text-gray-600">AMC College</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 bg-white">
        <SidebarMenu>
          {userNavItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild
                    isActive={isActive}
                    onClick={handleLinkClick}
                    className={cn(
                      "w-full justify-start gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <Link to={item.href} className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </motion.div>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-white border-t">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
            <UserCircle className="h-6 w-6 text-gray-600" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-600 capitalize">{user.role}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-start gap-2 border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
