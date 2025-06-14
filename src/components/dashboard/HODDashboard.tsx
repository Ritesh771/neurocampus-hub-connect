
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { PerformanceChart } from '../charts/PerformanceChart';
import { AttendanceChart } from '../charts/AttendanceChart';
import { PieChartCard } from '../charts/PieChartCard';
import { EnrollmentChart } from '../charts/EnrollmentChart';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, FileText } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for charts
const performanceData = [
  { name: 'Jan', attendance: 88, marks: 72, average: 68 },
  { name: 'Feb', attendance: 90, marks: 75, average: 70 },
  { name: 'Mar', attendance: 92, marks: 78, average: 72 },
  { name: 'Apr', attendance: 89, marks: 80, average: 74 },
  { name: 'May', attendance: 87, marks: 76, average: 73 },
];

const attendanceData = [
  { name: 'Mon', present: 85, absent: 15 },
  { name: 'Tue', present: 88, absent: 12 },
  { name: 'Wed', present: 92, absent: 8 },
  { name: 'Thu', present: 87, absent: 13 },
  { name: 'Fri', present: 81, absent: 19 },
];

const enrollmentTrends = [
  { year: '2020', students: 380, male: 220, female: 160 },
  { year: '2021', students: 410, male: 230, female: 180 },
  { year: '2022', students: 435, male: 240, female: 195 },
  { year: '2023', students: 460, male: 250, female: 210 },
  { year: '2024', students: 476, male: 256, female: 220 },
];

const deptDistribution = [
  { name: 'B.Tech', value: 220 },
  { name: 'M.Tech', value: 180 },
  { name: 'PhD', value: 76 },
];

export const HODDashboard: React.FC = () => {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-4 lg:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight truncate">Department Head Dashboard</h1>
          <div className="flex items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-2">
            <span className="truncate">Computer Science Department</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="truncate">Spring Semester</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { title: "Manage Semesters", icon: <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />, color: "bg-blue-500" },
            { title: "Assign Faculty", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />, color: "bg-green-500" },
            { title: "Approve Leaves", icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />, color: "bg-amber-500" },
            { title: "Generate Reports", icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5" />, color: "bg-purple-500" }
          ].map((action, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer"
            >
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${action.color} flex items-center justify-center text-white mb-2 sm:mb-3`}>
                    {action.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-tight">{action.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Department Stats */}
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium truncate">Total Students</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-lg sm:text-2xl font-bold">476</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="truncate">+4.6% from last semester</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium truncate">Faculty Members</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" />
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-lg sm:text-2xl font-bold">32</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="truncate">+2 new hires</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium truncate">Course Completion</CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-lg sm:text-2xl font-bold">87%</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="truncate">+2.4% from last semester</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium truncate">Avg. Attendance</CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-lg sm:text-2xl font-bold">92.3%</div>
              <p className="text-xs text-amber-500 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="truncate">-0.8% from last semester</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Branch Management Tabs */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Branch Management</CardTitle>
            <CardDescription className="text-sm">Manage semesters, sections, and academic structures</CardDescription>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <Tabs defaultValue="semesters" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mx-4 sm:mx-0 mb-4">
                <TabsTrigger value="semesters" className="text-xs sm:text-sm">Semesters</TabsTrigger>
                <TabsTrigger value="sections" className="text-xs sm:text-sm">Sections</TabsTrigger>
                <TabsTrigger value="faculty" className="text-xs sm:text-sm">Faculty Assignment</TabsTrigger>
              </TabsList>
              <TabsContent value="semesters" className="px-4 sm:px-0">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <h3 className="text-sm font-medium">Current Semester</h3>
                    <Button size="sm" className="text-xs w-fit">Add New Semester</Button>
                  </div>
                  <ScrollArea className="w-full">
                    <div className="min-w-[600px]">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-medium text-xs sm:text-sm">Semester</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Start Date</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">End Date</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Status</th>
                            <th className="text-right py-2 font-medium text-xs sm:text-sm">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'Spring 2025', start: 'Jan 10, 2025', end: 'May 20, 2025', status: 'Current' },
                            { name: 'Fall 2024', start: 'Aug 15, 2024', end: 'Dec 20, 2024', status: 'Completed' },
                            { name: 'Summer 2024', start: 'May 20, 2024', end: 'Jul 30, 2024', status: 'Completed' },
                          ].map((sem, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 text-xs sm:text-sm">{sem.name}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{sem.start}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{sem.end}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">
                                <Badge variant={sem.status === 'Current' ? "default" : "secondary"} className="text-xs">{sem.status}</Badge>
                              </td>
                              <td className="py-3 text-xs sm:text-sm text-right">
                                <Button variant="ghost" size="sm" className="text-xs">Edit</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="sections" className="px-4 sm:px-0">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <h3 className="text-sm font-medium">Sections</h3>
                    <Button size="sm" className="text-xs w-fit">Add New Section</Button>
                  </div>
                  <ScrollArea className="w-full">
                    <div className="min-w-[600px]">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-medium text-xs sm:text-sm">Section</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Year</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Students</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Class Advisor</th>
                            <th className="text-right py-2 font-medium text-xs sm:text-sm">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'CS-A', year: '2nd Year', students: 60, advisor: 'Dr. Sarah Johnson' },
                            { name: 'CS-B', year: '2nd Year', students: 58, advisor: 'Prof. Michael Chen' },
                            { name: 'CS-C', year: '3rd Year', students: 62, advisor: 'Dr. Emily Rodriguez' },
                            { name: 'CS-D', year: '3rd Year', students: 59, advisor: 'Prof. David Kim' },
                          ].map((section, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 text-xs sm:text-sm">{section.name}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{section.year}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{section.students}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{section.advisor}</td>
                              <td className="py-3 text-xs sm:text-sm text-right">
                                <Button variant="ghost" size="sm" className="text-xs">Manage</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="faculty" className="px-4 sm:px-0">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <h3 className="text-sm font-medium">Faculty Assignments</h3>
                    <Button size="sm" className="text-xs w-fit">Assign Faculty</Button>
                  </div>
                  <ScrollArea className="w-full">
                    <div className="min-w-[700px]">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-medium text-xs sm:text-sm">Subject</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Semester</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Sections</th>
                            <th className="text-center py-2 font-medium text-xs sm:text-sm">Faculty</th>
                            <th className="text-right py-2 font-medium text-xs sm:text-sm">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { subject: 'Data Structures', semester: '3rd', sections: 'CS-A, CS-B', faculty: 'Dr. Sarah Johnson' },
                            { subject: 'Database Systems', semester: '5th', sections: 'CS-A, CS-B', faculty: 'Prof. Michael Chen' },
                            { subject: 'Machine Learning', semester: '7th', sections: 'CS-C, CS-D', faculty: 'Dr. Emily Rodriguez' },
                            { subject: 'Web Development', semester: '5th', sections: 'CS-C, CS-D', faculty: 'Prof. David Kim' },
                          ].map((assignment, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 text-xs sm:text-sm">{assignment.subject}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{assignment.semester}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{assignment.sections}</td>
                              <td className="py-3 text-xs sm:text-sm text-center">{assignment.faculty}</td>
                              <td className="py-3 text-xs sm:text-sm text-right">
                                <Button variant="ghost" size="sm" className="text-xs">Reassign</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
          <PerformanceChart 
            title="Department Performance Trends" 
            description="Academic performance and attendance statistics"
            data={performanceData}
          />
          
          <AttendanceChart
            title="Weekly Attendance Statistics"
            description="Current week attendance overview"
            data={attendanceData}
          />

          <PieChartCard
            title="Student Distribution"
            description="Students across programs"
            data={deptDistribution}
          />

          <EnrollmentChart
            title="Enrollment Trends"
            description="Year-on-year enrollment statistics"
            data={enrollmentTrends}
            showGenderDistribution={true}
          />
        </div>

        {/* Timetable Management */}
        <Card className="w-full">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle className="text-base sm:text-lg">Timetable Management</CardTitle>
              <CardDescription className="text-sm">Manage class schedules with clash detection</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="text-xs w-fit">View Full Timetable</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-sm font-medium">Recent Schedule Changes</h3>
                <Button size="sm" className="text-xs w-fit">Schedule New Class</Button>
              </div>
              <ScrollArea className="w-full">
                <div className="min-w-[700px]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-xs sm:text-sm">Course</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Section</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Day & Time</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Room</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Faculty</th>
                        <th className="text-right py-2 font-medium text-xs sm:text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { course: 'Data Structures', section: 'CS-A', time: 'Mon, 10:00-11:30', room: '301', faculty: 'Dr. Johnson', status: 'Scheduled' },
                        { course: 'Machine Learning', section: 'CS-C', time: 'Wed, 14:00-15:30', room: '405', faculty: 'Dr. Rodriguez', status: 'Clash Detected' },
                        { course: 'Web Development', section: 'CS-D', time: 'Thu, 09:00-10:30', room: '302', faculty: 'Prof. Kim', status: 'Scheduled' },
                      ].map((item, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 text-xs sm:text-sm">{item.course}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{item.section}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{item.time}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{item.room}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{item.faculty}</td>
                          <td className="py-3 text-xs sm:text-sm text-right">
                            <Badge variant={item.status === 'Clash Detected' ? "destructive" : "outline"} className="text-xs">{item.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* Leave Management */}
        <Card className="w-full">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle className="text-base sm:text-lg">Leave Management</CardTitle>
              <CardDescription className="text-sm">Faculty and self leave requests</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="text-xs w-fit">Apply for Leave</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Pending Leave Requests</h3>
              <ScrollArea className="w-full">
                <div className="min-w-[700px]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-xs sm:text-sm">Faculty</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Type</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">From</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">To</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Reason</th>
                        <th className="text-right py-2 font-medium text-xs sm:text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { faculty: 'Prof. Michael Chen', type: 'Sick Leave', from: 'May 15, 2025', to: 'May 18, 2025', reason: 'Medical appointment' },
                        { faculty: 'Dr. Emily Rodriguez', type: 'Conference', from: 'May 20, 2025', to: 'May 25, 2025', reason: 'International conference presentation' },
                        { faculty: 'Prof. David Kim', type: 'Personal', from: 'Jun 02, 2025', to: 'Jun 03, 2025', reason: 'Family event' },
                      ].map((leave, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 text-xs sm:text-sm">{leave.faculty}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">
                            <Badge variant="secondary" className="text-xs">{leave.type}</Badge>
                          </td>
                          <td className="py-3 text-xs sm:text-sm text-center">{leave.from}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{leave.to}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">
                            <div className="max-w-[120px] truncate" title={leave.reason}>{leave.reason}</div>
                          </td>
                          <td className="py-3 text-xs sm:text-sm text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="outline" size="sm" className="text-xs px-2">Approve</Button>
                              <Button variant="ghost" size="sm" className="text-xs px-2">Reject</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        {/* Announcements & Communication */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Department Announcements</CardTitle>
              <CardDescription className="text-sm">
                Create and manage department-wide announcements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full text-xs sm:text-sm">Create New Announcement</Button>
                {[
                  { title: 'End of Semester Exam Schedule', date: 'May 6, 2025', type: 'Academic' },
                  { title: 'Faculty Development Program', date: 'May 15, 2025', type: 'Event' },
                  { title: 'Department Accreditation Visit', date: 'May 25, 2025', type: 'Important' },
                ].map((announcement, i) => (
                  <div key={i} className="border-l-2 border-primary pl-3">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-medium truncate flex-1">{announcement.title}</h4>
                      <Button variant="ghost" size="sm" className="text-xs flex-shrink-0">Edit</Button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{announcement.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {announcement.type}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-xs h-8">
                  View All Announcements
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Proctor Assignment</CardTitle>
              <CardDescription className="text-sm">
                Assign faculty members as student proctors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <h3 className="text-sm font-medium">Recent Assignments</h3>
                  <Button size="sm" className="text-xs w-fit">New Assignment</Button>
                </div>
                <ScrollArea className="w-full">
                  <div className="min-w-[300px]">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-medium text-xs sm:text-sm">Faculty</th>
                          <th className="text-center py-2 font-medium text-xs sm:text-sm">Section</th>
                          <th className="text-center py-2 font-medium text-xs sm:text-sm">Students</th>
                          <th className="text-right py-2 font-medium text-xs sm:text-sm">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { faculty: 'Dr. Sarah Johnson', section: 'CS-A', students: 15 },
                          { faculty: 'Prof. Michael Chen', section: 'CS-B', students: 18 },
                          { faculty: 'Dr. Emily Rodriguez', section: 'CS-C', students: 16 },
                        ].map((proctor, i) => (
                          <tr key={i} className="border-b hover:bg-gray-50">
                            <td className="py-3 text-xs sm:text-sm">{proctor.faculty}</td>
                            <td className="py-3 text-xs sm:text-sm text-center">{proctor.section}</td>
                            <td className="py-3 text-xs sm:text-sm text-center">{proctor.students}</td>
                            <td className="py-3 text-xs sm:text-sm text-right">
                              <Button variant="ghost" size="sm" className="text-xs">Manage</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ScrollArea>
                <Button variant="ghost" className="w-full text-xs h-8">
                  View All Assignments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Enrollment */}
        <Card className="w-full">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle className="text-base sm:text-lg">Student Enrollment</CardTitle>
              <CardDescription className="text-sm">Manage student enrollment in the department</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="sm" className="text-xs">Manual Enrollment</Button>
              <Button variant="outline" size="sm" className="text-xs">Bulk Upload</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Recent Enrollments</h3>
              <ScrollArea className="w-full">
                <div className="min-w-[700px]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-xs sm:text-sm">Student ID</th>
                        <th className="text-left py-2 font-medium text-xs sm:text-sm">Name</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Year</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Section</th>
                        <th className="text-center py-2 font-medium text-xs sm:text-sm">Status</th>
                        <th className="text-right py-2 font-medium text-xs sm:text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: 'CS2023001', name: 'Alex Johnson', year: '2nd Year', section: 'CS-A', status: 'Active' },
                        { id: 'CS2023002', name: 'Sara Chen', year: '2nd Year', section: 'CS-B', status: 'Active' },
                        { id: 'CS2023003', name: 'Mike Rodriguez', year: '3rd Year', section: 'CS-C', status: 'Pending' },
                        { id: 'CS2023004', name: 'Jane Smith', year: '3rd Year', section: 'CS-D', status: 'Active' },
                      ].map((student, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="py-3 text-xs sm:text-sm">{student.id}</td>
                          <td className="py-3 text-xs sm:text-sm">{student.name}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{student.year}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">{student.section}</td>
                          <td className="py-3 text-xs sm:text-sm text-center">
                            <Badge variant={student.status === 'Active' ? 'secondary' : 'outline'} className="text-xs">{student.status}</Badge>
                          </td>
                          <td className="py-3 text-xs sm:text-sm text-right">
                            <Button variant="ghost" size="sm" className="text-xs">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
              <div className="flex justify-center">
                <Button variant="ghost" size="sm" className="text-xs">View All Students</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
