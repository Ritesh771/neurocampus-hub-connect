import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ClipboardCheck, Calendar, Users, CheckCircle, XCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const TakeAttendance = () => {
  const { toast } = useToast();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const subjects = [
    { id: "cs101", name: "Computer Science Fundamentals", section: "A" },
    { id: "ds101", name: "Data Structures", section: "B" },
    { id: "web101", name: "Web Development", section: "A" },
    { id: "db101", name: "Database Systems", section: "C" },
  ];

  const [students] = useState([
    { id: "1", name: "John Doe", usn: "1BM19CS001", status: "present" },
    { id: "2", name: "Jane Smith", usn: "1BM19CS002", status: "absent" },
    { id: "3", name: "Mike Johnson", usn: "1BM19CS003", status: "present" },
    { id: "4", name: "Sarah Wilson", usn: "1BM19CS004", status: "late" },
    { id: "5", name: "David Brown", usn: "1BM19CS005", status: "present" },
    { id: "6", name: "Emma Davis", usn: "1BM19CS006", status: "present" },
    { id: "7", name: "Chris Miller", usn: "1BM19CS007", status: "absent" },
    { id: "8", name: "Lisa Anderson", usn: "1BM19CS008", status: "present" },
  ]);

  const [attendance, setAttendance] = useState<Record<string, "present" | "absent" | "late">>(
    students.reduce((acc, student) => {
      acc[student.id] = student.status as "present" | "absent" | "late";
      return acc;
    }, {} as Record<string, "present" | "absent" | "late">)
  );

  const updateAttendance = (studentId: string, status: "present" | "absent" | "late") => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'absent': return 'bg-red-500/20 text-red-300 border-red-400/30';
      case 'late': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present': return <CheckCircle className="h-4 w-4" />;
      case 'absent': return <XCircle className="h-4 w-4" />;
      case 'late': return <Clock className="h-4 w-4" />;
      default: return null;
    }
  };

  const handleSubmit = async () => {
    if (!selectedSubject) {
      toast({
        title: "Error",
        description: "Please select a subject first",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const presentCount = Object.values(attendance).filter(status => status === 'present').length;
    const totalCount = students.length;
    
    toast({
      title: "Attendance Submitted",
      description: `Attendance recorded for ${presentCount}/${totalCount} students`,
    });
    
    setIsSubmitting(false);
  };

  const presentCount = Object.values(attendance).filter(status => status === 'present').length;
  const absentCount = Object.values(attendance).filter(status => status === 'absent').length;
  const lateCount = Object.values(attendance).filter(status => status === 'late').length;

  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-green-500/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <ClipboardCheck className="h-6 w-6 text-green-400" />
          Take Attendance
        </h1>
        <p className="text-white/70">Mark student attendance for today's class.</p>
      </div>

      {/* Subject and Date Selection */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Class Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-white/70 text-sm mb-2 block">Subject & Section</label>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select subject and section" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name} - Section {subject.section}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
        </CardContent>
      </Card>

      {/* Attendance Summary */}
      {selectedSubject && (
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              Attendance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                <p className="text-2xl font-bold text-green-400">{presentCount}</p>
                <p className="text-white/70 text-sm">Present</p>
              </div>
              <div className="text-center p-3 bg-red-500/10 rounded-lg border border-red-400/20">
                <p className="text-2xl font-bold text-red-400">{absentCount}</p>
                <p className="text-white/70 text-sm">Absent</p>
              </div>
              <div className="text-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                <p className="text-2xl font-bold text-yellow-400">{lateCount}</p>
                <p className="text-white/70 text-sm">Late</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Student List */}
      {selectedSubject && (
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white">Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div>
                    <p className="text-white font-medium">{student.name}</p>
                    <p className="text-white/60 text-sm">{student.usn}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'present' ? 'default' : 'outline'}
                      onClick={() => updateAttendance(student.id, 'present')}
                      className={`px-3 py-1 ${
                        attendance[student.id] === 'present' 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-transparent border-green-400/50 text-green-400 hover:bg-green-500/20'
                      }`}
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      P
                    </Button>
                    
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'absent' ? 'default' : 'outline'}
                      onClick={() => updateAttendance(student.id, 'absent')}
                      className={`px-3 py-1 ${
                        attendance[student.id] === 'absent' 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : 'bg-transparent border-red-400/50 text-red-400 hover:bg-red-500/20'
                      }`}
                    >
                      <XCircle className="h-3 w-3 mr-1" />
                      A
                    </Button>
                    
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'late' ? 'default' : 'outline'}
                      onClick={() => updateAttendance(student.id, 'late')}
                      className={`px-3 py-1 ${
                        attendance[student.id] === 'late' 
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                          : 'bg-transparent border-yellow-400/50 text-yellow-400 hover:bg-yellow-500/20'
                      }`}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      L
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit Button */}
      {selectedSubject && (
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/20"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting Attendance...
            </div>
          ) : (
            'Submit Attendance'
          )}
        </Button>
      )}
    </div>
  );
}; 