import { Calendar, Clock, MapPin, User } from "lucide-react";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

const scheduleData = {
  Monday: [
    { subject: "Mathematics", room: "A101", faculty: "Dr. Smith", color: "bg-blue-500", startSlot: 0, span: 1 },
    { subject: "Physics", room: "B205", faculty: "Prof. Johnson", color: "bg-green-500", startSlot: 2, span: 1 },
    { subject: "Chemistry", room: "C303", faculty: "Dr. Wilson", color: "bg-purple-500", startSlot: 4, span: 1 }
  ],
  Tuesday: [
    { subject: "Computer Science", room: "Lab 1", faculty: "Mr. Brown", color: "bg-orange-500", startSlot: 1, span: 2 },
    { subject: "English", room: "A102", faculty: "Ms. Davis", color: "bg-pink-500", startSlot: 4, span: 1 }
  ],
  Wednesday: [
    { subject: "Mathematics", room: "A101", faculty: "Dr. Smith", color: "bg-blue-500", startSlot: 0, span: 1 },
    { subject: "Physics Lab", room: "Physics Lab", faculty: "Prof. Johnson", color: "bg-green-500", startSlot: 3, span: 2 }
  ],
  Thursday: [
    { subject: "Chemistry", room: "C303", faculty: "Dr. Wilson", color: "bg-purple-500", startSlot: 1, span: 1 },
    { subject: "Computer Science", room: "Lab 2", faculty: "Mr. Brown", color: "bg-orange-500", startSlot: 3, span: 1 }
  ],
  Friday: [
    { subject: "English", room: "A102", faculty: "Ms. Davis", color: "bg-pink-500", startSlot: 0, span: 1 },
    { subject: "Mathematics", room: "A101", faculty: "Dr. Smith", color: "bg-blue-500", startSlot: 2, span: 1 }
  ],
  Saturday: [
    { subject: "Sports", room: "Playground", faculty: "Coach Miller", color: "bg-red-500", startSlot: 1, span: 2 }
  ]
};

export const WeeklySchedule = () => {
  const renderTimeSlotContent = (dayName: string, slotIndex: number) => {
    const daySchedule = scheduleData[dayName as keyof typeof scheduleData] || [];
    const classInSlot = daySchedule.find(
      (classItem) => 
        slotIndex >= classItem.startSlot && 
        slotIndex < classItem.startSlot + classItem.span
    );

    if (!classInSlot) {
      return null;
    }

    // Only render the class card on its starting slot
    if (slotIndex === classInSlot.startSlot) {
      return (
        <div 
          className={`p-2 rounded-lg text-white text-xs ${classInSlot.color} shadow-glow animate-fade-in`}
          style={{ 
            gridRowEnd: `span ${classInSlot.span}`,
            animationDelay: `${slotIndex * 0.1}s`
          }}
        >
          <div className="font-semibold truncate">{classInSlot.subject}</div>
          <div className="flex items-center mt-1 opacity-90">
            <MapPin size={10} className="mr-1" />
            <span className="truncate">{classInSlot.room}</span>
          </div>
          <div className="flex items-center mt-1 opacity-90">
            <User size={10} className="mr-1" />
            <span className="truncate">{classInSlot.faculty}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Weekly Schedule</h1>
        <p className="text-gray-400">Your complete week at a glance</p>
      </div>

      {/* Current Day Highlight */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar size={20} className="text-indigo-400" />
            <span className="text-white font-semibold">Today: {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock size={16} />
            <span className="text-sm">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>

      {/* Weekly Grid */}
      <div className="glass-card p-4 overflow-x-auto">
        <div className="min-w-full">
          {/* Time slots header */}
          <div className="grid grid-cols-8 gap-2 mb-4">
            <div className="text-xs font-semibold text-gray-400">Time</div>
            {weekDays.map((day) => (
              <div key={day} className="text-xs font-semibold text-indigo-400 text-center">
                {day.slice(0, 3)}
              </div>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="space-y-2">
            {timeSlots.map((timeSlot, slotIndex) => (
              <div key={timeSlot} className="grid grid-cols-8 gap-2 min-h-[60px]">
                {/* Time column */}
                <div className="text-xs text-gray-400 pr-2 border-r border-gray-700">
                  {timeSlot}
                </div>
                
                {/* Day columns */}
                {weekDays.map((day) => (
                  <div key={`${day}-${slotIndex}`} className="relative">
                    {renderTimeSlotContent(day, slotIndex)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2">Today's Classes</h3>
        
        {(scheduleData[new Date().toLocaleDateString('en-US', { weekday: 'long' }) as keyof typeof scheduleData] || []).map((classItem, index) => (
          <div 
            key={`${classItem.subject}-${index}`}
            className="glass-card p-4 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white">{classItem.subject}</h4>
              <div className={`w-4 h-4 rounded-full ${classItem.color}`}></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock size={16} className="text-indigo-400" />
                <span>{timeSlots[classItem.startSlot]}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} className="text-indigo-400" />
                <span>{classItem.room}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 col-span-2">
                <User size={16} className="text-indigo-400" />
                <span>{classItem.faculty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Week Summary */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4">Week Summary</h3>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-indigo-400">
              {Object.values(scheduleData).flat().length}
            </div>
            <div className="text-sm text-gray-400">Total Classes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              {new Set(Object.values(scheduleData).flat().map(c => c.subject)).size}
            </div>
            <div className="text-sm text-gray-400">Subjects</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 