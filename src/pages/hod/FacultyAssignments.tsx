import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClipboardCheck, Filter, Plus, Edit, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const assignments = [
  {
    id: 1,
    subject: "Machine Learning",
    code: "CS703",
    faculty: "Dr. Rajesh Kumar",
    semester: "7th",
    branch: "CSE",
    section: "A",
    credits: 4,
    students: 45,
    type: "Core"
  },
  {
    id: 2,
    subject: "Database Systems",
    code: "CS501",
    faculty: "Prof. Meera Sharma",
    semester: "5th",
    branch: "CSE",
    section: "A",
    credits: 4,
    students: 52,
    type: "Core"
  },
  {
    id: 3,
    subject: "Web Technologies",
    code: "CS602",
    faculty: "Dr. Amit Patel",
    semester: "6th",
    branch: "CSE",
    section: "A",
    credits: 3,
    students: 48,
    type: "Core"
  },
  {
    id: 4,
    subject: "Mobile Computing",
    code: "CS605",
    faculty: "Prof. Priya Singh",
    semester: "6th",
    branch: "CSE",
    section: "A",
    credits: 3,
    students: 48,
    type: "Elective"
  },
  {
    id: 5,
    subject: "Cloud Computing",
    code: "CS702",
    faculty: "Dr. Vikram Reddy",
    semester: "7th",
    branch: "CSE",
    section: "A",
    credits: 3,
    students: 45,
    type: "Elective"
  },
  {
    id: 6,
    subject: "Artificial Intelligence",
    code: "CS701",
    faculty: "Dr. Anjali Gupta",
    semester: "7th",
    branch: "CSE",
    section: "A",
    credits: 4,
    students: 45,
    type: "Core"
  }
];

export function FacultyAssignments() {
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filteredAssignments = assignments.filter(assignment => {
    const semesterMatch = selectedSemester === "all" || assignment.semester === selectedSemester;
    const typeMatch = selectedType === "all" || assignment.type === selectedType;
    return semesterMatch && typeMatch;
  });

  const getTypeColor = (type: string) => {
    return type === "Core" ? "border-blue-500 text-blue-400" : "border-purple-500 text-purple-400";
  };

  const totalFaculty = new Set(assignments.map(a => a.faculty)).size;
  const totalSubjects = assignments.length;
  const totalStudents = assignments.reduce((sum, a) => sum + a.students, 0);

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <ClipboardCheck className="w-8 h-8 text-teal-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Faculty Assignments</h1>
        </div>
        <p className="text-teal-300 font-light">Manage subject assignments and faculty workload</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-teal">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-teal-400">{totalFaculty}</p>
            <p className="text-sm text-teal-300">Total Faculty</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">{totalSubjects}</p>
            <p className="text-sm text-blue-300">Total Subjects</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-purple">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">{totalStudents}</p>
            <p className="text-sm text-purple-300">Total Students</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        <Select value={selectedSemester} onValueChange={setSelectedSemester}>
          <SelectTrigger className="w-[180px] glass border-white/20">
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Semesters</SelectItem>
            <SelectItem value="5th">5th Semester</SelectItem>
            <SelectItem value="6th">6th Semester</SelectItem>
            <SelectItem value="7th">7th Semester</SelectItem>
            <SelectItem value="8th">8th Semester</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[180px] glass border-white/20">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Core">Core Subjects</SelectItem>
            <SelectItem value="Elective">Elective Subjects</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-teal-600 hover:bg-teal-700 text-white glow-teal">
          <Plus className="w-4 h-4 mr-2" />
          New Assignment
        </Button>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <Card key={assignment.id} className="chart-container">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-teal-500/30">
                    <AvatarFallback className="bg-teal-500/10 text-teal-400">
                      {assignment.faculty.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-white">{assignment.subject}</h3>
                    <p className="text-sm text-gray-300">{assignment.code}</p>
                    <p className="text-sm text-teal-400 mt-1">{assignment.faculty}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className={getTypeColor(assignment.type)}>
                    {assignment.type}
                  </Badge>
                  <Badge variant="outline" className="border-indigo-500 text-indigo-400">
                    {assignment.credits} credits
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                <div>
                  <span className="text-gray-400">Semester:</span>
                  <span className="text-white ml-2">{assignment.semester}</span>
                </div>
                <div>
                  <span className="text-gray-400">Section:</span>
                  <span className="text-white ml-2">{assignment.section}</span>
                </div>
                <div>
                  <span className="text-gray-400">Students:</span>
                  <span className="text-white ml-2">{assignment.students}</span>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Edit Assignment
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 glass border-teal-500/30 text-teal-400 hover:bg-teal-500/10"
                >
                  <Users className="w-3 h-3 mr-1" />
                  View Students
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 