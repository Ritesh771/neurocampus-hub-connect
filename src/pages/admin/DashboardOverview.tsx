import React from 'react';
import { Users, GraduationCap, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';

const statsData = [
  {
    title: 'Total Students',
    value: '1,790',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Total Faculty',
    value: '130',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Total HODs',
    value: '5',
    icon: Crown,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400'
  }
];

const branchData = [
  { branch: 'Computer Science', students: 456, faculty: 35 },
  { branch: 'Electrical Engineering', students: 389, faculty: 28 },
  { branch: 'Mechanical Engineering', students: 412, faculty: 31 },
  { branch: 'Civil Engineering', students: 298, faculty: 22 },
  { branch: 'Information Technology', students: 235, faculty: 14 }
];

export function DashboardOverview() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="px-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Dashboard Statistics</h1>
        <p className="text-sm md:text-base text-gray-400">Overview of your institution's key metrics</p>
      </div>

      {/* Stats Cards - Vertical on mobile, horizontal on larger screens */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 px-2">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card
              key={stat.title}
              className="glass-card p-4 md:p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in flex-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs md:text-sm font-medium mb-1">{stat.title}</p>
                  <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 md:p-4 rounded-2xl ${stat.bgColor}`}>
                  <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor}`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Branch Statistics */}
      <Card className="glass-card p-4 md:p-6 mx-2">
        <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Branch Statistics</h2>
        
        <div className="overflow-x-auto">
          <div className="min-w-full space-y-3">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-3 md:p-4 bg-white/5 rounded-xl text-xs md:text-sm font-semibold text-gray-300 min-w-[300px]">
              <span>Branch</span>
              <span className="text-center">Students</span>
              <span className="text-center">Faculty</span>
            </div>
            
            {/* Data Rows */}
            {branchData.map((branch, index) => (
              <div
                key={branch.branch}
                className="grid grid-cols-3 gap-4 p-3 md:p-4 glass hover:bg-white/10 rounded-xl transition-all duration-200 animate-fade-in min-w-[300px]"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <span className="text-white font-medium text-xs md:text-sm truncate">{branch.branch}</span>
                <span className="text-center text-blue-400 font-semibold text-xs md:text-sm">{branch.students}</span>
                <span className="text-center text-purple-400 font-semibold text-xs md:text-sm">{branch.faculty}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
} 