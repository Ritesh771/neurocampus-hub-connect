import React, { useState } from 'react';
import { 
  BarChart3, 
  UserPlus, 
  Upload, 
  Building2, 
  Bell, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Import all screen components
import { DashboardOverview } from './DashboardOverview';
import { EnrollUser } from './EnrollUser';
import { BulkUpload } from './BulkUpload';
import { Branches } from './Branches';
import { Notifications } from './Notifications';
import { HODLeaves } from './HODLeaves';
import { Users as UsersScreen } from './Users';
import { Profile } from './Profile';

const menuItems = [
  { id: 'dashboard', label: 'Stats', icon: BarChart3, color: 'text-blue-400' },
  { id: 'enroll', label: 'Enroll User', icon: UserPlus, color: 'text-green-400' },
  { id: 'bulk-upload', label: 'Bulk Upload', icon: Upload, color: 'text-orange-400' },
  { id: 'branches', label: 'Branches', icon: Building2, color: 'text-purple-400' },
  { id: 'notifications', label: 'Notifications', icon: Bell, color: 'text-pink-400' },
  { id: 'hod-leaves', label: 'HOD Leaves', icon: FileText, color: 'text-cyan-400' },
  { id: 'users', label: 'Users', icon: Users, color: 'text-yellow-400' },
  { id: 'profile', label: 'Profile', icon: Settings, color: 'text-sky-400' },
];

export function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'enroll':
        return <EnrollUser />;
      case 'bulk-upload':
        return <BulkUpload />;
      case 'branches':
        return <Branches />;
      case 'notifications':
        return <Notifications />;
      case 'hod-leaves':
        return <HODLeaves />;
      case 'users':
        return <UsersScreen />;
      case 'profile':
        return <Profile />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-card p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-72 md:w-80 glass-card z-50 transform transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:w-64
      `}>
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-3 md:p-4 space-y-2 overflow-y-auto flex-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`
                  w-full flex items-center gap-3 px-3 md:px-4 py-3 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/20' 
                    : 'hover:bg-white/5'
                  }
                `}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <IconComponent className={`w-5 h-5 ${item.color}`} />
                <span className={`font-medium text-sm md:text-base ${isActive ? 'text-white' : 'text-gray-300'}`}>
                  {item.label}
                </span>
              </Button>
            );
          })}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                AU
              </div>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-gray-400 truncate">admin@university.edu</p>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full p-4 md:p-6 lg:p-8 lg:ml-64">
        <div className="max-w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
} 