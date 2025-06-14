import { Megaphone, Pin, AlertTriangle, Calendar, User } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Mid-Semester Examinations Schedule Released",
    message: "The mid-semester examination schedule for all semesters has been released. Please check your respective department notice boards and download the timetable from the student portal. Exams will commence from February 15th, 2024.",
    postedBy: "Academic Office",
    date: "2024-01-20",
    type: "urgent",
    isPinned: true,
    category: "Examinations"
  },
  {
    id: 2,
    title: "Library Extended Hours During Exam Period",
    message: "The central library will remain open 24/7 during the examination period from February 10th to February 28th. Students can utilize the study halls and reading rooms throughout this period.",
    postedBy: "Library Department",
    date: "2024-01-18",
    type: "info",
    isPinned: false,
    category: "Facilities"
  },
  {
    id: 3,
    title: "Fee Payment Deadline Extension",
    message: "Due to technical issues with the payment gateway, the fee payment deadline has been extended till January 31st, 2024. No late fees will be charged for payments made before this date.",
    postedBy: "Accounts Department",
    date: "2024-01-17",
    type: "important",
    isPinned: true,
    category: "Finance"
  },
  {
    id: 4,
    title: "Annual Technical Fest - TechnoVation 2024",
    message: "Registration is now open for TechnoVation 2024, our annual technical festival. Multiple events including coding competitions, robotics, and innovation challenges await. Register by February 5th, 2024.",
    postedBy: "Student Activities",
    date: "2024-01-15",
    type: "event",
    isPinned: false,
    category: "Events"
  },
  {
    id: 5,
    title: "Campus Network Maintenance",
    message: "Scheduled network maintenance will be conducted on January 25th from 2:00 AM to 6:00 AM. Internet and intranet services may be temporarily unavailable during this period.",
    postedBy: "IT Department",
    date: "2024-01-14",
    type: "warning",
    isPinned: false,
    category: "Technical"
  },
  {
    id: 6,
    title: "Career Guidance and Placement Drive",
    message: "A comprehensive career guidance session followed by campus placement drive will be conducted for final year students. Companies like TCS, Infosys, and Microsoft will be participating. Session on February 1st, 2024.",
    postedBy: "Placement Cell",
    date: "2024-01-12",
    type: "info",
    isPinned: false,
    category: "Placements"
  }
];

export const Announcements = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "important":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "warning":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "event":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "urgent":
      case "important":
        return <AlertTriangle size={16} />;
      case "warning":
        return <AlertTriangle size={16} />;
      default:
        return <Megaphone size={16} />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const pinnedAnnouncements = announcements.filter(a => a.isPinned);
  const regularAnnouncements = announcements.filter(a => !a.isPinned);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Announcements</h1>
        <p className="text-gray-400">Stay updated with latest campus news</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-3">
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-white">{announcements.length}</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-red-400">
            {announcements.filter(a => a.type === 'urgent').length}
          </div>
          <div className="text-xs text-gray-400">Urgent</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-yellow-400">
            {pinnedAnnouncements.length}
          </div>
          <div className="text-xs text-gray-400">Pinned</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-blue-400">
            {announcements.filter(a => a.type === 'event').length}
          </div>
          <div className="text-xs text-gray-400">Events</div>
        </div>
      </div>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white px-2 flex items-center">
            <Pin size={20} className="mr-2 text-yellow-400" />
            Pinned Announcements
          </h3>
          
          {pinnedAnnouncements.map((announcement, index) => (
            <div 
              key={announcement.id}
              className="glass-card p-5 border-l-4 border-yellow-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Pin size={16} className="text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">PINNED</span>
                    <div className={`px-2 py-1 rounded-lg text-xs border ${getTypeColor(announcement.type)} flex items-center space-x-1`}>
                      {getTypeIcon(announcement.type)}
                      <span>{announcement.type.toUpperCase()}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{announcement.title}</h4>
                  <div className="text-xs text-gray-400">{announcement.category}</div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {announcement.message}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <User size={12} />
                  <span>{announcement.postedBy}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={12} />
                  <span>{formatDate(announcement.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Regular Announcements */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2 flex items-center">
          <Megaphone size={20} className="mr-2 text-indigo-400" />
          Recent Announcements
        </h3>
        
        {regularAnnouncements.map((announcement, index) => (
          <div 
            key={announcement.id}
            className="glass-card p-5 animate-fade-in"
            style={{ animationDelay: `${(index + pinnedAnnouncements.length) * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`px-2 py-1 rounded-lg text-xs border ${getTypeColor(announcement.type)} flex items-center space-x-1`}>
                    {getTypeIcon(announcement.type)}
                    <span>{announcement.type.toUpperCase()}</span>
                  </div>
                  <span className="text-xs text-gray-500">{announcement.category}</span>
                </div>
                <h4 className="text-lg font-semibold text-white">{announcement.title}</h4>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {announcement.message}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <User size={12} />
                <span>{announcement.postedBy}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={12} />
                <span>{formatDate(announcement.date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {['All', 'Examinations', 'Events', 'Finance', 'Technical', 'Facilities', 'Placements'].map((category) => (
            <button
              key={category}
              className="px-3 py-1 glass-button rounded-full text-sm hover:shadow-glow transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 