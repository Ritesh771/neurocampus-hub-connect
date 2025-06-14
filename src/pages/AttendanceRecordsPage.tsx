
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, BarChart3, Calendar, Users } from 'lucide-react';

const AttendanceRecordsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  // Mock data
  const attendanceData = [
    { 
      id: 1, 
      subject: 'Computer Networks', 
      totalClasses: 45, 
      attended: 40, 
      percentage: 88.9,
      semester: '6'
    },
    { 
      id: 2, 
      subject: 'Database Systems', 
      totalClasses: 42, 
      attended: 38, 
      percentage: 90.5,
      semester: '6'
    },
    { 
      id: 3, 
      subject: 'Operating Systems', 
      totalClasses: 40, 
      attended: 35, 
      percentage: 87.5,
      semester: '5'
    },
    { 
      id: 4, 
      subject: 'Software Engineering', 
      totalClasses: 38, 
      attended: 36, 
      percentage: 94.7,
      semester: '6'
    },
  ];

  const filteredData = attendanceData.filter(record => {
    const matchesSearch = record.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = selectedSemester === '' || record.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

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
              Attendance Records
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              View detailed attendance records for all subjects
            </p>
          </div>
          <Badge variant="outline" className="flex items-center gap-2 w-fit">
            <Calendar className="h-4 w-4" />
            Academic Year 2024-25
          </Badge>
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
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="All Semesters" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                    <SelectItem key={sem} value={sem.toString()}>
                      Semester {sem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Attendance Records */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Subject-wise Attendance
            </CardTitle>
            <CardDescription>
              Detailed attendance breakdown for each subject
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.map((record, index) => (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="font-medium text-gray-900">{record.subject}</h4>
                        <Badge variant="outline">Semester {record.semester}</Badge>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
                        <div>
                          <p className="text-sm text-gray-600">Total Classes</p>
                          <p className="font-semibold text-gray-900">{record.totalClasses}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Attended</p>
                          <p className="font-semibold text-gray-900">{record.attended}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Percentage</p>
                          <p className={`font-bold text-lg ${getPercentageColor(record.percentage)}`}>
                            {record.percentage}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-32">
                      <Progress 
                        value={record.percentage} 
                        className="h-2"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No attendance records found</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AttendanceRecordsPage;
