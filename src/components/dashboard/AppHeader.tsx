
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNav } from '@/components/dashboard/SideNav';
import { useAuth } from '@/context/AuthContext';

export const AppHeader: React.FC = () => {
  const { user } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="flex h-16 items-center px-4 lg:px-6">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[250px]">
            <SideNav className="border-0" />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full neurocampus-gradient flex items-center justify-center">
            <span className="text-sm font-bold text-white">NC</span>
          </div>
          <span className="hidden sm:inline-block font-semibold">NeuroCampus</span>
        </div>

        {/* Search & Actions */}
        <div className="ml-auto flex items-center gap-4">
          {/* Search toggle for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>

          {/* Search for larger screens */}
          <div className="hidden md:flex items-center gap-2 relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] lg:w-[300px] pl-8"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User */}
          <span className="hidden md:block text-sm font-medium">
            {user?.name || 'User'}
          </span>
        </div>
      </div>
      
      {/* Mobile search expanded */}
      {isSearchOpen && (
        <div className="px-4 pb-2 md:hidden">
          <Input type="search" placeholder="Search..." className="w-full" />
        </div>
      )}
    </header>
  );
};
