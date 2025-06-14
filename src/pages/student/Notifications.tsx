import { useState } from "react";
import { Bell, CheckCircle, AlertTriangle, Calendar, BookOpen, Users, X, Filter } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Quiz Tomorrow - Mathematics",
    message: "Don't forget about the calculus quiz scheduled for tomorrow at 10:00 AM in Room A101",
    type: "reminder",
    timestamp: "5 min ago",
    isRead: false,
    icon: Calendar,
    priority: "high"
  },
  {
    id: 2,
    title: "Assignment Grades Published",
    message: "Your Computer Science assignment grades have been published. Check the marks section for details.",
    type: "academic",
    timestamp: "1 hour ago",
    isRead: false,
    icon: BookOpen,
    priority: "medium"
  },
  {
    id: 3,
    title: "Library Book Due Tomorrow",
    message: "The book 'Advanced Algorithms' is due for return tomorrow. Renew online or visit the library.",
    type: "reminder",
    timestamp: "2 hours ago",
    isRead: true,
    icon: AlertTriangle,
    priority: "medium"
  },
  {
    id: 4,
    title: "Class Cancelled - Physics Lab",
    message: "Tomorrow's physics lab session has been cancelled due to equipment maintenance. Makeup class on Friday.",
    type: "announcement",
    timestamp: "3 hours ago",
    isRead: true,
    icon: Calendar,
    priority: "high"
  },
  {
    id: 5,
    title: "Study Group Meeting",
    message: "Mathematics study group meeting today at 4 PM in the central library. Topic: Integration techniques.",
    type: "social",
    timestamp: "5 hours ago",
    isRead: false,
    icon: Users,
    priority: "low"
  },
  {
    id: 6,
    title: "Fee Payment Confirmation",
    message: "Your semester fee payment of $2,500 has been successfully processed. Receipt sent to your email.",
    type: "financial",
    timestamp: "1 day ago",
    isRead: true,
    icon: CheckCircle,
    priority: "medium"
  },
  {
    id: 7,
    title: "New Course Material Added",
    message: "Professor Smith has uploaded new lecture slides for Database Management Systems. Available in course portal.",
    type: "academic",
    timestamp: "2 days ago",
    isRead: true,
    icon: BookOpen,
    priority: "low"
  },
  {
    id: 8,
    title: "Campus Event Invitation",
    message: "You're invited to the Annual Cultural Fest happening next week. Register for events by Friday.",
    type: "event",
    timestamp: "3 days ago",
    isRead: true,
    icon: Calendar,
    priority: "low"
  }
];

export const Notifications = () => {
  const [notificationList, setNotificationList] = useState(notifications);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id: number) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "reminder":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "academic":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "announcement":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "social":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "financial":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "event":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredNotifications = notificationList.filter(notif => {
    if (filter === "all") return true;
    if (filter === "unread") return !notif.isRead;
    return notif.type === filter;
  });

  const unreadCount = notificationList.filter(n => !n.isRead).length;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Notifications</h1>
        <p className="text-gray-400">Stay updated with important alerts</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-white">{notificationList.length}</div>
          <div className="text-sm text-gray-400">Total</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-red-400">{unreadCount}</div>
          <div className="text-sm text-gray-400">Unread</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-yellow-400">
            {notificationList.filter(n => n.priority === 'high' && !n.isRead).length}
          </div>
          <div className="text-sm text-gray-400">Priority</div>
        </div>
      </div>

      {/* Controls */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Filters</h3>
          <button
            onClick={markAllAsRead}
            className="px-3 py-1 bg-indigo-500 text-white rounded-lg text-sm hover:shadow-glow transition-all duration-300"
          >
            Mark All Read
          </button>
        </div>
        
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { key: "all", label: "All" },
            { key: "unread", label: "Unread" },
            { key: "reminder", label: "Reminders" },
            { key: "academic", label: "Academic" },
            { key: "announcement", label: "Announcements" },
            { key: "social", label: "Social" },
            { key: "financial", label: "Financial" },
            { key: "event", label: "Events" }
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-3 py-1 rounded-full whitespace-nowrap text-sm transition-all duration-300 ${
                filter === filterOption.key
                  ? "bg-indigo-500 text-white shadow-glow"
                  : "glass-button text-gray-400"
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <Bell size={48} className="text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No Notifications</h3>
            <p className="text-gray-400">You're all caught up!</p>
          </div>
        ) : (
          filteredNotifications.map((notification, index) => {
            const IconComponent = notification.icon;
            
            return (
              <div 
                key={notification.id}
                className={`glass-card p-4 transition-all duration-300 hover:shadow-glow animate-fade-in ${
                  !notification.isRead ? 'border-l-4 border-indigo-500' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(notification.type)}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getPriorityColor(notification.priority)}`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className={`font-semibold ${notification.isRead ? 'text-gray-300' : 'text-white'}`}>
                        {notification.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">{notification.timestamp}</span>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
                        >
                          <X size={14} className="text-gray-400 hover:text-red-400" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-2">{notification.message}</p>
                    
                    {!notification.isRead && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}; 