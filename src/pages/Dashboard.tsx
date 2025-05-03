
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { HODDashboard } from '@/components/dashboard/HODDashboard';
import { FacultyDashboard } from '@/components/dashboard/FacultyDashboard';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // If user doesn't have a valid role, show a fallback view
  if (!user || !['admin', 'hod', 'faculty', 'student'].includes(user.role)) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Welcome to NeuroCampus</h1>
        <Card>
          <CardHeader>
            <CardTitle>Account Access</CardTitle>
            <CardDescription>
              There was an issue determining your role in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Your account doesn't seem to have proper permissions assigned. This could be due to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Your account is new and roles haven't been assigned yet</li>
                <li>There was an error in the authentication process</li>
                <li>Your account requires additional verification</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Button>Contact Support</Button>
                <Button variant="outline">Sign Out & Try Again</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render different dashboard based on user role
  switch (user.role) {
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

export default Dashboard;
