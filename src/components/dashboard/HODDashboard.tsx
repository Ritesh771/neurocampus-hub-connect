
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

export const HODDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Department Head Dashboard</h1>
        <div className="mt-2 md:mt-0 flex items-center">
          <span className="text-sm text-gray-500">Computer Science Department</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm text-gray-500">Spring Semester</span>
        </div>
      </div>

      {/* Department Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Department Students</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">476</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+4.6% from last semester</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+2 new hires</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
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
            <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.3%</div>
            <p className="text-xs text-amber-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>-0.8% from last semester</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Attendance and Performance */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Department Attendance Trends</CardTitle>
            <CardDescription>
              Monthly attendance statistics across all courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">Attendance Trend Chart</p>
                <p className="text-xs text-gray-400 mt-1">Data visualization will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
            <CardDescription>
              Average grades by course category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500">Performance Chart</p>
                <p className="text-xs text-gray-400 mt-1">Data visualization will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Performance & Actions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Faculty Performance Overview</CardTitle>
            <CardDescription>Review course completion and student evaluations</CardDescription>
          </div>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium text-sm">Faculty Name</th>
                  <th className="text-center py-2 font-medium text-sm">Courses</th>
                  <th className="text-center py-2 font-medium text-sm">Avg. Attendance</th>
                  <th className="text-center py-2 font-medium text-sm">Student Rating</th>
                  <th className="text-center py-2 font-medium text-sm">Content Complete</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Dr. Sarah Johnson', courses: 4, attendance: '95.2%', rating: '4.8/5', completion: '97%' },
                  { name: 'Prof. Michael Chen', courses: 3, attendance: '91.8%', rating: '4.6/5', completion: '93%' },
                  { name: 'Dr. Emily Rodriguez', courses: 5, attendance: '89.5%', rating: '4.7/5', completion: '100%' },
                  { name: 'Prof. David Kim', courses: 3, attendance: '94.3%', rating: '4.5/5', completion: '89%' },
                ].map((faculty, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-3 text-sm">{faculty.name}</td>
                    <td className="py-3 text-sm text-center">{faculty.courses}</td>
                    <td className="py-3 text-sm text-center">{faculty.attendance}</td>
                    <td className="py-3 text-sm text-center">{faculty.rating}</td>
                    <td className="py-3 text-sm text-center">{faculty.completion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Actions & Analytics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>LeetCode Rankings</CardTitle>
            <CardDescription>
              Top performing students in coding challenges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Alex Johnson', rank: '#1', problems: 347, rating: 'Expert' },
                { name: 'Sara Chen', rank: '#2', problems: 325, rating: 'Expert' },
                { name: 'Mike Rodriguez', rank: '#3', problems: 298, rating: 'Advanced' },
              ].map((student, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {student.rank}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.problems} problems</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent">
                    {student.rating}
                  </span>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-xs h-8 mt-2">
                View Complete Rankings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Action Items</CardTitle>
            <CardDescription>
              Tasks requiring your attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: 'Review Internal Mark Submissions', deadline: 'Due in 2 days', priority: 'high' },
                { title: 'Approve Course Materials', deadline: 'Due tomorrow', priority: 'medium' },
                { title: 'Faculty Evaluation Meeting', deadline: 'May 10, 2025', priority: 'medium' },
                { title: 'Department Budget Review', deadline: 'May 15, 2025', priority: 'high' },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <input type="checkbox" className="rounded mr-3 mt-1" />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{item.deadline}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        item.priority === 'high' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>
              Department-wide notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Faculty Meeting Rescheduled', date: 'May 6, 2025', type: 'event' },
                { title: 'New Research Grant Opportunities', date: 'May 4, 2025', type: 'announcement' },
                { title: 'End of Semester Guidelines', date: 'May 1, 2025', type: 'policy' },
              ].map((announcement, i) => (
                <div key={i} className="border-l-2 border-primary pl-3">
                  <h4 className="text-sm font-medium">{announcement.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{announcement.date}</span>
                    <span className="text-xs bg-secondary px-1.5 py-0.5 rounded-full">
                      {announcement.type}
                    </span>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-xs h-8 mt-2">
                Post New Announcement
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
