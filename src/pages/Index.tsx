import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '@/components/auth/LoginForm';
import { useAuth } from '@/context/AuthContext';

const Index: React.FC = () => {
  const { user, loading } = useAuth();

  // If user is loading, show loading indicator
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

  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise show login form
  return <LoginForm />;
};

export default Index;
