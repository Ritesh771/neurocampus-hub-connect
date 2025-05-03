
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { HODDashboard } from '@/components/dashboard/HODDashboard';
import { FacultyDashboard } from '@/components/dashboard/FacultyDashboard';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Render different dashboard based on user role
  const renderDashboard = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'hod':
        return <HODDashboard />;
      case 'faculty':
        return <FacultyDashboard />;
      case 'student':
        return <StudentDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return renderDashboard();
};

export default Dashboard;
