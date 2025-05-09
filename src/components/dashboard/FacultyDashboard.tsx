
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { AttendanceChart } from '../charts/AttendanceChart';
import { GradeDistributionChart } from '../charts/GradeDistributionChart';
import { SkillRadarChart } from '../charts/SkillRadarChart';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

// Mock data for charts
const attendanceData = [
  { name: 'OS', present: 88, absent: 12 },
  { name: 'AI', present: 85, absent: 15 },
  { name: 'DB', present: 92, absent: 8 },
  { name: 'Web', present: 90, absent: 10 },
];

const gradeDistributionData = [
  { grade: 'A+', count: 15, color: '#4ade80' },
  { grade: 'A', count: 22, color: '#86efac' },
  { grade: 'B+', count: 18, color: '#fde047' },
  { grade: 'B', count: 12, color: '#fdba74' },
  { grade: 'C+', count: 8, color: '#fb923c' },
  { grade: 'C', count: 5, color: '#f87171' },
  { grade: 'D', count: 2, color: '#ef4444' },
  { grade: 'F', count: 1, color: '#b91c1c' },
];

const teachingSkills = [
  { subject: 'Content Delivery', student: 92, average: 85, fullMark: 100 },
  { subject: 'Clarity', student: 88, average: 82, fullMark: 100 },
  { subject: 'Responsiveness', student: 95, average: 80, fullMark: 100 },
  { subject: 'Accessibility', student: 85, average: 75, fullMark: 100 },
  { subject: 'Materials', student: 90, average: 78, fullMark: 100 },
  { subject: 'Engagement', student: 87, average: 76, fullMark: 100 },
];

export const FacultyDashboard: React.FC = () => {
  const { user } = useAuth();
  
  const assignmentStatus = [
    { title: 'OS Lab 4: Process Scheduling', submissions: 35, total: 40, dueDate: 'May 7' },
    { title: 'AI Assignment: Neural Networks', submissions: 28, total: 32, dueDate: 'May 10' },
    { title: 'Database: Normalization Exercise', submissions: 42, total: 45, dueDate: 'May 12' },
  ];

  const upcomingClasses = [
    { course: 'CS301: Operating Systems', time: '10:00 AM', room: 'Room 301', studentsCount: 40 },
    { course: 'CS401: Artificial Intelligence', time: '01:30 PM', room: 'Room 401', studentsCount: 32 },
    { course: 'CS501: Advanced Databases', time: '03:00 PM', room: 'Lab 202', studentsCount: 28 },
  ];

  const menteeStudents = [
    { name: 'Alex Johnson', id: 'ST2023001', program: 'B.Tech CSE', avatar: '/placeholder.svg' },
    { name: 'Maya Patel', id: 'ST2023015', program: 'B.Tech CSE', avatar: '/placeholder.svg' },
    { name: 'Ryan Chen', id: 'ST2023042', program: 'B.Tech CSE', avatar: '/placeholder.svg' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Faculty Dashboard</h1>
        <div className="mt-2 md:mt-0 flex items-center">
          <span className="text-sm text-gray-500">Computer Science Department</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">Spring Semester 2025</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-gray-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>12 Total Credit Hours</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>3 Mentees Assigned</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.5%</div>
            <p className="text-xs text-amber-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>-1.2% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-red-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Due in 2 days</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <AttendanceChart
          title="Course Attendance Statistics"
          description="Attendance breakdown by course"
          data={attendanceData}
        />

        <GradeDistributionChart
          title="Grade Distribution"
          description="Current semester grade distribution"
          data={gradeDistributionData}
        />

        <SkillRadarChart
          title="Teaching Evaluation"
          description="Student feedback on teaching performance"
          data={teachingSkills}
        />

        <Card>
          <CardHeader>
            <CardTitle>Assignment Status</CardTitle>
            <CardDescription>
              Submission status for recent assignments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {assignmentStatus.map((assignment, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{assignment.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">Due: {assignment.dueDate}</p>
                    </div>
                    <Badge variant="outline">
                      {assignment.submissions}/{assignment.total} Submissions
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">Submission Rate</span>
                      <span className="text-xs font-medium">{Math.round((assignment.submissions / assignment.total) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full bg-primary" 
                        style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Classes & Mentees */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>
              Your teaching schedule for May 9, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((classInfo, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{classInfo.course}</h4>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{classInfo.time}</span>
                        <span className="mx-2">•</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>{classInfo.room}</span>
                      </div>
                    </div>
                    <Badge>{classInfo.studentsCount} Students</Badge>
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-3">
                    <Button variant="outline" size="sm">Materials</Button>
                    <Button size="sm">Take Attendance</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">View Full Schedule</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Assigned Mentees</CardTitle>
            <CardDescription>
              Students under your mentorship
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {menteeStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <h4 className="font-medium">{student.name}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">{student.id}</span>
                        <span className="mx-1">•</span>
                        <span className="text-xs text-gray-500">{student.program}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Schedule Meeting</Button>
                  </div>
                </div>
              ))}
              <div className="mt-4 border border-dashed rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">You can request additional mentee assignments</p>
                <Button variant="ghost" size="sm" className="mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Request More Mentees
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">View All Students</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
