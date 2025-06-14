
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { HODDashboard } from '@/components/dashboard/HODDashboard';
import { FacultyDashboard } from '@/components/dashboard/FacultyDashboard';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/ui/logo';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const isMobile = useIsMobile();

  // If user doesn't have a valid role, show a fallback view
  if (!user || !['admin', 'hod', 'faculty', 'student'].includes(user.role)) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Logo size="md" className="h-10 sm:h-12" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Welcome to AMC College</h1>
            <p className="text-sm sm:text-base text-gray-600">NeuroCampus Management System</p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Account Access</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              There was an issue determining your role in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm sm:text-base">Your account doesn't seem to have proper permissions assigned. This could be due to:</p>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                <li>Your account is new and roles haven't been assigned yet</li>
                <li>There was an error in the authentication process</li>
                <li>Your account requires additional verification</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                <Button className="text-sm h-9">Contact Support</Button>
                <Button variant="outline" className="text-sm h-9">Sign Out & Try Again</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show welcome banner for mobile users
  const WelcomeBanner = () => (
    <Card className="mb-4 sm:mb-6 bg-primary/5 border border-primary/20 md:hidden">
      <CardContent className="pt-4 sm:pt-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h2 className="font-semibold text-base sm:text-lg truncate">Welcome, {user.name}!</h2>
            <p className="text-xs sm:text-sm text-gray-500">
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
