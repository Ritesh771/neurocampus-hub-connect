
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

export const StudentDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
        <div className="mt-2 md:mt-0 flex items-center">
          <span className="text-sm text-gray-500">Computer Science Department</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">Semester 4</span>
        </div>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>
            Your classes and activities for today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {[
              { time: '09:00 - 10:30', course: 'CS201: Database Systems', location: 'Room 301', instructor: 'Dr. Sarah Johnson' },
              { time: '11:00 - 12:30', course: 'CS202: Data Structures', location: 'Lab 204', instructor: 'Prof. Michael Chen' },
              { time: '14:00 - 15:30', course: 'CS305: Algorithms', location: 'Room 405', instructor: 'Dr. Emily Rodriguez' },
              { time: '16:00 - 17:30', course: 'CS341: AI and Machine Learning', location: 'Lab 105', instructor: 'Prof. David Kim' },
            ].map((schedule, i) => (
              <div key={i} className="flex items-center p-3 border rounded-md hover:bg-gray-50">
                <div className="w-1 h-14 bg-primary rounded-full mr-3" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-medium">{schedule.course}</p>
                    <p className="text-sm text-gray-500">{schedule.time}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-1 gap-y-1 gap-x-3">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {schedule.location}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {schedule.instructor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8/4.0</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+0.2 from last semester</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.2%</div>
            <p className="text-xs text-amber-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>-1.3% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LeetCode Rank</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#23</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Up 5 positions in college</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-red-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>2 due tomorrow</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance & Attendance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
            <CardDescription>
              Your internal marks by subject
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">Performance Chart</p>
                <p className="text-xs text-gray-400 mt-1">Data visualization will appear here</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              {[
                { course: 'CS201: Database Systems', marks: '87/100', grade: 'A' },
                { course: 'CS202: Data Structures', marks: '92/100', grade: 'A+' },
                { course: 'CS305: Algorithms', marks: '78/100', grade: 'B+' },
                { course: 'CS341: AI and Machine Learning', marks: '84/100', grade: 'A-' },
              ].map((subject, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="text-sm font-medium">{subject.course}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{subject.marks}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      subject.grade.startsWith('A') ? 'bg-green-100 text-green-700' :
                      subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-700' :
                      subject.grade.startsWith('C') ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {subject.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Attendance Trends</CardTitle>
            <CardDescription>
              Your monthly attendance statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">Attendance Trend Chart</p>
                <p className="text-xs text-gray-400 mt-1">Data visualization will appear here</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border rounded-md p-3">
                <div className="text-sm font-medium text-gray-500">Current Month</div>
                <div className="text-2xl font-bold mt-1">95.2%</div>
                <div className="text-xs text-green-500 mt-0.5">Good Standing</div>
              </div>
              <div className="border rounded-md p-3">
                <div className="text-sm font-medium text-gray-500">Overall</div>
                <div className="text-2xl font-bold mt-1">93.7%</div>
                <div className="text-xs text-green-500 mt-0.5">Good Standing</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments & Materials */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle>Pending Assignments</CardTitle>
              <CardDescription>
                Tasks and submissions due soon
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Database Design Project', course: 'CS201', deadline: 'Tomorrow, 11:59 PM', progress: 75 },
                { title: 'Algorithm Analysis Paper', course: 'CS305', deadline: 'May 7, 2025', progress: 40 },
                { title: 'Data Structures Lab Report', course: 'CS202', deadline: 'May 10, 2025', progress: 20 },
                { title: 'Machine Learning Model Training', course: 'CS341', deadline: 'May 15, 2025', progress: 10 },
              ].map((assignment, i) => (
                <div key={i} className="border rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{assignment.title}</h4>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-secondary">
                      {assignment.course}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-red-500">Due: {assignment.deadline}</span>
                      <span>{assignment.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full" 
                        style={{ width: `${assignment.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Materials</CardTitle>
            <CardDescription>
              Recently shared course content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Database Systems: Lecture 12', course: 'CS201', type: 'PDF', date: 'May 2, 2025' },
                { title: 'Algorithm Analysis: Practice Problems', course: 'CS305', type: 'DOC', date: 'May 1, 2025' },
                { title: 'Data Structures: Heap Implementation', course: 'CS202', type: 'PDF', date: 'Apr 28, 2025' },
                { title: 'Machine Learning: Neural Networks', course: 'CS341', type: 'PDF', date: 'Apr 25, 2025' },
              ].map((material, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {material.type === 'PDF' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{material.title}</p>
                      <div className="flex items-center gap-x-2 mt-0.5">
                        <span className="text-xs px-1.5 py-0.5 rounded-full bg-secondary">
                          {material.course}
                        </span>
                        <span className="text-xs text-gray-500">{material.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">
              Browse All Materials
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
