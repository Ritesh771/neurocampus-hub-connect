
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/ui/logo';
import { toast } from '@/hooks/use-toast';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Login successful",
        description: "Welcome to NeuroCampus!",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (role: 'admin' | 'hod' | 'faculty' | 'student') => {
    const credentials = {
      admin: { email: 'admin@amccollege.edu', password: 'admin123' },
      hod: { email: 'hod@amccollege.edu', password: 'hod123' },
      faculty: { email: 'faculty@amccollege.edu', password: 'faculty123' },
      student: { email: 'student@amccollege.edu', password: 'student123' }
    };
    
    setEmail(credentials[role].email);
    setPassword(credentials[role].password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 sm:space-y-8">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Logo size="xl" className="h-16 sm:h-20" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AMC College</h1>
            <h2 className="text-lg sm:text-xl font-semibold text-primary">NeuroCampus Portal</h2>
            <p className="text-sm sm:text-base text-gray-600">Sign in to access your account</p>
          </div>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl sm:text-2xl text-center">Sign In</CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              Enter your credentials to access the portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-10 sm:h-11 text-sm sm:text-base font-medium neurocampus-gradient hover:opacity-90 transition-opacity" 
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Quick Login Demo */}
            <div className="pt-4 border-t">
              <p className="text-xs sm:text-sm text-center text-gray-500 mb-3 sm:mb-4">Quick Demo Login</p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => quickLogin('admin')}
                  className="text-xs sm:text-sm h-8 sm:h-9"
                >
                  Admin
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => quickLogin('hod')}
                  className="text-xs sm:text-sm h-8 sm:h-9"
                >
                  HOD
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => quickLogin('faculty')}
                  className="text-xs sm:text-sm h-8 sm:h-9"
                >
                  Faculty
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => quickLogin('student')}
                  className="text-xs sm:text-sm h-8 sm:h-9"
                >
                  Student
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-500">
          <p>&copy; 2024 AMC College. All rights reserved.</p>
          <p className="mt-1">Powered by NeuroCampus</p>
        </div>
      </div>
    </div>
  );
};
