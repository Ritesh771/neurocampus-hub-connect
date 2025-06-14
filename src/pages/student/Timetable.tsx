import { useState } from "react";
import { Calendar, MapPin, User, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timetableData = {
  Monday: [
    { subject: "Mathematics", time: "09:00 - 10:30", room: "A101", faculty: "Dr. Smith", color: "bg-blue-500/20 border-blue-500/30" },
    { subject: "Physics", time: "11:00 - 12:30", room: "B205", faculty: "Prof. Johnson", color: "bg-green-500/20 border-green-500/30" },
    { subject: "Chemistry", time: "14:00 - 15:30", room: "C303", faculty: "Dr. Williams", color: "bg-purple-500/20 border-purple-500/30" },
  ],
  Tuesday: [
    { subject: "Computer Science", time: "09:00 - 10:30", room: "Lab 1", faculty: "Prof. Davis", color: "bg-orange-500/20 border-orange-500/30" },
    { subject: "English", time: "11:00 - 12:30", room: "A102", faculty: "Ms. Brown", color: "bg-pink-500/20 border-pink-500/30" },
    { subject: "Mathematics", time: "14:00 - 15:30", room: "A101", faculty: "Dr. Smith", color: "bg-blue-500/20 border-blue-500/30" },
  ],
  Wednesday: [
    { subject: "Physics Lab", time: "09:00 - 11:30", room: "Lab 2", faculty: "Prof. Johnson", color: "bg-green-500/20 border-green-500/30" },
    { subject: "History", time: "13:00 - 14:30", room: "D404", faculty: "Dr. Taylor", color: "bg-yellow-500/20 border-yellow-500/30" },
  ],
  Thursday: [
    { subject: "Chemistry Lab", time: "09:00 - 11:30", room: "Lab 3", faculty: "Dr. Williams", color: "bg-purple-500/20 border-purple-500/30" },
    { subject: "Computer Science", time: "14:00 - 15:30", room: "Lab 1", faculty: "Prof. Davis", color: "bg-orange-500/20 border-orange-500/30" },
  ],
  Friday: [
    { subject: "Mathematics", time: "09:00 - 10:30", room: "A101", faculty: "Dr. Smith", color: "bg-blue-500/20 border-blue-500/30" },
    { subject: "Physics", time: "11:00 - 12:30", room: "B205", faculty: "Prof. Johnson", color: "bg-green-500/20 border-green-500/30" },
  ],
  Saturday: [
    { subject: "Extra Classes", time: "09:00 - 11:00", room: "A101", faculty: "Various", color: "bg-indigo-500/20 border-indigo-500/30" },
  ],
};

export const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const currentDay = daysOfWeek[selectedDay];
  const todayClasses = timetableData[currentDay as keyof typeof timetableData] || [];

  const nextDay = () => {
    setSelectedDay((prev) => (prev + 1) % daysOfWeek.length);
  };

  const prevDay = () => {
    setSelectedDay((prev) => (prev - 1 + daysOfWeek.length) % daysOfWeek.length);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">My Timetable</h1>
        <p className="text-gray-400">Today's schedule and classes</p>
      </div>

      {/* Day Selector */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={prevDay}
            className="glass-button p-3 rounded-full hover:shadow-glow"
          >
            <ChevronLeft size={20} className="text-indigo-400" />
          </button>
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">{currentDay}</h2>
            <p className="text-sm text-gray-400">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
          
          <button
            onClick={nextDay}
            className="glass-button p-3 rounded-full hover:shadow-glow"
          >
            <ChevronRight size={20} className="text-indigo-400" />
          </button>
        </div>
      </div>

      {/* Day Navigation Pills */}
      <div className="flex overflow-x-auto space-x-3 pb-2">
        {daysOfWeek.map((day, index) => (
          <button
            key={day}
            onClick={() => setSelectedDay(index)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              index === selectedDay
                ? "bg-indigo-500 text-white shadow-glow"
                : "glass-button text-gray-400"
            }`}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Classes List */}
      <div className="space-y-4">
        {todayClasses.length > 0 ? (
          todayClasses.map((classItem, index) => (
            <div
              key={index}
              className={`glass-card p-5 border ${classItem.color} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {classItem.subject}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Clock size={16} className="text-indigo-400" />
                      <span>{classItem.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <MapPin size={16} className="text-indigo-400" />
                      <span>{classItem.room}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <User size={16} className="text-indigo-400" />
                      <span>{classItem.faculty}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <Calendar size={20} className="text-indigo-400" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card p-8 text-center">
            <Calendar size={48} className="text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No Classes Today</h3>
            <p className="text-gray-400">Enjoy your free day!</p>
          </div>
        )}
      </div>
    </div>
  );
}; 