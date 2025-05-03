
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';

// Mock data for chat contacts
const chatContacts = [
  { id: 1, name: "Dr. Sarah Williams", role: "Professor - AI & ML", avatar: null, online: true, lastMessage: "Great! I'll check the code tomorrow.", unread: 0, lastActive: "Just now" },
  { id: 2, name: "John Peterson", role: "Computer Science - Student", avatar: null, online: true, lastMessage: "Thanks for your help with the assignment!", unread: 3, lastActive: "5m ago" },
  { id: 3, name: "Prof. Michael Chen", role: "HOD - Computer Science", avatar: null, online: false, lastMessage: "Please submit the report by Friday.", unread: 0, lastActive: "1h ago" },
  { id: 4, name: "Student Council", role: "Group Chat - 8 members", avatar: null, online: true, lastMessage: "Meeting schedule updated for tomorrow.", unread: 5, lastActive: "2h ago" },
  { id: 5, name: "CS302 Group", role: "Group Chat - 24 members", avatar: null, online: true, lastMessage: "Does anyone have last year's question papers?", unread: 0, lastActive: "Yesterday" },
  { id: 6, name: "Dr. Amanda Clark", role: "Professor - Database Systems", avatar: null, online: false, lastMessage: "I've shared some additional resources on SQL optimization.", unread: 0, lastActive: "2d ago" },
  { id: 7, name: "Technical Support", role: "Help Desk", avatar: null, online: true, lastMessage: "Your ticket #2451 has been resolved.", unread: 1, lastActive: "3d ago" },
];

// Mock conversation data
const mockConversation = [
  { id: 1, sender: 2, text: "Hi professor, I had a question about today's lecture on neural networks.", time: "10:30 AM" },
  { id: 2, sender: 0, text: "Hello John, sure, what would you like to know?", time: "10:32 AM" },
  { id: 3, sender: 2, text: "I didn't quite understand the difference between CNN and RNN architectures. Could you explain that again?", time: "10:35 AM" },
  { id: 4, sender: 0, text: "Of course! CNNs (Convolutional Neural Networks) are primarily used for spatial data like images. They use convolutional layers to identify patterns in spatial data.", time: "10:38 AM" },
  { id: 5, sender: 0, text: "RNNs (Recurrent Neural Networks), on the other hand, are designed for sequential data like text or time series. They have connections that form a directed cycle, allowing them to maintain information about previous inputs.", time: "10:39 AM" },
  { id: 6, sender: 2, text: "That makes sense! So if I'm working with image classification, I should use CNNs, and for text analysis like sentiment analysis, RNNs would be better?", time: "10:42 AM" },
  { id: 7, sender: 0, text: "Exactly! Although modern NLP often uses Transformers now, which have advantages over traditional RNNs. But you've got the basic distinction right.", time: "10:45 AM" },
  { id: 8, sender: 2, text: "Thanks for clearing that up! Also, do you have any recommended resources for learning more about these architectures?", time: "10:48 AM" },
  { id: 9, sender: 0, text: "I'd recommend checking out the Deep Learning book by Goodfellow, Bengio, and Courville. Also, there are excellent courses on Coursera by Andrew Ng. I'll share some links in our class portal.", time: "10:50 AM" },
  { id: 10, sender: 2, text: "Great! I'll check the code tomorrow. Thanks for your help!", time: "10:52 AM" },
];

const ChatPage: React.FC = () => {
  const { user } = useAuth();
  const [activeContact, setActiveContact] = useState(chatContacts[0]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState(mockConversation);
  const [mobileView, setMobileView] = useState("contacts"); // "contacts" or "chat"
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom of messages
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 0, // Current user
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const filteredContacts = chatContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className={`md:hidden flex items-center justify-between ${mobileView === "chat" ? "mb-4" : ""}`}>
        {mobileView === "chat" && (
          <Button 
            variant="ghost" 
            onClick={() => setMobileView("contacts")}
            className="p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Back to contacts</span>
          </Button>
        )}
        <h1 className="text-2xl font-bold tracking-tight">
          {mobileView === "contacts" ? "Messages" : activeContact.name}
        </h1>
        {mobileView === "contacts" && (
          <Button 
            variant="ghost"
            className="p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <span className="sr-only">More options</span>
          </Button>
        )}
      </div>

      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Chat Messages</h1>
      </div>

      <div className="flex h-[calc(100vh-220px)] overflow-hidden rounded-lg border">
        {/* Contacts List - Hidden on mobile when in chat view */}
        <div className={`${mobileView === "chat" ? "hidden" : "flex"} md:flex flex-col border-r w-full md:w-80 bg-white`}>
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No contacts found
              </div>
            ) : (
              filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 border-b ${activeContact.id === contact.id ? 'bg-gray-50' : ''}`}
                  onClick={() => {
                    setActiveContact(contact);
                    setMobileView("chat");
                  }}
                >
                  <div className="relative">
                    {contact.avatar ? (
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                        {formatInitials(contact.name)}
                      </div>
                    )}
                    {contact.online && (
                      <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-medium text-sm truncate">{contact.name}</p>
                      <span className="text-xs text-gray-500">{contact.lastActive}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{contact.role}</p>
                    <p className="text-xs truncate mt-1">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <div className="ml-2 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                      {contact.unread}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">New Message</Button>
          </div>
        </div>

        {/* Chat Area - Hidden on mobile when in contacts view */}
        <div className={`${mobileView === "contacts" ? "hidden" : "flex"} md:flex flex-col flex-1 bg-white`}>
          {/* Chat Header - hidden on mobile (header is shown above) */}
          <div className="hidden md:flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              {activeContact.avatar ? (
                <img
                  src={activeContact.avatar}
                  alt={activeContact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                  {formatInitials(activeContact.name)}
                </div>
              )}
              <div className="ml-3">
                <p className="font-medium">{activeContact.name}</p>
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full ${activeContact.online ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  <span className="text-xs text-gray-500 ml-1">{activeContact.online ? 'Online' : 'Offline'}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Button>
              <Button variant="ghost" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Button>
              <Button variant="ghost" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => {
                const isCurrentUser = msg.sender === 0;
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] md:max-w-[60%] px-4 py-2 rounded-lg ${
                        isCurrentUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white border'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 text-right ${isCurrentUser ? 'text-primary-foreground/80' : 'text-gray-500'}`}>{msg.time}</p>
                    </div>
                  </div>
                );
              })}
              <div ref={messageEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <Button variant="ghost" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </Button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border-0 focus:ring-0 focus:outline-none px-3 py-2"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button variant="ghost" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Button>
              <Button 
                onClick={handleSendMessage}
                className="ml-2"
                disabled={message.trim() === ""}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
