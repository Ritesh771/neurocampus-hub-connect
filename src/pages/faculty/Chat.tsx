import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Smile, Users, User } from "lucide-react";
import { useState } from "react";

const chatList = [
  {
    id: 1,
    name: "CS Department Faculty",
    type: "group",
    lastMessage: "Faculty meeting tomorrow at 10 AM",
    time: "2 min ago",
    unreadCount: 3,
    avatar: ""
  },
  {
    id: 2,
    name: "5th Sem CS Students",
    type: "group", 
    lastMessage: "Assignment deadline extended",
    time: "1 hour ago",
    unreadCount: 12,
    avatar: ""
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    type: "dm",
    lastMessage: "Can we schedule a meeting?",
    time: "3 hours ago",
    unreadCount: 1,
    avatar: ""
  },
  {
    id: 4,
    name: "Prof. Rajesh Kumar",
    type: "dm",
    lastMessage: "Thanks for the documents",
    time: "1 day ago", 
    unreadCount: 0,
    avatar: ""
  }
];

const messages = [
  {
    id: 1,
    sender: "Dr. Smith",
    message: "Good morning everyone! Don't forget about the faculty meeting tomorrow at 10 AM in the conference room.",
    time: "09:15 AM",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    message: "Thanks for the reminder. I'll be there.",
    time: "09:18 AM",
    isOwn: true
  },
  {
    id: 3,
    sender: "Prof. Johnson",
    message: "Should we prepare anything specific for the meeting?",
    time: "09:20 AM",
    isOwn: false
  },
  {
    id: 4,
    sender: "Dr. Smith", 
    message: "Please bring your semester reports and any concerns regarding student performance.",
    time: "09:22 AM",
    isOwn: false
  }
];

export const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(chatList[0]);
  const [newMessage, setNewMessage] = useState("");
  const [showChatList, setShowChatList] = useState(true);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-blue-400" />
          Chat
        </h1>
        <p className="text-white/70">Connect with colleagues and students instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Chat List */}
        {(showChatList || window.innerWidth >= 1024) && (
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-white">Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {chatList.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => {
                      setSelectedChat(chat);
                      setShowChatList(false);
                    }}
                    className={`flex items-center gap-3 p-4 cursor-pointer transition-all hover:bg-white/10 ${
                      selectedChat.id === chat.id ? 'bg-white/10 border-r-2 border-blue-400' : ''
                    }`}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={chat.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                          {chat.type === 'group' ? <Users className="h-5 w-5" /> : <User className="h-5 w-5" />}
                        </AvatarFallback>
                      </Avatar>
                      {chat.unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                          {chat.unreadCount}
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-medium truncate">{chat.name}</h4>
                        <span className="text-white/50 text-xs">{chat.time}</span>
                      </div>
                      <p className="text-white/70 text-sm truncate">{chat.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Chat Window */}
        {(!showChatList || window.innerWidth >= 1024) && (
          <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b border-white/10">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowChatList(true)}
                  className="lg:hidden text-white"
                >
                  ←
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm">
                    {selectedChat.type === 'group' ? <Users className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-medium">{selectedChat.name}</h3>
                  <p className="text-white/60 text-sm">
                    {selectedChat.type === 'group' ? 'Group Chat' : 'Direct Message'}
                  </p>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    {!message.isOwn && (
                      <p className="text-white/60 text-xs mb-1">{message.sender}</p>
                    )}
                    <div
                      className={`p-3 rounded-2xl ${
                        message.isOwn
                          ? 'bg-blue-500/20 text-white border border-blue-400/30'
                          : 'bg-white/10 text-white border border-white/10'
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                    </div>
                    <p className="text-white/40 text-xs mt-1 text-right">{message.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Smile className="h-5 w-5" />
                </Button>
                <Button
                  onClick={handleSendMessage}
                  className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-400/30"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}; 