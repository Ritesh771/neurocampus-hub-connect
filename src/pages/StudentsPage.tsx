
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/AuthContext';

// Mock data for students
const mockStudents = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "r.kumar@neurocampus.edu",
    studentId: "ST20210001",
    department: "Computer Science",
    program: "Bachelor of Science",
    year: 3,
    gpa: 3.8,
    enrolledCourses: ["CS301", "CS401", "MATH201"],
    advisor: "Dr. Sarah Johnson",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "p.sharma@neurocampus.edu",
    studentId: "ST20210002",
    department: "Physics",
    program: "Bachelor of Science",
    year: 3,
    gpa: 3.9,
    enrolledCourses: ["PHYS301", "MATH201", "PHYS310"],
    advisor: "Dr. Robert Lee",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "a.patel@neurocampus.edu",
    studentId: "ST20210003",
    department: "Mathematics",
    program: "Bachelor of Science",
    year: 2,
    gpa: 3.6,
    enrolledCourses: ["MATH201", "MATH210", "CS101"],
    advisor: "Prof. James Wilson",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 4,
    name: "Ananya Singh",
    email: "a.singh@neurocampus.edu",
    studentId: "ST20210004",
    department: "Biology",
    program: "Bachelor of Science",
    year: 4,
    gpa: 3.7,
    enrolledCourses: ["BIO240", "BIO410", "CHEM110"],
    advisor: "Dr. Amanda White",
    profileImage: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 5,
    name: "Rahul Verma",
    email: "r.verma@neurocampus.edu",
    studentId: "ST20210005",
    department: "Chemistry",
    program: "Bachelor of Science",
    year: 2,
    gpa: 3.4,
    enrolledCourses: ["CHEM110", "PHYS101", "MATH201"],
    advisor: "Prof. Daniel Brown",
    profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 6,
    name: "Neha Gupta",
    email: "n.gupta@neurocampus.edu",
    studentId: "ST20210006",
    department: "English",
    program: "Bachelor of Arts",
    year: 3,
    gpa: 3.9,
    enrolledCourses: ["ENG205", "ENG320", "HIST150"],
    advisor: "Prof. Lisa Taylor",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 7,
    name: "Vikram Malhotra",
    email: "v.malhotra@neurocampus.edu",
    studentId: "ST20210007",
    department: "History",
    program: "Bachelor of Arts",
    year: 1,
    gpa: 3.2,
    enrolledCourses: ["HIST150", "ENG205"],
    advisor: "Dr. Thomas Garcia",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 8,
    name: "Sonia Kapoor",
    email: "s.kapoor@neurocampus.edu",
    studentId: "ST20210008",
    department: "Psychology",
    program: "Bachelor of Arts",
    year: 4,
    gpa: 3.8,
    enrolledCourses: ["PSYC101", "PSYC280", "BIO240"],
    advisor: "Dr. Sarah Miller",
    profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 9,
    name: "Arjun Reddy",
    email: "a.reddy@neurocampus.edu",
    studentId: "ST20210009",
    department: "Computer Science",
    program: "Bachelor of Science",
    year: 2,
    gpa: 3.5,
    enrolledCourses: ["CS101", "CS301", "MATH201"],
    advisor: "Dr. Sarah Johnson",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "inactive"
  },
  {
    id: 10,
    name: "Kavita Mehra",
    email: "k.mehra@neurocampus.edu",
    studentId: "ST20210010",
    department: "Physics",
    program: "Bachelor of Science",
    year: 1,
    gpa: 3.7,
    enrolledCourses: ["PHYS101", "MATH201", "CHEM110"],
    advisor: "Dr. Emily Rodriguez",
    profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  }
];

const StudentsPage: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const isAdmin = user?.role === 'admin';
  const isHOD = user?.role === 'hod';
  const isFaculty = user?.role === 'faculty';

  // Get unique departments for the filter
  const departments = Array.from(new Set(mockStudents.map(s => s.department)));

  // Filter students based on search term and filters
  const filteredStudents = mockStudents.filter(s => {
    const matchesSearch = 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === 'all' || s.department === departmentFilter;
    const matchesYear = yearFilter === 'all' || s.year.toString() === yearFilter;
    
    return matchesSearch && matchesDepartment && matchesYear;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Students Management</h1>
          <p className="text-muted-foreground">
            View and manage students at NeuroCampus.
          </p>
        </div>
        {(isAdmin || isHOD) && (
          <Button className="mt-2 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Student
          </Button>
        )}
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 mt-4">
          <div className="relative flex-grow">
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-8"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter} className="w-full md:w-auto">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map(dept => (
                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={yearFilter} onValueChange={setYearFilter} className="w-full md:w-auto">
            <SelectTrigger className="w-full md:w-[120px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="1">Year 1</SelectItem>
              <SelectItem value="2">Year 2</SelectItem>
              <SelectItem value="3">Year 3</SelectItem>
              <SelectItem value="4">Year 4</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="list" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>GPA</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.length > 0 ? (
                      filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.studentId}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <img 
                                src={student.profileImage} 
                                alt={student.name}
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <div>
                                <p className="font-medium">{student.name}</p>
                                <p className="text-xs text-muted-foreground">{student.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{student.department}</TableCell>
                          <TableCell>{student.program}</TableCell>
                          <TableCell>Year {student.year}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span className={`font-medium ${
                                student.gpa >= 3.7 ? 'text-green-600' : 
                                student.gpa >= 3.0 ? 'text-blue-600' : 
                                student.gpa >= 2.0 ? 'text-amber-600' : 'text-red-600'
                              }`}>
                                {student.gpa.toFixed(1)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </Button>
                              {(isAdmin || isHOD || isFaculty) && (
                                <Button variant="ghost" size="sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </Button>
                              )}
                              {(isAdmin || isHOD) && (
                                <Button variant="ghost" size="sm" className="text-red-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                          No students found matching your criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row items-center justify-between py-4">
              <p className="text-sm text-muted-foreground mb-2 sm:mb-0">Showing {filteredStudents.length} of {mockStudents.length} students</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="grid" className="mt-6">
          {filteredStudents.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 bg-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                        <img 
                          src={student.profileImage} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.studentId}</p>
                      <Badge variant="outline" className="mt-1">
                        {student.department}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Program:</span>
                        <span className="font-medium">{student.program}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Year:</span>
                        <span className="font-medium">Year {student.year}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">GPA:</span>
                        <span className={`font-medium ${
                          student.gpa >= 3.7 ? 'text-green-600' : 
                          student.gpa >= 3.0 ? 'text-blue-600' : 
                          student.gpa >= 2.0 ? 'text-amber-600' : 'text-red-600'
                        }`}>
                          {student.gpa.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Advisor:</span>
                        <span className="font-medium">{student.advisor}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground block mb-1">Enrolled Courses:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {student.enrolledCourses.map((course, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">View Details</Button>
                    {(isAdmin || isHOD || isFaculty) && (
                      <Button variant="ghost" size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Edit
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex justify-center py-10">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium">No students found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search term or filters.</p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentsPage;
