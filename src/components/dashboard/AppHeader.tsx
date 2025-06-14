
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from '@/components/ui/logo';
import { useAuth } from '@/context/AuthContext';

export const AppHeader: React.FC = () => {
  const { user } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex h-14 sm:h-16 items-center px-3 sm:px-4 lg:px-6">
        {/* Mobile menu trigger */}
        <SidebarTrigger className="lg:hidden mr-2 h-8 w-8 sm:h-9 sm:w-9" />

        {/* Logo and Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Logo size="sm" className="h-7 sm:h-8" />
          <div className="hidden sm:block">
            <div className="flex flex-col">
              <span className="font-semibold text-sm lg:text-base">NeuroCampus</span>
              <span className="text-xs text-gray-500 hidden md:block">AMC College</span>
            </div>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          {/* Search toggle for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>

          {/* Search for larger screens */}
          <div className="hidden md:flex items-center gap-2 relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[180px] lg:w-[280px] pl-8 text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User info - hidden on small screens */}
          <span className="hidden lg:block text-sm font-medium truncate max-w-[120px]">
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
