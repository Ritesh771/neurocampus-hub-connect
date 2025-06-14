
import React from 'react';
import { SideNav } from './SideNav';
import { AppHeader } from './AppHeader';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/components/ui/logo';

export const DashboardLayout: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center px-4">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Logo size="lg" className="h-16 sm:h-20" />
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">AMC College</h2>
            <p className="text-sm sm:text-base font-medium text-gray-600">Loading NeuroCampus...</p>
          </div>
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
      <div className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0">
        <SideNav />
      </div>
      
      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
