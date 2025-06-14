
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/context/AuthContext';

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "s.johnson@neurocampus.edu",
    role: "faculty",
    department: "Computer Science",
    status: "active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "m.chen@neurocampus.edu",
    role: "faculty",
    department: "Mathematics",
    status: "active",
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    email: "e.rodriguez@neurocampus.edu",
    role: "faculty",
    department: "Physics",
    status: "active",
    lastActive: "5 hours ago",
  },
  {
    id: 4,
    name: "Dr. Robert Lee",
    email: "r.lee@neurocampus.edu",
    role: "hod",
    department: "Physics",
    status: "active",
    lastActive: "3 hours ago",
  },
  {
    id: 5,
    name: "Prof. James Wilson",
    email: "j.wilson@neurocampus.edu",
    role: "hod",
    department: "Mathematics",
    status: "active",
    lastActive: "Just now",
  },
  {
    id: 6,
    name: "Dr. Amanda White",
    email: "a.white@neurocampus.edu",
    role: "faculty",
    department: "Biology",
    status: "inactive",
    lastActive: "2 weeks ago",
  },
  {
    id: 7,
    name: "Prof. Daniel Brown",
    email: "d.brown@neurocampus.edu",
    role: "faculty",
    department: "Chemistry",
    status: "active",
    lastActive: "Yesterday",
  },
  {
    id: 8,
    name: "Dr. Thomas Garcia",
    email: "t.garcia@neurocampus.edu",
    role: "hod",
    department: "History",
    status: "active",
    lastActive: "4 hours ago",
  },
  {
    id: 9,
    name: "Prof. Lisa Taylor",
    email: "l.taylor@neurocampus.edu",
    role: "faculty",
    department: "English",
    status: "active",
    lastActive: "1 hour ago",
  },
  {
    id: 10,
    name: "Dr. Steven Adams",
    email: "s.adams@neurocampus.edu",
    role: "admin",
    department: "Administration",
    status: "active",
    lastActive: "Just now",
  },
  {
    id: 11,
    name: "Rajesh Kumar",
    email: "r.kumar@neurocampus.edu",
    role: "student",
    department: "Computer Science",
    status: "active",
    lastActive: "3 hours ago",
  },
  {
    id: 12,
    name: "Priya Sharma",
    email: "p.sharma@neurocampus.edu",
    role: "student",
    department: "Physics",
    status: "active",
    lastActive: "2 days ago",
  }
];

const UsersPage: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter users based on search term and filters
  const filteredUsers = mockUsers.filter(u => {
    const matchesSearch = 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || u.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">User Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              View and manage all users in the NeuroCampus system.
            </p>
          </div>
          <Button className="w-full sm:w-auto flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add User
          </Button>
        </div>

        <Card className="w-full">
          <CardHeader>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:gap-4">
              <CardTitle className="text-base sm:text-lg">Users</CardTitle>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 md:gap-2">
                <div className="relative w-full md:w-64 min-w-0">
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-8 w-full"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-full md:w-[140px] flex-shrink-0">
                    <SelectValue placeholder="Role: All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="hod">HOD</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-[140px] flex-shrink-0">
                    <SelectValue placeholder="Status: All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[800px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Name</TableHead>
                      <TableHead className="w-[220px]">Email</TableHead>
                      <TableHead className="w-[100px]">Role</TableHead>
                      <TableHead className="w-[140px]">Department</TableHead>
                      <TableHead className="w-[100px]">Status</TableHead>
                      <TableHead className="w-[120px]">Last Active</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((u) => (
                        <TableRow key={u.id}>
                          <TableCell className="font-medium">
                            <div className="truncate">{u.name}</div>
                          </TableCell>
                          <TableCell>
                            <div className="truncate">{u.email}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={
                              u.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                              u.role === 'hod' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                              u.role === 'faculty' ? 'bg-green-50 text-green-700 border-green-200' :
                              'bg-gray-50 text-gray-700 border-gray-200'
                            }>
                              {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="truncate">{u.department}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={u.status === 'active' ? 'default' : 'secondary'}>
                              {u.status.charAt(0).toUpperCase() + u.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="truncate text-sm">{u.lastActive}</div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                          No users found matching your criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
            <p className="text-sm text-muted-foreground">Showing {filteredUsers.length} of {mockUsers.length} users</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UsersPage;
