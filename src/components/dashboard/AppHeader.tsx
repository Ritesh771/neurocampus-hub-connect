
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from '@/components/ui/logo';
import { useAuth } from '@/context/AuthContext';
import { Search, Bell } from 'lucide-react';

export const AppHeader: React.FC = () => {
  const { user } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="flex h-14 sm:h-16 items-center px-3 sm:px-4 lg:px-6">
        {/* Mobile menu trigger */}
        <SidebarTrigger className="lg:hidden mr-2 h-8 w-8 sm:h-9 sm:w-9" />

        {/* Logo and Brand */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 lg:flex-initial">
          <Logo size="sm" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          <div className="hidden sm:block">
            <div className="flex flex-col">
              <span className="font-semibold text-sm lg:text-base truncate">NeuroCampus</span>
              <span className="text-xs text-gray-500 hidden md:block">AMC College</span>
            </div>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2 md:gap-4">
          {/* Search toggle for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Search for larger screens */}
          <div className="hidden md:flex items-center gap-2 relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[160px] lg:w-[240px] xl:w-[280px] pl-8 text-sm"
            />
            <Search className="h-4 w-4 text-gray-400 absolute left-2" />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User info - hidden on small screens */}
          <span className="hidden lg:block text-sm font-medium truncate max-w-[100px] xl:max-w-[120px]">
            {user?.name || 'User'}
          </span>
        </div>
      </div>
      
      {/* Mobile search expanded */}
      {isSearchOpen && (
        <div className="px-3 sm:px-4 pb-3 md:hidden border-t bg-gray-50">
          <Input type="search" placeholder="Search..." className="w-full mt-3 text-sm" />
        </div>
      )}
    </header>
  );
};
