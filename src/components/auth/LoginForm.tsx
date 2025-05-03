
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/context/AuthContext";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
      <Card className="w-full max-w-md shadow-xl animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto mb-6">
            <div className="w-24 h-24 rounded-full neurocampus-gradient flex items-center justify-center mx-auto">
              <h1 className="text-3xl font-bold text-white">NC</h1>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to NeuroCampus</CardTitle>
          <CardDescription>Sign in to access your dashboard</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="text-sm text-gray-500 mt-3">
              <p>For demo purposes, use these email patterns:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li><code>admin@example.com</code> - for Admin access</li>
                <li><code>hod@example.com</code> - for HOD access</li>
                <li><code>faculty@example.com</code> - for Faculty access</li>
                <li><code>student@example.com</code> - for Student access</li>
              </ul>
              <p className="mt-1">Any password will work for this demo.</p>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
