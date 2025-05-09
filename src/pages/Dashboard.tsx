
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { HODDashboard } from '@/components/dashboard/HODDashboard';
import { FacultyDashboard } from '@/components/dashboard/FacultyDashboard';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const isMobile = useIsMobile();

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

  // Show welcome banner for mobile users
  const WelcomeBanner = () => (
    <Card className="mb-6 bg-primary/5 border border-primary/20 md:hidden">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Welcome, {user.name}!</h2>
            <p className="text-sm text-gray-500">
              {user.role === 'admin' ? 'Administrator Dashboard' :
               user.role === 'hod' ? 'Department Head Dashboard' :
               user.role === 'faculty' ? 'Faculty Dashboard' : 'Student Dashboard'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Render different dashboard based on user role
  const renderDashboard = () => {
    switch (user.role) {
      case 'admin':
        return (
          <>
            {isMobile && <WelcomeBanner />}
            <AdminDashboard />
          </>
        );
      case 'hod':
        return (
          <>
            {isMobile && <WelcomeBanner />}
            <HODDashboard />
          </>
        );
      case 'faculty':
        return (
          <>
            {isMobile && <WelcomeBanner />}
            <FacultyDashboard />
          </>
        );
      case 'student':
        return (
          <>
            {isMobile && <WelcomeBanner />}
            <StudentDashboard />
          </>
        );
      default:
        return <div>Invalid role</div>;
    }
  };

  return renderDashboard();
};

export default Dashboard;
