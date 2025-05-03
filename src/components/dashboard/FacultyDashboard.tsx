
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

export const FacultyDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Faculty Dashboard</h1>
        <div className="mt-2 md:mt-0 flex items-center">
          <span className="text-sm text-gray-500">Computer Science Department</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">Spring Semester</span>
        </div>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>
            Your classes and appointments for today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {[
              { time: '09:00 - 10:30', course: 'CS101: Introduction to Programming', location: 'Room 301', type: 'lecture' },
              { time: '11:00 - 12:30', course: 'CS202: Data Structures', location: 'Lab 204', type: 'lab' },
              { time: '14:00 - 15:00', course: 'Office Hours', location: 'Faculty Office 12', type: 'office' },
              { time: '15:30 - 17:00', course: 'CS305: Algorithms', location: 'Room 405', type: 'lecture' },
            ].map((schedule, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-md hover:bg-gray-50">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-3 h-10 rounded-full mr-3 ${
                    schedule.type === 'lecture' ? 'bg-blue-500' : 
                    schedule.type === 'lab' ? 'bg-green-500' : 'bg-amber-500'
                  }`} />
                  <div>
                    <p className="font-medium text-sm">{schedule.course}</p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                      <span className="text-xs text-gray-500">{schedule.time}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{schedule.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs">
                    View Details
                  </Button>
                  <Button variant="secondary" size="sm" className="h-7 text-xs">
                    Take Attendance
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Course Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
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
            <div className="text-2xl font-bold">93.5%</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+2.1% from last semester</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedback Score</CardTitle>
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

      {/* Attendance and Tasks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <CardDescription>
              Weekly attendance rates by course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">Attendance Chart</p>
                <p className="text-xs text-gray-400 mt-1">Data visualization will appear here</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex w-full justify-between">
              <span className="text-sm text-gray-500">Last updated: Today, 8:30 AM</span>
              <Button variant="outline" size="sm">Take Attendance</Button>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row justify-between items-start">
            <div>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>
                Upcoming deadlines and assignments
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">Add Task</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Upload Internal Marks', deadline: 'Due Tomorrow', course: 'CS101' },
                { title: 'Review Assignment Submissions', deadline: 'Due in 3 days', course: 'CS305' },
                { title: 'Prepare Exam Questions', deadline: 'Due in 7 days', course: 'CS202' },
                { title: 'Submit Research Progress Report', deadline: 'Due in 10 days', course: 'Departmental' },
              ].map((task, i) => (
                <div key={i} className="flex items-start p-2 rounded-md hover:bg-gray-50">
                  <input type="checkbox" className="rounded mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium">{task.title}</p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                      <span className="text-xs text-red-500">{task.deadline}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                        {task.course}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Materials & Internal Marks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Course Materials</CardTitle>
            <CardDescription>
              Recently uploaded study materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Week 12 Lecture Notes', course: 'CS101', type: 'PDF', size: '2.4 MB', date: 'May 2, 2025' },
                { title: 'Data Structures Practice Problems', course: 'CS202', type: 'PDF', size: '1.8 MB', date: 'May 1, 2025' },
                { title: 'Final Project Guidelines', course: 'CS305', type: 'DOC', size: '1.2 MB', date: 'Apr 28, 2025' },
                { title: 'Algorithm Complexity Examples', course: 'CS305', type: 'PDF', size: '3.1 MB', date: 'Apr 25, 2025' },
              ].map((material, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{material.title}</p>
                      <div className="flex items-center gap-x-2 mt-0.5">
                        <span className="text-xs text-gray-500">{material.course}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{material.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-secondary px-1.5 py-0.5 rounded-full">{material.type}</span>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button className="w-full">Upload New Material</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Internal Marks Overview</CardTitle>
            <CardDescription>
              Student performance in internal assessments
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
              <div className="p-3 border rounded-md">
                <p className="text-sm font-medium">CS101: Intro to Programming</p>
                <p className="text-xl font-bold mt-1">78.3%</p>
                <p className="text-xs text-gray-500 mt-0.5">Class average</p>
              </div>
              <div className="p-3 border rounded-md">
                <p className="text-sm font-medium">CS202: Data Structures</p>
                <p className="text-xl font-bold mt-1">82.7%</p>
                <p className="text-xs text-gray-500 mt-0.5">Class average</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full">Manage Internal Marks</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
