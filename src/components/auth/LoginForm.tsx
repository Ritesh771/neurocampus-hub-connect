
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/ui/logo';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Sparkles, GraduationCap } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.02)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse"></div>
        {floatingElements}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-md space-y-6 sm:space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo and Header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <div className="flex justify-center relative">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                <Logo size="xl" className="h-16 sm:h-20 relative z-10" />
              </motion.div>
            </div>
            <div className="space-y-2">
              <motion.h1 
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                AMC College
              </motion.h1>
              <motion.div 
                className="flex items-center justify-center gap-2"
                variants={itemVariants}
              >
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NeuroCampus
                </h2>
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </motion.div>
              <motion.p 
                className="text-sm sm:text-base text-gray-300"
                variants={itemVariants}
              >
                Welcome to the future of education
              </motion.p>
            </div>
          </motion.div>

          {/* Login Card */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <CardHeader className="space-y-1 pb-4 relative z-10">
                <CardTitle className="text-xl sm:text-2xl text-center text-white">Sign In</CardTitle>
                <CardDescription className="text-center text-sm sm:text-base text-gray-200">
                  Enter your credentials to access the portal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="email" className="text-sm font-medium text-gray-200 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 text-sm sm:text-base bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-blue-400 transition-all duration-200"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="password" className="text-sm font-medium text-gray-200 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11 text-sm sm:text-base bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-blue-400 transition-all duration-200 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-11 px-3 text-gray-300 hover:text-white hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full h-11 text-sm sm:text-base font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-0" 
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          Signing in...
                        </div>
                      ) : (
                        'Sign In'
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* Quick Login Demo */}
                <motion.div 
                  className="pt-4 border-t border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-xs sm:text-sm text-center text-gray-300 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="h-3 w-3" />
                    Quick Demo Login
                    <Sparkles className="h-3 w-3" />
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { key: 'admin', label: 'Admin', gradient: 'from-red-500 to-pink-500' },
                      { key: 'hod', label: 'HOD', gradient: 'from-green-500 to-emerald-500' },
                      { key: 'faculty', label: 'Faculty', gradient: 'from-blue-500 to-cyan-500' },
                      { key: 'student', label: 'Student', gradient: 'from-purple-500 to-violet-500' }
                    ].map((role, index) => (
                      <motion.div
                        key={role.key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => quickLogin(role.key as 'admin' | 'hod' | 'faculty' | 'student')}
                          className={`text-xs sm:text-sm h-8 sm:h-9 bg-gradient-to-r ${role.gradient} hover:opacity-90 text-white border-0 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                        >
                          {role.label}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="text-center text-xs sm:text-sm text-gray-400"
            variants={itemVariants}
          >
            <p>&copy; 2024 AMC College. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Powered by 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                NeuroCampus
              </span>
              <Sparkles className="h-3 w-3 text-yellow-400" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
