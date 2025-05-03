
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export const FacultyDashboard: React.FC = () => {
  const { user } = useAuth();

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

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Teaching</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-blue-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              <span>Same as last semester</span>
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
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+12 from last semester</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+2.4% from last semester</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Student Rating</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+0.2 from last semester</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>
            Your classes and activities for May 3, 2025
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-7 border-l border-gray-200"></div>
              <div className="space-y-6">
                {[
                  { time: '09:00 - 10:30', course: 'CS301: Operating Systems', location: 'Room 301', status: 'completed' },
                  { time: '11:00 - 12:30', course: 'CS302: Computer Networks', location: 'Room 405', status: 'current' },
                  { time: '13:30 - 15:00', course: 'Faculty Meeting', location: 'Conference Room A', status: 'upcoming' },
                  { time: '15:30 - 17:00', course: 'CS303: Web Development', location: 'Lab 202', status: 'upcoming' },
                ].map((schedule, i) => (
                  <div key={i} className="flex group">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-14">
                        <span className="text-sm font-medium">{schedule.time.split(' - ')[0]}</span>
                      </div>
                      <div className="h-full">
                        <div className={`w-3 h-3 rounded-full mx-auto my-2 ${
                          schedule.status === 'completed' ? 'bg-green-500' : 
                          schedule.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'
                        } group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-offset-white ${
                          schedule.status === 'completed' ? 'group-hover:ring-green-500' : 
                          schedule.status === 'current' ? 'group-hover:ring-blue-500' : 'group-hover:ring-gray-300'
                        } transition-all duration-200`}></div>
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className={`p-4 rounded-lg border hover:shadow-md transition-shadow ${
                        schedule.status === 'current' ? 'bg-blue-50 border-blue-100' : 'bg-white'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <div>
                            <h3 className="font-medium">{schedule.course}</h3>
                            <p className="text-sm text-gray-500">{schedule.location}</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            {schedule.status === 'completed' ? (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full uppercase">
                                Completed
                              </span>
                            ) : schedule.status === 'current' ? (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full uppercase">
                                Current
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full uppercase">
                                Upcoming
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

      {/* Student Performance & Assignments */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Student Performance</CardTitle>
            <CardDescription>
              Average performance metrics across your courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">Performance Chart</p>
                <p className="text-xs text-gray-400 mt-1">Data visualization will appear here</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { label: 'Average Grade', value: 'B+', change: '+0.2', positive: true },
                { label: 'Pass Rate', value: '94%', change: '+2%', positive: true },
                { label: 'Assignment Completion', value: '87%', change: '+5%', positive: true },
                { label: 'Class Participation', value: '76%', change: '-3%', positive: false },
              ].map((stat, i) => (
                <div key={i} className="p-3 border rounded-md">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <div className="flex items-end justify-between mt-1">
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className={`text-xs ${stat.positive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          stat.positive ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"
                        } />
                      </svg>
                      <span>{stat.change}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>
              Assignments that need to be graded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { course: 'CS301: Operating Systems', title: 'Process Scheduling Implementation', due: '42 submissions', dueDate: 'Due today' },
                { course: 'CS302: Computer Networks', title: 'Network Protocols Analysis', due: '38 submissions', dueDate: 'Due in 2 days' },
                { course: 'CS303: Web Development', title: 'Responsive Web Application Project', due: '29 submissions', dueDate: 'Due in 5 days' },
                { course: 'CS304: Artificial Intelligence', title: 'Neural Network Implementation', due: '0 submissions', dueDate: 'Assigned today' },
              ].map((assignment, i) => (
                <div key={i} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <span className="px-1.5 py-0.5 text-xs rounded-sm bg-secondary text-secondary-foreground">
                        {assignment.course.split(':')[0]}
                      </span>
                      <h3 className="font-medium mt-1">{assignment.title}</h3>
                      <div className="flex items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-gray-500">{assignment.dueDate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">{assignment.due}</span>
                      <Button variant="outline" size="sm" className="mt-2">
                        Grade
                      </Button>
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

      {/* Course Materials & Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Course Materials</CardTitle>
            <CardDescription>
              Recently uploaded materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Operating Systems - Process Management', course: 'CS301', type: 'PDF', date: 'May 2, 2025' },
                { title: 'Computer Networks - TCP/IP Model', course: 'CS302', type: 'PPTX', date: 'May 1, 2025' },
                { title: 'Web Development - Responsive Design', course: 'CS303', type: 'ZIP', date: 'Apr 28, 2025' },
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
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button variant="outline">Browse All Materials</Button>
            <Button>Upload New Material</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used tools and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Mark Attendance', icon: 'clipboard-check', color: 'blue' },
                { title: 'Grade Assignments', icon: 'check-square', color: 'green' },
                { title: 'Upload Materials', icon: 'upload', color: 'purple' },
                { title: 'Schedule Tests', icon: 'calendar', color: 'amber' },
                { title: 'Student Reports', icon: 'users', color: 'red' },
                { title: 'Department Chat', icon: 'message-square', color: 'teal' },
              ].map((action, i) => (
                <Button key={i} variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <div className={`w-8 h-8 rounded-full bg-${action.color}-100 text-${action.color}-600 flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {action.icon === 'clipboard-check' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      )}
                      {action.icon === 'check-square' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      )}
                      {action.icon === 'upload' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                      )}
                      {action.icon === 'calendar' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      )}
                      {action.icon === 'users' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      )}
                      {action.icon === 'message-square' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      )}
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-center">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
