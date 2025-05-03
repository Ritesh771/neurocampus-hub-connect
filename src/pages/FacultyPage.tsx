
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/context/AuthContext';

// Mock data for faculty
const mockFaculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "s.johnson@neurocampus.edu",
    department: "Computer Science",
    position: "Associate Professor",
    joinedYear: 2015,
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Mining"],
    courses: ["CS401", "CS302"],
    publications: 28,
    education: "Ph.D. in Computer Science, MIT",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "m.chen@neurocampus.edu",
    department: "Mathematics",
    position: "Professor",
    joinedYear: 2008,
    expertise: ["Number Theory", "Abstract Algebra", "Cryptography"],
    courses: ["MATH201", "MATH405"],
    publications: 45,
    education: "Ph.D. in Mathematics, Princeton University",
    profileImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    email: "e.rodriguez@neurocampus.edu",
    department: "Physics",
    position: "Assistant Professor",
    joinedYear: 2018,
    expertise: ["Quantum Mechanics", "Theoretical Physics", "String Theory"],
    courses: ["PHYS301", "PHYS211"],
    publications: 17,
    education: "Ph.D. in Physics, Stanford University",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 4,
    name: "Dr. Amanda White",
    email: "a.white@neurocampus.edu",
    department: "Biology",
    position: "Associate Professor",
    joinedYear: 2014,
    expertise: ["Molecular Biology", "Genetics", "Cell Biology"],
    courses: ["BIO240", "BIO350"],
    publications: 32,
    education: "Ph.D. in Biology, Harvard University",
    profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 5,
    name: "Prof. Daniel Brown",
    email: "d.brown@neurocampus.edu",
    department: "Chemistry",
    position: "Professor",
    joinedYear: 2010,
    expertise: ["Organic Chemistry", "Medicinal Chemistry", "Biochemistry"],
    courses: ["CHEM110", "CHEM340"],
    publications: 38,
    education: "Ph.D. in Chemistry, Caltech",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 6,
    name: "Prof. Lisa Taylor",
    email: "l.taylor@neurocampus.edu",
    department: "English",
    position: "Associate Professor",
    joinedYear: 2013,
    expertise: ["American Literature", "Creative Writing", "Literary Criticism"],
    courses: ["ENG205", "ENG320"],
    publications: 22,
    education: "Ph.D. in English Literature, Columbia University",
    profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 7,
    name: "Dr. Thomas Garcia",
    email: "t.garcia@neurocampus.edu",
    department: "History",
    position: "Professor",
    joinedYear: 2007,
    expertise: ["Medieval History", "European History", "Historiography"],
    courses: ["HIST150", "HIST310"],
    publications: 41,
    education: "Ph.D. in History, Yale University",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 8,
    name: "Dr. Robert Lee",
    email: "r.lee@neurocampus.edu",
    department: "Physics",
    position: "Professor",
    joinedYear: 2005,
    expertise: ["Astrophysics", "General Relativity", "Cosmology"],
    courses: ["PHYS101", "PHYS420"],
    publications: 52,
    education: "Ph.D. in Physics, University of Cambridge",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 9,
    name: "Prof. James Wilson",
    email: "j.wilson@neurocampus.edu",
    department: "Mathematics",
    position: "Professor",
    joinedYear: 2006,
    expertise: ["Calculus", "Differential Equations", "Real Analysis"],
    courses: ["MATH201", "MATH310"],
    publications: 47,
    education: "Ph.D. in Mathematics, Oxford University",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  },
  {
    id: 10,
    name: "Dr. Rachel Green",
    email: "r.green@neurocampus.edu",
    department: "Biology",
    position: "Professor",
    joinedYear: 2009,
    expertise: ["Evolutionary Biology", "Ecology", "Conservation Biology"],
    courses: ["BIO220", "BIO410"],
    publications: 43,
    education: "Ph.D. in Biology, University of California, Berkeley",
    profileImage: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    status: "active"
  }
];

const FacultyPage: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const isAdmin = user?.role === 'admin';
  const isHOD = user?.role === 'hod';

  // Get unique departments for the filter
  const departments = Array.from(new Set(mockFaculty.map(f => f.department)));

  // Filter faculty based on search term and department filter
  const filteredFaculty = mockFaculty.filter(f => {
    const matchesSearch = 
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = departmentFilter === 'all' || f.department === departmentFilter;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Faculty Management</h1>
          <p className="text-muted-foreground">
            View and manage faculty members at NeuroCampus.
          </p>
        </div>
        {(isAdmin || isHOD) && (
          <Button className="mt-2 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Faculty Member
          </Button>
        )}
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mt-4">
          <div className="relative w-full md:w-64">
            <Input
              placeholder="Search faculty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-8"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter} className="w-full md:w-[200px]">
            <SelectTrigger>
              <SelectValue placeholder="Filter by Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map(dept => (
                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
              ))}
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
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Expertise</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Publications</TableHead>
                      {(isAdmin || isHOD) && <TableHead>Actions</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFaculty.length > 0 ? (
                      filteredFaculty.map((faculty) => (
                        <TableRow key={faculty.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <img 
                                src={faculty.profileImage} 
                                alt={faculty.name}
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <div>
                                <p className="font-medium">{faculty.name}</p>
                                <p className="text-xs text-muted-foreground">{faculty.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{faculty.department}</TableCell>
                          <TableCell>{faculty.position}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {faculty.expertise.slice(0, 2).map((exp, i) => (
                                <Badge key={i} variant="outline" className="bg-primary/5">
                                  {exp}
                                </Badge>
                              ))}
                              {faculty.expertise.length > 2 && (
                                <Badge variant="outline">+{faculty.expertise.length - 2}</Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {faculty.courses.map((course, i) => (
                                <Badge key={i} variant="secondary">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>{faculty.publications}</TableCell>
                          {(isAdmin || isHOD) && (
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </Button>
                                {isAdmin && (
                                  <Button variant="ghost" size="sm" className="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          )}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={(isAdmin || isHOD) ? 7 : 6} className="text-center py-10 text-muted-foreground">
                          No faculty members found matching your criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row items-center justify-between py-4">
              <p className="text-sm text-muted-foreground mb-2 sm:mb-0">Showing {filteredFaculty.length} of {mockFaculty.length} faculty members</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="grid" className="mt-6">
          {filteredFaculty.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredFaculty.map((faculty) => (
                <Card key={faculty.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-40 bg-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                        <img 
                          src={faculty.profileImage} 
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold">{faculty.name}</h3>
                      <p className="text-sm text-muted-foreground">{faculty.position}</p>
                      <p className="text-xs text-primary">{faculty.department}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">{faculty.email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-gray-600">{faculty.publications} Publications</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <span className="text-gray-600">{faculty.courses.join(", ")}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">View Profile</Button>
                    {(isAdmin || isHOD) && (
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
                <h3 className="mt-2 text-lg font-medium">No faculty members found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search term or department filter.</p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FacultyPage;
