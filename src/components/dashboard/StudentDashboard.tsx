
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
        <div className="mt-2 md:mt-0 flex items-center">
          <span className="text-sm text-gray-500">Computer Science & Engineering</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">Spring Semester 2025</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.3%</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Above minimum requirement</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9.0</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+0.3 from last semester</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coding Rank</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3rd</div>
            <p className="text-xs text-amber-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span>Down from 2nd place</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Tests</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-red-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Next test in 2 days</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>
            Your classes and activities for today, May 3, 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-7 border-l border-gray-200"></div>
              <div className="space-y-6">
                {[
                  { time: '09:00 - 10:30', course: 'CS301: Operating Systems', location: 'Room 301', type: 'lecture' },
                  { time: '11:00 - 12:30', course: 'CS302: Computer Networks', location: 'Room 405', type: 'lecture' },
                  { time: '13:30 - 15:00', course: 'CS304: Artificial Intelligence Lab', location: 'Lab 204', type: 'lab' },
                  { time: '15:30 - 17:00', course: 'CS303: Web Development', location: 'Lab 202', type: 'lab' },
                ].map((schedule, i) => (
                  <div key={i} className="flex group">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-14">
                        <span className="text-sm font-medium">{schedule.time.split(' - ')[0]}</span>
                      </div>
                      <div className="h-full">
                        <div className={`w-3 h-3 rounded-full mx-auto my-2 ${
                          schedule.type === 'lecture' ? 'bg-blue-500' : 
                          schedule.type === 'lab' ? 'bg-green-500' : 'bg-amber-500'
                        } group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-offset-white ${
                          schedule.type === 'lecture' ? 'group-hover:ring-blue-500' : 
                          schedule.type === 'lab' ? 'group-hover:ring-green-500' : 'group-hover:ring-amber-500'
                        } transition-all duration-200`}></div>
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className={`p-4 rounded-lg border hover:shadow-md transition-shadow ${
                        i === 0 ? 'bg-blue-50 border-blue-100' : 'bg-white'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <div>
                            <h3 className="font-medium">{schedule.course}</h3>
                            <p className="text-sm text-gray-500">{schedule.location}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full uppercase ${
                              schedule.type === 'lecture' ? 'bg-blue-100 text-blue-700' : 
                              schedule.type === 'lab' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              {schedule.type}
                            </span>
                            {i === 0 && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full uppercase">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Updates & Assignments */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Course Updates</CardTitle>
            <CardDescription>
              Recent announcements from your courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { course: 'CS302: Computer Networks', time: '2 hours ago', message: 'Assignment 4 has been posted, due May 10th.' },
                { course: 'CS304: Artificial Intelligence', time: '5 hours ago', message: 'Class will be held online tomorrow due to faculty meeting.' },
                { course: 'CS301: Operating Systems', time: 'Yesterday', message: 'Mid-term exam syllabus has been updated. Check materials page.' },
                { course: 'CS303: Web Development', time: '2 days ago', message: 'Project groups have been finalized and posted on the portal.' },
              ].map((update, i) => (
                <div key={i} className="flex items-start p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="rounded-full p-2 bg-primary/10 text-primary mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-medium text-sm">{update.course}</h3>
                      <span className="text-xs text-gray-500">{update.time}</span>
                    </div>
                    <p className="text-sm mt-1">{update.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">View All Announcements</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle>Pending Assignments</CardTitle>
              <CardDescription>
                Your upcoming deadlines
              </CardDescription>
            </div>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              5 Due Soon
            </span>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { course: 'CS301', title: 'Process Scheduling Implementation', dueDate: 'Today, 11:59 PM', progress: 80 },
                { course: 'CS302', title: 'Network Protocols Analysis', dueDate: 'May 5, 11:59 PM', progress: 45 },
                { course: 'CS304', title: 'Neural Network Implementation', dueDate: 'May 7, 11:59 PM', progress: 20 },
                { course: 'CS303', title: 'Responsive Web Application Project', dueDate: 'May 10, 11:59 PM', progress: 0 },
              ].map((assignment, i) => (
                <div key={i} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <span className="px-1.5 py-0.5 text-xs rounded-sm bg-secondary text-secondary-foreground mr-2">
                          {assignment.course}
                        </span>
                        <h3 className="font-medium text-sm">{assignment.title}</h3>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className={`text-xs ${
                          assignment.dueDate.includes('Today') ? 'text-red-500 font-medium' : 'text-gray-500'
                        }`}>{assignment.dueDate}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      View
                    </Button>
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium">{assignment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          assignment.progress >= 80 ? 'bg-green-500' :
                          assignment.progress >= 40 ? 'bg-amber-500' : 'bg-red-500'
                        }`} 
                        style={{ width: `${assignment.progress}%` }}>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">View All Assignments</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Materials & Performance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Study Materials</CardTitle>
            <CardDescription>
              Latest uploads from your courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Operating Systems - Process Management', course: 'CS301', type: 'PDF', size: '2.8 MB', date: 'May 2, 2025' },
                { title: 'Computer Networks - TCP/IP Model', course: 'CS302', type: 'PPTX', size: '4.2 MB', date: 'May 1, 2025' },
                { title: 'Artificial Intelligence - Neural Networks', course: 'CS304', type: 'PDF', size: '3.5 MB', date: 'Apr 29, 2025' },
                { title: 'Web Development - Responsive Design', course: 'CS303', type: 'ZIP', size: '8.1 MB', date: 'Apr 28, 2025' },
              ].map((material, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{material.title}</p>
                      <div className="flex items-center gap-x-2 mt-0.5">
                        <span className="text-xs px-1.5 py-0.5 bg-secondary rounded-sm">{material.course}</span>
                        <span className="text-xs text-gray-500">{material.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 p-0 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">Browse All Materials</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Your academic performance in current semester
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200 mb-4">
              <div className="text-center">
                <p className="text-sm text-gray-500">Performance chart</p>
                <p className="text-xs text-gray-400 mt-1">Score visualization by course</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { course: 'CS301', name: 'Operating Systems', grade: 'A-', completion: 68 },
                { course: 'CS302', name: 'Computer Networks', grade: 'B+', completion: 65 },
                { course: 'CS303', name: 'Web Development', grade: 'A', completion: 72 },
                { course: 'CS304', name: 'Artificial Intelligence', grade: 'A+', completion: 75 },
              ].map((course, i) => (
                <div key={i} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-sm">{course.course}</h4>
                      <p className="text-xs text-gray-500">{course.name}</p>
                    </div>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      course.grade === 'A+' ? 'bg-green-100 text-green-700' :
                      course.grade === 'A' ? 'bg-green-50 text-green-600' :
                      course.grade === 'A-' ? 'bg-blue-100 text-blue-700' :
                      course.grade === 'B+' ? 'bg-blue-50 text-blue-600' : 'bg-yellow-50 text-yellow-600'
                    }`}>
                      {course.grade}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Course Completion</span>
                      <span className="text-xs font-medium">{course.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="h-1.5 rounded-full bg-primary" 
                        style={{ width: `${course.completion}%` }}>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">View Detailed Report</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
