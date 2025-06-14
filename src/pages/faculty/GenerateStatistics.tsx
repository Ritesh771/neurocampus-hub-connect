import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Download, Filter, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Tooltip, Legend } from "recharts";

const subjectPerformanceData = [
  { subject: "Data Structures", average: 78, total: 45 },
  { subject: "DBMS", average: 82, total: 45 },
  { subject: "Web Tech", average: 75, total: 45 },
  { subject: "Java", average: 85, total: 45 },
  { subject: "Algorithms", average: 73, total: 45 },
  { subject: "Networks", average: 80, total: 45 }
];

const attendanceData = [
  { month: "Jan", attendance: 85 },
  { month: "Feb", attendance: 82 },
  { month: "Mar", attendance: 88 },
  { month: "Apr", attendance: 90 },
  { month: "May", attendance: 87 },
  { month: "Jun", attendance: 85 }
];

const gradeDistribution = [
  { grade: "A+", count: 12, color: "#10B981" },
  { grade: "A", count: 18, color: "#3B82F6" },
  { grade: "B+", count: 8, color: "#F59E0B" },
  { grade: "B", count: 5, color: "#EF4444" },
  { grade: "C", count: 2, color: "#6B7280" }
];

export const GenerateStatistics = () => {
  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-cyan-400" />
          Generate Statistics
        </h1>
        <p className="text-white/70">Comprehensive analytics and reports for academic performance tracking.</p>
      </div>

      {/* Filter and Export Controls */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filter by Semester
          </Button>
          <Button
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Select Subjects
          </Button>
        </div>
        <div className="flex gap-2">
          <Button className="bg-green-500/20 text-green-300 hover:bg-green-500/30 border-green-400/30">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-400/30">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Subject Performance Chart */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
        <CardHeader>
          <CardTitle className="text-white">Subject-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="subject" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Bar 
                  dataKey="average" 
                  fill="url(#blueGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Trend and Grade Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Trend */}
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
          <CardHeader>
            <CardTitle className="text-white">Monthly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 7, stroke: '#10B981', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Grade Distribution */}
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
          <CardHeader>
            <CardTitle className="text-white">Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gradeDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ grade, count }) => `${grade}: ${count}`}
                    labelLine={false}
                  >
                    {gradeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg border-blue-400/30 glass">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-blue-300 text-sm font-medium">Average Performance</h3>
              <p className="text-3xl font-bold text-white mt-2">79.2%</p>
              <p className="text-blue-200 text-sm mt-1">Across all subjects</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg border-green-400/30 glass">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-green-300 text-sm font-medium">Average Attendance</h3>
              <p className="text-3xl font-bold text-white mt-2">86.2%</p>
              <p className="text-green-200 text-sm mt-1">Current semester</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg border-purple-400/30 glass">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-purple-300 text-sm font-medium">Total Students</h3>
              <p className="text-3xl font-bold text-white mt-2">45</p>
              <p className="text-purple-200 text-sm mt-1">Under mentorship</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 