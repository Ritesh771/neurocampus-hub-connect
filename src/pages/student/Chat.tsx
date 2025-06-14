import { useState } from "react";
import { MessageCircle, Send, Users, Search, MoreVertical, Phone, Video } from "lucide-react";

const chatList = [
  {
    id: 1,
    name: "CS 6th Sem - Section A",
    lastMessage: "Hey everyone! Don't forget about tomorrow's quiz",
    timestamp: "2 min ago",
    unreadCount: 3,
    isGroup: true,
    avatar: "CS",
    status: "online"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    lastMessage: "Can you share your notes for today's lecture?",
    timestamp: "15 min ago",
    unreadCount: 1,
    isGroup: false,
    avatar: "SW",
    status: "online"
  },
  {
    id: 3,
    name: "Study Group - Math",
    lastMessage: "Meeting tomorrow at 4 PM in library",
    timestamp: "1 hour ago",
    unreadCount: 0,
    isGroup: true,
    avatar: "SG",
    status: "offline"
  },
  {
    id: 4,
    name: "Alex Chen",
    lastMessage: "Thanks for the help with the assignment!",
    timestamp: "2 hours ago",
    unreadCount: 0,
    isGroup: false,
    avatar: "AC",
    status: "away"
  },
  {
    id: 5,
    name: "Physics Lab Group",
    lastMessage: "Experiment results uploaded to drive",
    timestamp: "Yesterday",
    unreadCount: 0,
    isGroup: true,
    avatar: "PL",
    status: "offline"
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Wilson",
    message: "Hey! Are you free to discuss the project?",
    timestamp: "10:30 AM",
    isOwn: false,
    avatar: "SW"
  },
  {
    id: 2,
    sender: "You",
    message: "Sure! What aspect do you want to focus on?",
    timestamp: "10:32 AM",
    isOwn: true,
    avatar: "ME"
  },
  {
    id: 3,
    sender: "Sarah Wilson",
    message: "I think we should start with the literature review. I found some great papers!",
    timestamp: "10:35 AM",
    isOwn: false,
    avatar: "SW"
  },
  {
    id: 4,
    sender: "You",
    message: "That sounds perfect! Can you share the links?",
    timestamp: "10:37 AM",
    isOwn: true,
    avatar: "ME"
  },
  {
    id: 5,
    sender: "Sarah Wilson",
    message: "📎 research-papers.pdf",
    timestamp: "10:38 AM",
    isOwn: false,
    avatar: "SW"
  }
];

export const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  if (selectedChat) {
    return (
      <div className="flex flex-col h-screen">
        {/* Chat Header */}
        <div className="glass-card m-4 mb-0 p-4 rounded-b-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSelectedChat(null)}
                className="text-indigo-400 hover:text-white transition-colors"
              >
                ←
              </button>
              <div className="relative">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{selectedChat.avatar}</span>
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-navy-800 ${getStatusColor(selectedChat.status)}`}></div>
              </div>
              <div>
                <h3 className="text-white font-semibold">{selectedChat.name}</h3>
                <p className="text-xs text-gray-400">
                  {selectedChat.isGroup ? `${Math.floor(Math.random() * 20) + 5} members` : selectedChat.status}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 glass-button rounded-full hover:shadow-glow transition-all duration-300">
                <Phone size={18} className="text-indigo-400" />
              </button>
              <button className="p-2 glass-button rounded-full hover:shadow-glow transition-all duration-300">
                <Video size={18} className="text-indigo-400" />
              </button>
              <button className="p-2 glass-button rounded-full hover:shadow-glow transition-all duration-300">
                <MoreVertical size={18} className="text-indigo-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 pt-0 overflow-y-auto">
          <div className="glass-card p-4 space-y-4 rounded-t-none min-h-full">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`max-w-xs ${message.isOwn ? 'order-1' : 'order-2'}`}>
                  <div className={`p-3 rounded-2xl ${
                    message.isOwn 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-glass border border-glass-border text-gray-300'
                  }`}>
                    {!message.isOwn && (
                      <div className="text-xs text-indigo-400 mb-1 font-medium">
                        {message.sender}
                      </div>
                    )}
                    <p className="text-sm">{message.message}</p>
                  </div>
                  <div className={`text-xs text-gray-400 mt-1 ${message.isOwn ? 'text-right' : 'text-left'}`}>
                    {message.timestamp}
                  </div>
                </div>
                
                {!message.isOwn && (
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-2 order-1">
                    <span className="text-white text-xs font-bold">{message.avatar}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 pt-0">
          <form onSubmit={handleSendMessage} className="glass-card p-3">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="p-2 bg-indigo-500 rounded-full hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Chats</h1>
        <p className="text-gray-400">Connect with classmates and groups</p>
      </div>

      {/* Search */}
      <div className="glass-card p-4">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-3 bg-glass border border-glass-border rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="space-y-3">
        {chatList
          .filter(chat => 
            chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((chat, index) => (
          <div 
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className="glass-card p-4 hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  chat.isGroup ? 'bg-purple-500' : 'bg-indigo-500'
                }`}>
                  {chat.isGroup ? (
                    <Users size={20} className="text-white" />
                  ) : (
                    <span className="text-white font-bold">{chat.avatar}</span>
                  )}
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-navy-800 ${getStatusColor(chat.status)}`}></div>
              </div>

              {/* Chat Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-white font-semibold truncate">{chat.name}</h4>
                  <span className="text-xs text-gray-400">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              </div>

              {/* Unread Badge */}
              {chat.unreadCount > 0 && (
                <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{chat.unreadCount}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full p-3 glass-button rounded-2xl text-left hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3">
              <Users size={20} className="text-indigo-400" />
              <div>
                <div className="text-white font-medium">Create Group Chat</div>
                <div className="text-sm text-gray-400">Start a new group conversation</div>
              </div>
            </div>
          </button>
          
          <button className="w-full p-3 glass-button rounded-2xl text-left hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3">
              <MessageCircle size={20} className="text-indigo-400" />
              <div>
                <div className="text-white font-medium">Find Classmates</div>
                <div className="text-sm text-gray-400">Connect with your batch mates</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}; 