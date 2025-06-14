
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, User, Calendar } from 'lucide-react';

const WeeklySchedulePage: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  // Mock data for weekly schedule
  const weeklySchedule = {
    Monday: [
      { time: '09:00-10:30', subject: 'Operating Systems', faculty: 'Dr. Smith', room: 'Room 301', type: 'lecture' },
      { time: '11:00-12:30', subject: 'Computer Networks', faculty: 'Prof. Johnson', room: 'Room 405', type: 'lecture' },
      { time: '13:30-15:00', subject: 'AI Lab', faculty: 'Dr. Wilson', room: 'Lab 204', type: 'lab' },
      { time: '15:30-17:00', subject: 'Web Development', faculty: 'Prof. Brown', room: 'Lab 202', type: 'lab' },
    ],
    Tuesday: [
      { time: '09:00-10:30', subject: 'Database Systems', faculty: 'Dr. Davis', room: 'Room 302', type: 'lecture' },
      { time: '11:00-12:30', subject: 'Software Engineering', faculty: 'Prof. Miller', room: 'Room 403', type: 'lecture' },
      { time: '14:00-15:30', subject: 'Database Lab', faculty: 'Dr. Davis', room: 'Lab 301', type: 'lab' },
    ],
    Wednesday: [
      { time: '09:00-10:30', subject: 'Operating Systems', faculty: 'Dr. Smith', room: 'Room 301', type: 'lecture' },
      { time: '11:00-12:30', subject: 'Machine Learning', faculty: 'Dr. Wilson', room: 'Room 404', type: 'lecture' },
      { time: '13:30-15:00', subject: 'Programming Lab', faculty: 'Prof. Johnson', room: 'Lab 203', type: 'lab' },
    ],
    Thursday: [
      { time: '09:00-10:30', subject: 'Computer Networks', faculty: 'Prof. Johnson', room: 'Room 405', type: 'lecture' },
      { time: '11:00-12:30', subject: 'Data Structures', faculty: 'Dr. Taylor', room: 'Room 302', type: 'lecture' },
      { time: '14:00-15:30', subject: 'Networks Lab', faculty: 'Prof. Johnson', room: 'Lab 305', type: 'lab' },
    ],
    Friday: [
      { time: '09:00-10:30', subject: 'Software Engineering', faculty: 'Prof. Miller', room: 'Room 403', type: 'lecture' },
      { time: '11:00-12:30', subject: 'Project Work', faculty: 'Dr. Smith', room: 'Room 501', type: 'project' },
      { time: '14:00-17:00', subject: 'Seminar', faculty: 'Various', room: 'Auditorium', type: 'seminar' },
    ],
    Saturday: [
      { time: '09:00-10:30', subject: 'Extra Class', faculty: 'Dr. Wilson', room: 'Room 301', type: 'lecture' },
      { time: '11:00-12:30', subject: 'Tutorial', faculty: 'Teaching Assistant', room: 'Room 201', type: 'tutorial' },
    ],
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800';
      case 'lab': return 'bg-green-100 text-green-800';
      case 'project': return 'bg-purple-100 text-purple-800';
      case 'seminar': return 'bg-orange-100 text-orange-800';
      case 'tutorial': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6 p-0 max-w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-3 sm:gap-4">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
              Weekly Schedule
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
              Your complete weekly class schedule
            </p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 sm:gap-2 w-fit text-xs sm:text-sm">
            <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
            Current Week
          </Badge>
        </div>
      </motion.div>

      {/* Week Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-2 overflow-x-auto pb-2"
      >
        <Button 
          variant={selectedWeek === 'current' ? 'default' : 'outline'} 
          size="sm"
          className="text-xs sm:text-sm whitespace-nowrap"
          onClick={() => setSelectedWeek('current')}
        >
          Current Week
        </Button>
        <Button 
          variant={selectedWeek === 'next' ? 'default' : 'outline'} 
          size="sm"
          className="text-xs sm:text-sm whitespace-nowrap"
          onClick={() => setSelectedWeek('next')}
        >
          Next Week
        </Button>
      </motion.div>

      {/* Weekly Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
      >
        {days.map((day, dayIndex) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: dayIndex * 0.05 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-sm sm:text-base md:text-lg">{day}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {weeklySchedule[day as keyof typeof weeklySchedule].length} classes
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 sm:space-y-3">
                  {weeklySchedule[day as keyof typeof weeklySchedule].map((classItem, index) => (
                    <div key={index} className="border rounded-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 sm:gap-2 mb-1">
                              <Clock className="h-3 w-3 text-gray-500 flex-shrink-0" />
                              <span className="text-xs font-medium text-gray-600">{classItem.time}</span>
                            </div>
                            <h4 className="font-medium text-xs sm:text-sm truncate">{classItem.subject}</h4>
                          </div>
                          <Badge variant="outline" className={`${getTypeColor(classItem.type)} text-xs flex-shrink-0`}>
                            {classItem.type}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600 truncate">{classItem.faculty}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-600">{classItem.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {weeklySchedule[day as keyof typeof weeklySchedule].length === 0 && (
                    <div className="text-center py-4 text-gray-500">
                      <Calendar className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-gray-300" />
                      <p className="text-xs sm:text-sm">No classes scheduled</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WeeklySchedulePage;
