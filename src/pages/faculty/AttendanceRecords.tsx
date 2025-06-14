import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { BarChart, Calendar, TrendingUp, Filter } from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export const AttendanceRecords = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  
  const subjects = [
    { id: "all", name: "All Subjects" },
    { id: "cs101", name: "Computer Science Fundamentals" },
    { id: "ds101", name: "Data Structures" },
    { id: "web101", name: "Web Development" },
    { id: "db101", name: "Database Systems" },
    { id: "os101", name: "Operating Systems" },
  ];

  const attendanceData = [
    {
      id: "cs101",
      subject: "Computer Science",
      totalClasses: 45,
      attendedClasses: 42,
      percentage: 93.3,
      trend: "up",
    },
    {
      id: "ds101",
      subject: "Data Structures",
      totalClasses: 40,
      attendedClasses: 35,
      percentage: 87.5,
      trend: "down",
    },
    {
      id: "web101",
      subject: "Web Development",
      totalClasses: 38,
      attendedClasses: 36,
      percentage: 94.7,
      trend: "up",
    },
    {
      id: "db101",
      subject: "Database Systems",
      totalClasses: 42,
      attendedClasses: 34,
      percentage: 81.0,
      trend: "down",
    },
    {
      id: "os101",
      subject: "Operating Systems",
      totalClasses: 44,
      attendedClasses: 40,
      percentage: 90.9,
      trend: "stable",
    },
  ];

  const monthlyTrend = [
    { month: "Jan", attendance: 92 },
    { month: "Feb", attendance: 89 },
    { month: "Mar", attendance: 94 },
    { month: "Apr", attendance: 87 },
    { month: "May", attendance: 91 },
    { month: "Jun", attendance: 88 },
  ];

  const weeklyData = [
    { day: "Mon", classes: 3, attended: 3 },
    { day: "Tue", classes: 4, attended: 4 },
    { day: "Wed", classes: 2, attended: 2 },
    { day: "Thu", classes: 5, attended: 4 },
    { day: "Fri", classes: 3, attended: 3 },
    { day: "Sat", classes: 2, attended: 1 },
  ];

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-400";
    if (percentage >= 75) return "text-yellow-400";
    return "text-red-400";
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-400" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />;
      case 'stable': return <div className="h-4 w-4 border-t-2 border-yellow-400"></div>;
      default: return null;
    }
  };

  const filteredData = selectedSubject && selectedSubject !== "all" 
    ? attendanceData.filter(item => item.id === selectedSubject)
    : attendanceData;

  const overallStats = {
    totalClasses: attendanceData.reduce((sum, item) => sum + item.totalClasses, 0),
    attendedClasses: attendanceData.reduce((sum, item) => sum + item.attendedClasses, 0),
    averagePercentage: attendanceData.reduce((sum, item) => sum + item.percentage, 0) / attendanceData.length,
  };

  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-sky-500/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <BarChart className="h-6 w-6 text-sky-400" />
          Attendance Records
        </h1>
        <p className="text-white/70">View your attendance records across all subjects.</p>
      </div>

      {/* Filter */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-white/60" />
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Overall Statistics */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Overall Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
              <p className="text-2xl font-bold text-blue-400">{overallStats.totalClasses}</p>
              <p className="text-white/70 text-sm">Total Classes</p>
            </div>
            <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-400/20">
              <p className="text-2xl font-bold text-green-400">{overallStats.attendedClasses}</p>
              <p className="text-white/70 text-sm">Attended</p>
            </div>
            <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
              <p className={`text-2xl font-bold ${getPercentageColor(overallStats.averagePercentage)}`}>
                {overallStats.averagePercentage.toFixed(1)}%
              </p>
              <p className="text-white/70 text-sm">Average</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Subject-wise Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredData.map((subject) => (
              <div key={subject.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-white font-medium">{subject.subject}</h3>
                    <p className="text-white/60 text-sm">
                      {subject.attendedClasses}/{subject.totalClasses} classes
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(subject.trend)}
                    <span className={`text-lg font-bold ${getPercentageColor(subject.percentage)}`}>
                      {subject.percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <div className="relative">
                  <Progress 
                    value={subject.percentage} 
                    className="h-2 bg-white/10"
                  />
                  <div 
                    className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getProgressColor(subject.percentage)}`}
                    style={{ width: `${subject.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trend Chart */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-400" />
            Monthly Attendance Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} domain={[70, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151', 
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Pattern */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">This Week's Pattern</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151', 
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar 
                  dataKey="attended" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  name="Attended"
                />
                <Bar 
                  dataKey="classes" 
                  fill="#374151" 
                  radius={[4, 4, 0, 0]}
                  name="Total Classes"
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 