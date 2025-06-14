import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, BookOpen, Award, ChevronDown, Download } from "lucide-react";
import { useState } from "react";

const performanceData = {
  overall: {
    attendance: 85,
    academics: 78,
    projects: 82,
    extraCurricular: 75
  },
  semesterWise: [
    { semester: "5th", attendance: 88, academics: 82, projects: 85, extraCurricular: 78 },
    { semester: "6th", attendance: 86, academics: 79, projects: 80, extraCurricular: 76 },
    { semester: "7th", attendance: 85, academics: 78, projects: 82, extraCurricular: 75 },
    { semester: "8th", attendance: 83, academics: 75, projects: 79, extraCurricular: 72 }
  ],
  subjectWise: [
    { subject: "Data Structures", performance: 82 },
    { subject: "Database Systems", performance: 78 },
    { subject: "Web Development", performance: 85 },
    { subject: "Machine Learning", performance: 75 },
    { subject: "Computer Networks", performance: 80 }
  ],
  topPerformers: [
    {
      id: 1,
      name: "John Smith",
      usn: "1MS20CS001",
      semester: "7th",
      performance: 92,
      image: "/avatars/john.jpg"
    },
    {
      id: 2,
      name: "Emma Wilson",
      usn: "1MS20CS015",
      semester: "7th",
      performance: 90,
      image: "/avatars/emma.jpg"
    },
    {
      id: 3,
      name: "Michael Brown",
      usn: "1MS20CS028",
      semester: "7th",
      performance: 88,
      image: "/avatars/michael.jpg"
    }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function Performance() {
  const [selectedSemester, setSelectedSemester] = useState("7th");

  const semesterData = performanceData.semesterWise.find(s => s.semester === selectedSemester);

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="w-8 h-8 text-indigo-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Performance Analysis</h1>
        </div>
        <p className="text-indigo-300 font-light">Department performance metrics and statistics</p>
      </div>

      {/* Overall Performance */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300">Attendance</p>
                <p className="text-2xl font-bold text-blue-400">{performanceData.overall.attendance}%</p>
              </div>
              <Users className="w-8 h-8 text-blue-400/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-green">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-300">Academics</p>
                <p className="text-2xl font-bold text-green-400">{performanceData.overall.academics}%</p>
              </div>
              <BookOpen className="w-8 h-8 text-green-400/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-purple">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-300">Projects</p>
                <p className="text-2xl font-bold text-purple-400">{performanceData.overall.projects}%</p>
              </div>
              <Award className="w-8 h-8 text-purple-400/50" />
            </div>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-orange">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-300">Extra Curricular</p>
                <p className="text-2xl font-bold text-orange-400">{performanceData.overall.extraCurricular}%</p>
              </div>
              <Award className="w-8 h-8 text-orange-400/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Semester Performance */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white font-semibold">Semester-wise Performance</CardTitle>
            <div className="flex items-center gap-2">
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700 text-white"
              >
                {performanceData.semesterWise.map(sem => (
                  <option key={sem.semester} value={sem.semester}>
                    {sem.semester} Semester
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[semesterData]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="semester" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "0.5rem",
                    color: "#F3F4F6"
                  }}
                />
                <Bar dataKey="attendance" fill="#3B82F6" name="Attendance" />
                <Bar dataKey="academics" fill="#10B981" name="Academics" />
                <Bar dataKey="projects" fill="#8B5CF6" name="Projects" />
                <Bar dataKey="extraCurricular" fill="#F59E0B" name="Extra Curricular" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white font-semibold">Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData.subjectWise}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="subject" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                      color: "#F3F4F6"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="performance"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white font-semibold">Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Excellent", value: 25 },
                      { name: "Good", value: 45 },
                      { name: "Average", value: 20 },
                      { name: "Below Average", value: 10 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {performanceData.subjectWise.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "0.5rem",
                      color: "#F3F4F6"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performanceData.topPerformers.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-indigo-500">
                    <AvatarImage src={student.image} alt={student.name} />
                    <AvatarFallback className="bg-indigo-900 text-indigo-300">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold">{student.name}</h4>
                    <p className="text-sm text-gray-400">{student.usn} • {student.semester} Semester</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-green-500 text-green-400">
                  {student.performance}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 