
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, GraduationCap, BookOpen, Settings, 
  UserPlus, Upload, Building2, Bell, FileText, UserCheck,
  Calendar, BarChart3, MessageSquare, TrendingUp, ClipboardList,
  Clock, AlertCircle, Award, Camera, Schedule, LeaveIcon,
  FileCheck, UserCircle, Megaphone, MessageCircle, 
  CalendarCheck, CalendarDays, PercentIcon, BookMarked,
  FileInput, CheckSquare, CertificateIcon, UserCog,
  ScanFace
} from 'lucide-react';

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

  // HOD Routes
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['hod'] },
  { label: 'Low Attendance', href: '/dashboard/low-attendance', icon: AlertCircle, roles: ['hod'] },
  { label: 'Academic Structure', href: '/dashboard/academic-structure', icon: GraduationCap, roles: ['hod'] },
  { label: 'Faculty Assignments', href: '/dashboard/faculty-assignments', icon: UserCheck, roles: ['hod'] },
  { label: 'Timetable', href: '/dashboard/timetable', icon: Calendar, roles: ['hod'] },
  { label: 'Notices', href: '/dashboard/notices', icon: FileText, roles: ['hod'] },
  { label: 'Proctors', href: '/dashboard/proctors', icon: Users, roles: ['hod'] },
  { label: 'Performance', href: '/dashboard/performance', icon: BarChart3, roles: ['hod'] },

  // Faculty Routes
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['faculty'] },
  { label: 'Take Attendance', href: '/dashboard/take-attendance', icon: UserCheck, roles: ['faculty'] },
  { label: 'Upload Marks', href: '/dashboard/upload-marks', icon: Upload, roles: ['faculty'] },
  { label: 'Apply Leave', href: '/dashboard/apply-leave', icon: Calendar, roles: ['faculty'] },
  { label: 'Attendance Records', href: '/dashboard/attendance-records', icon: BarChart3, roles: ['faculty'] },
  { label: 'Announcements', href: '/dashboard/announcements', icon: Megaphone, roles: ['faculty'] },
  { label: 'Proctor Students', href: '/dashboard/proctor-students', icon: Users, roles: ['faculty'] },
  { label: 'Manage Student Leave', href: '/dashboard/manage-student-leave', icon: FileCheck, roles: ['faculty'] },
  { label: 'Schedule Mentoring', href: '/dashboard/schedule-mentoring', icon: Clock, roles: ['faculty'] },
  { label: 'Generate Statistics', href: '/dashboard/generate-statistics', icon: TrendingUp, roles: ['faculty'] },

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

  // Common Routes
  { label: 'Settings', href: '/dashboard/settings', icon: Settings, roles: ['admin', 'hod', 'faculty', 'student'] },
];

export const SideNav: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const userNavItems = navigationItems.filter(item => 
    item.roles.includes(user.role)
  );

  return (
    <nav className="space-y-2 p-2">
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
            <Link
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate">{item.label}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};
