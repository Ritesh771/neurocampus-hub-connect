import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}; 