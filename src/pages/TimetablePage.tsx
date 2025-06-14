
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Edit, Plus } from 'lucide-react';

const TimetablePage: React.FC = () => {
  const { toast } = useToast();
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');

  // Mock timetable data
  const timetableData = [
    { id: 1, day: 'Monday', time: '09:00-10:30', subject: 'Data Structures', faculty: 'Dr. Smith', room: 'CS-101', semester: 3, section: 'A' },
    { id: 2, day: 'Monday', time: '10:45-12:15', subject: 'Computer Networks', faculty: 'Prof. Johnson', room: 'CS-102', semester: 5, section: 'A' },
    { id: 3, day: 'Tuesday', time: '09:00-10:30', subject: 'Database Systems', faculty: 'Dr. Wilson', room: 'CS-103', semester: 4, section: 'B' },
    { id: 4, day: 'Wednesday', time: '14:00-15:30', subject: 'Operating Systems', faculty: 'Prof. Davis', room: 'CS-104', semester: 4, section: 'A' },
    { id: 5, day: 'Thursday', time: '11:00-12:30', subject: 'Software Engineering', faculty: 'Dr. Brown', room: 'CS-105', semester: 6, section: 'A' },
  ];

  const filteredTimetable = timetableData.filter(entry => {
    if (selectedSemester !== 'all' && entry.semester.toString() !== selectedSemester) return false;
    if (selectedSection !== 'all' && entry.section !== selectedSection) return false;
    return true;
  });

  const handleScheduleClass = () => {
    toast({
      title: "Schedule Class",
      description: "New class scheduling form would open here.",
    });
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:00-10:30', '10:45-12:15', '13:15-14:45', '14:00-15:30', '15:45-17:15'];

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6 max-w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
              Timetable Management
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Manage class schedules with clash detection
            </p>
          </div>
          <Button onClick={handleScheduleClass} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Schedule Class
          </Button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                    <SelectItem key={sem} value={sem.toString()}>Semester {sem}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sections</SelectItem>
                  <SelectItem value="A">Section A</SelectItem>
                  <SelectItem value="B">Section B</SelectItem>
                  <SelectItem value="C">Section C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timetable Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Weekly Timetable
            </CardTitle>
            <CardDescription>
              View and manage class schedules across the week
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-6">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-6 gap-2 mb-4">
                  <div className="font-semibold text-center p-2">Time</div>
                  {days.map(day => (
                    <div key={day} className="font-semibold text-center p-2 bg-gray-50 rounded">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {timeSlots.map(timeSlot => (
                    <div key={timeSlot} className="grid grid-cols-6 gap-2">
                      <div className="font-medium text-sm p-2 bg-gray-100 rounded text-center">
                        {timeSlot}
                      </div>
                      {days.map(day => {
                        const classForSlot = filteredTimetable.find(
                          entry => entry.day === day && entry.time === timeSlot
                        );
                        return (
                          <div key={`${day}-${timeSlot}`} className="min-h-[80px] border rounded p-2">
                            {classForSlot ? (
                              <div className="space-y-1">
                                <div className="font-medium text-xs text-blue-600">
                                  {classForSlot.subject}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {classForSlot.faculty}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {classForSlot.room}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  Sem {classForSlot.semester}-{classForSlot.section}
                                </Badge>
                              </div>
                            ) : (
                              <div className="h-full flex items-center justify-center">
                                <Button variant="ghost" size="sm" className="text-xs h-6">
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Changes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Schedule Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredTimetable.slice(0, 3).map((entry, index) => (
                <div key={entry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{entry.subject}</div>
                    <div className="text-xs text-gray-600">
                      {entry.day}, {entry.time} • {entry.faculty} • {entry.room}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TimetablePage;
