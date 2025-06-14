
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle, Bell, Search } from 'lucide-react';

const LowAttendancePage: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for low attendance students
  const lowAttendanceStudents = [
    { id: 1, name: 'John Doe', usn: '1MS21CS001', subject: 'Data Structures', attendance: 45, semester: 3 },
    { id: 2, name: 'Jane Smith', usn: '1MS21CS002', subject: 'Computer Networks', attendance: 60, semester: 5 },
    { id: 3, name: 'Mike Johnson', usn: '1MS21CS003', subject: 'Database Systems', attendance: 50, semester: 3 },
    { id: 4, name: 'Sarah Wilson', usn: '1MS21CS004', subject: 'Operating Systems', attendance: 55, semester: 4 },
    { id: 5, name: 'David Brown', usn: '1MS21CS005', subject: 'Software Engineering', attendance: 62, semester: 6 },
  ];

  const filteredStudents = lowAttendanceStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.usn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNotifyStudent = (studentName: string, usn: string) => {
    toast({
      title: "Notification Sent",
      description: `Low attendance alert sent to ${studentName} (${usn})`,
    });
  };

  const getAttendanceBadgeColor = (percentage: number) => {
    if (percentage < 50) return 'destructive';
    if (percentage < 65) return 'secondary';
    return 'default';
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
              Low Attendance Monitoring
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Students with attendance below 75%
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <span className="text-sm text-amber-600 font-medium">
              {filteredStudents.length} students need attention
            </span>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search by name, USN, or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full max-w-md"
        />
      </motion.div>

      {/* Low Attendance Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Students with Low Attendance</CardTitle>
            <CardDescription>
              Monitor and take action for students with attendance below required threshold
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Table Header */}
                <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b font-medium text-sm text-gray-700">
                  <div>Student Name</div>
                  <div>USN</div>
                  <div>Subject</div>
                  <div>Semester</div>
                  <div>Attendance %</div>
                  <div>Actions</div>
                </div>

                {/* Table Body */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student, index) => (
                      <motion.div
                        key={student.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="grid grid-cols-6 gap-4 p-4 border-b hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{student.name}</div>
                        <div className="text-gray-600 text-sm">{student.usn}</div>
                        <div className="text-gray-700">{student.subject}</div>
                        <div className="text-gray-600">Sem {student.semester}</div>
                        <div>
                          <Badge variant={getAttendanceBadgeColor(student.attendance)}>
                            {student.attendance}%
                          </Badge>
                        </div>
                        <div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleNotifyStudent(student.name, student.usn)}
                            className="flex items-center gap-1 text-xs"
                          >
                            <Bell className="h-3 w-3" />
                            Notify
                          </Button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No students found matching your search criteria</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Summary Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Critical (<50%)</p>
                <p className="text-2xl font-bold text-red-600">
                  {filteredStudents.filter(s => s.attendance < 50).length}
                </p>
              </div>
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Warning (50-65%)</p>
                <p className="text-2xl font-bold text-amber-600">
                  {filteredStudents.filter(s => s.attendance >= 50 && s.attendance < 65).length}
                </p>
              </div>
              <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">At Risk (65-75%)</p>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredStudents.filter(s => s.attendance >= 65 && s.attendance < 75).length}
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LowAttendancePage;
