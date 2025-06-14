import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, CalendarDays, Clock, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

export const Mentoring = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const students = [
    { id: "1", name: "John Doe", usn: "1BM19CS001", department: "Computer Science" },
    { id: "2", name: "Jane Smith", usn: "1BM19CS002", department: "Computer Science" },
    { id: "3", name: "Mike Johnson", usn: "1BM19CS003", department: "Computer Science" },
    { id: "4", name: "Sarah Wilson", usn: "1BM19CS004", department: "Computer Science" },
    { id: "5", name: "David Brown", usn: "1BM19CS005", department: "Computer Science" },
  ];

  const [scheduledSessions] = useState([
    {
      id: "1",
      student: "John Doe",
      usn: "1BM19CS001",
      date: "2024-03-20",
      time: "10:00 AM",
      status: "scheduled",
      notes: "Career guidance and project discussion"
    },
    {
      id: "2",
      student: "Jane Smith",
      usn: "1BM19CS002",
      date: "2024-03-21",
      time: "02:00 PM",
      status: "completed",
      notes: "Academic performance review"
    },
    {
      id: "3",
      student: "Mike Johnson",
      usn: "1BM19CS003",
      date: "2024-03-22",
      time: "11:00 AM",
      status: "cancelled",
      notes: "Student requested cancellation"
    }
  ]);

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !selectedStudent || !notes.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Session Scheduled",
      description: "Mentoring session has been scheduled successfully",
    });
    
    // Reset form
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedStudent("");
    setNotes("");
    setIsSubmitting(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-500/20 text-blue-400 border-blue-400/30";
      case "completed": return "bg-green-500/20 text-green-400 border-green-400/30";
      case "cancelled": return "bg-red-500/20 text-red-400 border-red-400/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-400/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled": return <Clock className="h-4 w-4" />;
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "cancelled": return <XCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-emerald-500/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Users className="h-6 w-6 text-emerald-400" />
          Mentoring Sessions
        </h1>
        <p className="text-white/70">Schedule and manage student mentoring sessions.</p>
      </div>

      {/* Schedule New Session */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Schedule New Session</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Student Selection */}
          <div>
            <label className="text-white/70 text-sm mb-2 block">Select Student</label>
            <Select value={selectedStudent} onValueChange={setSelectedStudent}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select a student" />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name} ({student.usn})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal bg-white/5 border-white/20 text-white hover:bg-white/10 ${
                      !selectedDate && "text-white/50"
                    }`}
                  >
                    {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-black/90 border-white/10">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    className="bg-transparent text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Time
              </label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-white/70 text-sm mb-2 block">Session Notes</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any specific topics or concerns to discuss..."
              className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Scheduling Session...
              </div>
            ) : (
              "Schedule Session"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-emerald-400" />
            Upcoming Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledSessions.map((session) => (
              <div
                key={session.id}
                className={`p-4 rounded-lg border ${getStatusColor(session.status)}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-medium">{session.student}</h3>
                    <p className="text-white/60 text-sm">{session.usn}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(session.status)}
                    <span className="text-sm capitalize">{session.status}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm">
                  <span className="text-white/70">
                    {format(new Date(session.date), "MMM dd, yyyy")}
                  </span>
                  <span className="text-white/70">{session.time}</span>
                </div>
                {session.notes && (
                  <p className="mt-2 text-white/70 text-sm">{session.notes}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 