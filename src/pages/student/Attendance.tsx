import { TrendingUp, TrendingDown, Users, AlertTriangle } from "lucide-react";

const attendanceData = [
  { subject: "Mathematics", attended: 18, total: 20, percentage: 90, color: "bg-green-500", status: "good" },
  { subject: "Physics", attended: 16, total: 20, percentage: 80, color: "bg-blue-500", status: "good" },
  { subject: "Chemistry", attended: 14, total: 20, percentage: 70, color: "bg-yellow-500", status: "warning" },
  { subject: "Computer Science", attended: 19, total: 20, percentage: 95, color: "bg-purple-500", status: "good" },
  { subject: "English", attended: 12, total: 20, percentage: 60, color: "bg-red-500", status: "danger" },
  { subject: "History", attended: 17, total: 20, percentage: 85, color: "bg-indigo-500", status: "good" },
];

const monthlyTrend = [
  { month: "Jan", percentage: 85 },
  { month: "Feb", percentage: 78 },
  { month: "Mar", percentage: 82 },
  { month: "Apr", percentage: 88 },
  { month: "May", percentage: 75 },
];

export const Attendance = () => {
  const overallAttendance = Math.round(
    attendanceData.reduce((sum, subject) => sum + subject.percentage, 0) / attendanceData.length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "status-good";
      case "warning": return "status-warning";
      case "danger": return "status-danger";
      default: return "status-pending";
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Attendance</h1>
        <p className="text-gray-400">Track your class attendance</p>
      </div>

      {/* Overall Status */}
      <div className="glass-card p-6">
        <div className="text-center mb-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{overallAttendance}%</span>
          </div>
          <h3 className="text-xl font-bold text-white">Overall Attendance</h3>
          <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm mt-2 ${
            overallAttendance >= 85 ? "status-good" : overallAttendance >= 70 ? "status-warning" : "status-danger"
          }`}>
            {overallAttendance >= 85 ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}
            <span>{overallAttendance >= 85 ? "Good Standing" : overallAttendance >= 70 ? "At Risk" : "Critical"}</span>
          </div>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2">Subject-wise Breakdown</h3>
        
        {attendanceData.map((subject, index) => (
          <div 
            key={subject.subject} 
            className="glass-card p-5 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white">{subject.subject}</h4>
              <div className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(subject.status)}`}>
                {subject.percentage}%
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{subject.attended} / {subject.total} classes</span>
                <span>{subject.total - subject.attended} absent</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${subject.color} transition-all duration-500`}
                  style={{ width: `${subject.percentage}%` }}
                ></div>
              </div>
            </div>
            
            {subject.percentage < 75 && (
              <div className="flex items-center space-x-2 text-sm text-red-400">
                <AlertTriangle size={14} />
                <span>Below minimum requirement (75%)</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Monthly Trend */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4">Monthly Trend</h3>
        
        <div className="space-y-3">
          {monthlyTrend.map((month, index) => (
            <div key={month.month} className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 w-8">{month.month}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                  style={{ 
                    width: `${month.percentage}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
              <span className="text-sm text-white w-12">{month.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 text-center">
          <Users size={24} className="text-indigo-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">
            {attendanceData.reduce((sum, s) => sum + s.attended, 0)}
          </div>
          <div className="text-sm text-gray-400">Classes Attended</div>
        </div>
        
        <div className="glass-card p-4 text-center">
          <AlertTriangle size={24} className="text-red-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">
            {attendanceData.filter(s => s.percentage < 75).length}
          </div>
          <div className="text-sm text-gray-400">Subjects at Risk</div>
        </div>
      </div>
    </div>
  );
}; 