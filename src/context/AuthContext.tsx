
import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'admin' | 'hod' | 'faculty' | 'student';

interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  department?: string;
  profilePic?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is already logged in from local storage
    const storedUser = localStorage.getItem('neurocampus-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // For demo purposes, we'll simulate authentication based on email pattern
      let role: Role;
      let mockUser: User;
      
      if (email.includes('admin')) {
        role = 'admin';
        mockUser = {
          id: '1',
          email,
          name: 'Admin User',
          role,
          profilePic: '/placeholder.svg'
        };
      } else if (email.includes('hod')) {
        role = 'hod';
        mockUser = {
          id: '2',
          email,
          name: 'Department Head',
          role,
          department: 'Computer Science',
          profilePic: '/placeholder.svg'
        };
      } else if (email.includes('faculty')) {
        role = 'faculty';
        mockUser = {
          id: '3',
          email,
          name: 'Faculty Member',
          role,
          department: 'Computer Science',
          profilePic: '/placeholder.svg'
        };
      } else if (email.includes('student')) {
        role = 'student';
        mockUser = {
          id: '4',
          email,
          name: 'Student User',
          role,
          department: 'Computer Science',
          profilePic: '/placeholder.svg'
        };
      } else {
        throw new Error('Invalid email format. Use admin@example.com, hod@example.com, faculty@example.com, or student@example.com');
      }
      
      // Store user in local storage
      localStorage.setItem('neurocampus-user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('neurocampus-user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
