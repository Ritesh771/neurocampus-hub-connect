import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, User, Mail, Crown, ToggleLeft, ToggleRight, Edit, Trash2, Building2 } from 'lucide-react';

const usersData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@university.edu',
    role: 'student',
    department: 'Computer Science',
    status: 'active',
    avatar: 'AJ'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    email: 'michael.chen@university.edu',
    role: 'faculty',
    department: 'Electrical Engineering',
    status: 'active',
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Dr. Sarah Wilson',
    email: 'sarah.wilson@university.edu',
    role: 'hod',
    department: 'Mechanical Engineering',
    status: 'active',
    avatar: 'SW'
  },
  {
    id: 4,
    name: 'Bob Smith',
    email: 'bob.smith@university.edu',
    role: 'student',
    department: 'Civil Engineering',
    status: 'inactive',
    avatar: 'BS'
  },
  {
    id: 5,
    name: 'Dr. Emily Davis',
    email: 'emily.davis@university.edu',
    role: 'faculty',
    department: 'Information Technology',
    status: 'active',
    avatar: 'ED'
  }
];

const getRoleColor = (role: string) => {
  switch (role) {
    case 'hod':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    case 'faculty':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    default:
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
  }
};

const getRoleIcon = (role: string) => {
  switch (role) {
    case 'hod':
      return <Crown className="w-4 h-4" />;
    case 'faculty':
      return <User className="w-4 h-4" />;
    default:
      return <User className="w-4 h-4" />;
  }
};

export function Users() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleToggleStatus = (id: number) => {
    // TODO: Implement status toggle logic
    console.log('Toggling status for user:', id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Users</h1>
        <p className="text-gray-400">Manage all users in the system</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-card"
          />
        </div>
        <div className="flex gap-2">
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="student">Students</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="hod">HODs</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="glass-card p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <Avatar className="h-12 w-12">
                <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {user.avatar}
                </div>
              </Avatar>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white truncate">{user.name}</h3>
                  <Badge className={getRoleColor(user.role)}>
                    <div className="flex items-center gap-1">
                      {getRoleIcon(user.role)}
                      <span className="capitalize">{user.role}</span>
                    </div>
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Building2 className="w-4 h-4" />
                    <span>{user.department}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  onClick={() => handleToggleStatus(user.id)}
                >
                  {user.status === 'active' ? (
                    <ToggleRight className="w-4 h-4" />
                  ) : (
                    <ToggleLeft className="w-4 h-4" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <Card className="glass-card p-6 text-center">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Users Found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </Card>
      )}
    </div>
  );
} 