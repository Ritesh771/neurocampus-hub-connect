
import React from 'react';
import { SideNav } from './SideNav';
import { AppHeader } from './AppHeader';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export const DashboardLayout: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full neurocampus-gradient animate-pulse-soft flex items-center justify-center">
            <span className="text-2xl font-bold text-white">NC</span>
          </div>
          <p className="text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:w-64 xl:w-72">
        <SideNav />
      </div>
      
      {/* Main content */}
      <div className="flex flex-col flex-1">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
