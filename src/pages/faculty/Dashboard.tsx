import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ClipboardCheck, 
  Upload, 
  CalendarCheck, 
  CalendarDays,
  BookOpen,
  Users,
  Bell,
  TrendingUp,
  Clock,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const Dashboard = () => {
  const todaysClasses = [
    { subject: "Computer Science", time: "9:00 AM - 10:00 AM", room: "CS-101", status: "upcoming" },
    { subject: "Data Structures", time: "11:00 AM - 12:00 PM", room: "CS-102", status: "current" },
    { subject: "Web Development", time: "2:00 PM - 3:00 PM", room: "CS-103", status: "upcoming" },
  ];

  const pendingTasks = [
    { task: "Upload marks for Mid-term", priority: "high", icon: Upload },
    { task: "Take attendance for CS-101", priority: "medium", icon: ClipboardCheck },
    { task: "Review leave applications", priority: "low", icon: CalendarCheck },
  ];

  const attendanceData = [
    { subject: "Computer Science", attendance: 92 },
    { subject: "Data Structures", attendance: 87 },
    { subject: "Web Development", attendance: 95 },
    { subject: "Database Systems", attendance: 83 },
  ];

  const marksData = [
    { test: "Test 1", excellent: 15, good: 25, average: 35, poor: 10 },
    { test: "Test 2", excellent: 20, good: 30, average: 25, poor: 8 },
    { test: "Mid-term", excellent: 18, good: 28, average: 30, poor: 12 },
  ];

  const pieData = [
    { name: 'Excellent (90-100)', value: 25, color: '#10B981' },
    { name: 'Good (75-89)', value: 35, color: '#3B82F6' },
    { name: 'Average (60-74)', value: 30, color: '#F59E0B' },
    { name: 'Poor (<60)', value: 10, color: '#EF4444' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-400/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-blue-500/10">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Dr. Smith!</h1>
        <p className="text-white/70">Here's what's happening in your classes today.</p>
      </div>

      {/* Today's Overview */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-400" />
          Today's Quick Overview
        </h2>
        
        <div className="grid gap-4">
          {/* Classes Today */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 hover:bg-black/40 transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-green-400" />
                Classes Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaysClasses.map((cls, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-medium">{cls.subject}</p>
                      {cls.status === 'current' && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs font-medium">LIVE</span>
                        </div>
                      )}
                    </div>
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {cls.time}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {cls.room}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 hover:bg-black/40 transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-400" />
                Tasks Pending
                <Badge className="bg-red-500/20 text-red-300 border border-red-400/30">
                  {pendingTasks.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <task.icon className="h-4 w-4 text-white/60" />
                    <p className="text-white">{task.task}</p>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 hover:bg-black/40 transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-cyan-400" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-white">15</p>
                  <p className="text-white/70 text-sm">Classes This Week</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-white">89%</p>
                  <p className="text-white/70 text-sm">Avg Attendance</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-white">245</p>
                  <p className="text-white/70 text-sm">Total Students</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-white/70 text-sm">Pending Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-purple-400" />
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <Link to="/attendance">
            <Button className="w-full h-20 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
              <ClipboardCheck className="h-6 w-6 text-green-400" />
              <span>Take Attendance</span>
            </Button>
          </Link>
          
          <Link to="/upload-marks">
            <Button className="w-full h-20 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <Upload className="h-6 w-6 text-purple-400" />
              <span>Upload Marks</span>
            </Button>
          </Link>
          
          <Link to="/apply-leave">
            <Button className="w-full h-20 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <CalendarCheck className="h-6 w-6 text-teal-400" />
              <span>Apply Leave</span>
            </Button>
          </Link>
          
          <Link to="/schedule-mentoring">
            <Button className="w-full h-20 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/30 text-white flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20">
              <CalendarDays className="h-6 w-6 text-yellow-400" />
              <span>Schedule Mentoring</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Charts Section */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-400" />
          Analytics
        </h2>

        {/* Subject-wise Attendance */}
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 mb-4 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Subject-wise Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Bar dataKey="attendance" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Marks Distribution */}
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Marks Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-white/70 text-xs">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}; 