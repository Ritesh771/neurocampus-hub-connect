import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
  title: string;
  sidebar: ReactNode;
  children: ReactNode;
}

export const DashboardLayout = ({ title, sidebar, children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {sidebar}
        
        <div className="flex-1 flex flex-col">
          {/* Header with menu trigger for mobile */}
          <header className="flex items-center justify-between p-4 border-b border-glass-border bg-glass backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <SidebarTrigger className="text-gray-400 hover:text-white">
                <Menu size={20} />
              </SidebarTrigger>
              <h1 className="text-white font-semibold text-lg">{title}</h1>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}; 