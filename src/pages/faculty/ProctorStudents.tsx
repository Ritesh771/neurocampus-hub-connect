import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, TrendingUp, TrendingDown, Minus } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Arjun Sharma",
    semester: "5th Semester",
    usn: "1MS21CS001",
    profilePic: "",
    attendance: 92,
    averageMarks: 85,
    status: "good"
  },
  {
    id: 2,
    name: "Priya Kumari",
    semester: "5th Semester", 
    usn: "1MS21CS025",
    profilePic: "",
    attendance: 78,
    averageMarks: 72,
    status: "average"
  },
  {
    id: 3,
    name: "Rohit Verma",
    semester: "5th Semester",
    usn: "1MS21CS042",
    profilePic: "",
    attendance: 65,
    averageMarks: 58,
    status: "at-risk"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    semester: "5th Semester",
    usn: "1MS21CS058",
    profilePic: "",
    attendance: 88,
    averageMarks: 80,
    status: "good"
  },
  {
    id: 5,
    name: "Kiran Kumar",
    semester: "5th Semester",
    usn: "1MS21CS015",
    profilePic: "",
    attendance: 70,
    averageMarks: 65,
    status: "average"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "good":
      return <Badge className="bg-green-500/20 text-green-300 border-green-400/30">Good</Badge>;
    case "average":
      return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">Average</Badge>;
    case "at-risk":
      return <Badge className="bg-red-500/20 text-red-300 border-red-400/30">At Risk</Badge>;
    default:
      return null;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "good":
      return <TrendingUp className="h-4 w-4 text-green-400" />;
    case "average":
      return <Minus className="h-4 w-4 text-yellow-400" />;
    case "at-risk":
      return <TrendingDown className="h-4 w-4 text-red-400" />;
    default:
      return null;
  }
};

export const ProctorStudents = () => {
  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Users className="h-6 w-6 text-orange-400" />
          Proctor Students
        </h1>
        <p className="text-white/70">Monitor and support your mentee students' academic progress.</p>
      </div>

      {/* Students List */}
      <div className="space-y-4">
        {students.map((student) => (
          <Card 
            key={student.id} 
            className="bg-black/30 backdrop-blur-lg border-white/10 glass hover:glow transition-all duration-300 cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border-2 border-white/20">
                  <AvatarImage src={student.profilePic} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{student.name}</h3>
                      <p className="text-white/60 text-sm">{student.usn} • {student.semester}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(student.status)}
                      {getStatusBadge(student.status)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Attendance */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white/70 text-sm">Attendance</span>
                        <span className="text-white font-semibold">{student.attendance}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            student.attendance >= 85 ? 'bg-green-400' : 
                            student.attendance >= 75 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}
                          style={{ width: `${student.attendance}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Average Marks */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white/70 text-sm">Avg. Marks</span>
                        <span className="text-white font-semibold">{student.averageMarks}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            student.averageMarks >= 75 ? 'bg-green-400' : 
                            student.averageMarks >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                          }`}
                          style={{ width: `${student.averageMarks}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}; 