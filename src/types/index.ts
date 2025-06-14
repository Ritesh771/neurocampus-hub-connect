export type UserRole = "admin" | "faculty" | "student" | "hod";

export interface User {
  id: string;
  role: UserRole;
  name?: string;
  email?: string;
  department?: string;
  profilePic?: string;
}

export interface SidebarLink {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

export interface DashboardSidebarProps {
  links: SidebarLink[];
  title: string;
} 