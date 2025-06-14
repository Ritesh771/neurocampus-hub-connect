import { BarChart3, TrendingUp, Award, BookOpen } from "lucide-react";

const marksData = [
  {
    subject: "Mathematics",
    test1: 85,
    test2: 78,
    assignment: 92,
    attendance: 90,
    total: 345,
    maxTotal: 400,
    grade: "A",
    gpa: 8.6,
    color: "bg-blue-500"
  },
  {
    subject: "Physics",
    test1: 82,
    test2: 88,
    assignment: 85,
    attendance: 80,
    total: 335,
    maxTotal: 400,
    grade: "A",
    gpa: 8.4,
    color: "bg-green-500"
  },
  {
    subject: "Chemistry",
    test1: 75,
    test2: 82,
    assignment: 78,
    attendance: 70,
    total: 305,
    maxTotal: 400,
    grade: "B+",
    gpa: 7.6,
    color: "bg-purple-500"
  },
  {
    subject: "Computer Science",
    test1: 95,
    test2: 92,
    assignment: 98,
    attendance: 95,
    total: 380,
    maxTotal: 400,
    grade: "A+",
    gpa: 9.5,
    color: "bg-orange-500"
  },
  {
    subject: "English",
    test1: 70,
    test2: 75,
    assignment: 80,
    attendance: 60,
    total: 285,
    maxTotal: 400,
    grade: "B",
    gpa: 7.1,
    color: "bg-pink-500"
  }
];

export const InternalMarks = () => {
  const overallGPA = (marksData.reduce((sum, subject) => sum + subject.gpa, 0) / marksData.length).toFixed(2);
  const totalMarks = marksData.reduce((sum, subject) => sum + subject.total, 0);
  const maxMarks = marksData.reduce((sum, subject) => sum + subject.maxTotal, 0);
  const overallPercentage = ((totalMarks / maxMarks) * 100).toFixed(1);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+": return "text-green-400 bg-green-500/20 border-green-500/30";
      case "A": return "text-blue-400 bg-blue-500/20 border-blue-500/30";
      case "B+": return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "B": return "text-orange-400 bg-orange-500/20 border-orange-500/30";
      default: return "text-red-400 bg-red-500/20 border-red-500/30";
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Internal Marks</h1>
        <p className="text-gray-400">Track your academic performance</p>
      </div>

      {/* Overall Performance */}
      <div className="glass-card p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-indigo-400">{overallGPA}</div>
            <div className="text-sm text-gray-400">Overall GPA</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">{overallPercentage}%</div>
            <div className="text-sm text-gray-400">Percentage</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">{totalMarks}</div>
            <div className="text-sm text-gray-400">Total Marks</div>
          </div>
        </div>
      </div>

      {/* Subject-wise Marks */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2">Subject Performance</h3>
        
        {marksData.map((subject, index) => (
          <div 
            key={subject.subject}
            className="glass-card p-5 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">{subject.subject}</h4>
              <div className="flex items-center space-x-2">
                <div className={`px-3 py-1 rounded-full text-sm border ${getGradeColor(subject.grade)}`}>
                  {subject.grade}
                </div>
                <div className="text-indigo-400 font-semibold">GPA: {subject.gpa}</div>
              </div>
            </div>

            {/* Marks Breakdown */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Test 1:</span>
                  <span className="text-white font-medium">{subject.test1}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Test 2:</span>
                  <span className="text-white font-medium">{subject.test2}/100</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Assignment:</span>
                  <span className="text-white font-medium">{subject.assignment}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Attendance:</span>
                  <span className="text-white font-medium">{subject.attendance}/100</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Total: {subject.total}/{subject.maxTotal}</span>
                <span>{((subject.total / subject.maxTotal) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${subject.color} transition-all duration-500`}
                  style={{ width: `${(subject.total / subject.maxTotal) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Individual Component Bars */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "T1", value: subject.test1, max: 100 },
                { label: "T2", value: subject.test2, max: 100 },
                { label: "Asn", value: subject.assignment, max: 100 },
                { label: "Att", value: subject.attendance, max: 100 }
              ].map((component, idx) => (
                <div key={component.label} className="text-center">
                  <div className="text-xs text-gray-400 mb-1">{component.label}</div>
                  <div className="w-full bg-gray-700 rounded-full h-1 mb-1">
                    <div 
                      className={`h-1 rounded-full ${subject.color} transition-all duration-500`}
                      style={{ 
                        width: `${(component.value / component.max) * 100}%`,
                        animationDelay: `${idx * 0.1}s`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-white font-medium">{component.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-4 text-center">
          <Award size={24} className="text-yellow-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">
            {marksData.filter(s => s.grade.includes('A')).length}
          </div>
          <div className="text-sm text-gray-400">A Grades</div>
        </div>
        
        <div className="glass-card p-4 text-center">
          <TrendingUp size={24} className="text-green-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">
            {marksData.filter(s => s.gpa >= 8.0).length}
          </div>
          <div className="text-sm text-gray-400">High Performance</div>
        </div>
      </div>

      {/* GPA Chart */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <BarChart3 size={20} className="mr-2 text-indigo-400" />
          GPA Comparison
        </h3>
        
        <div className="space-y-3">
          {marksData.map((subject, index) => (
            <div key={subject.subject} className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 w-20 truncate">{subject.subject}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${subject.color} transition-all duration-500`}
                  style={{ 
                    width: `${(subject.gpa / 10) * 100}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
              <span className="text-sm text-white w-8">{subject.gpa}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 