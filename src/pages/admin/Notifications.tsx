import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Search, Plus, Trash2, Edit, Send, Users, Building2, GraduationCap } from 'lucide-react';

const notificationsData = [
  {
    id: 1,
    title: 'New Student Registration',
    message: '50 new students have been registered in the Computer Science department',
    type: 'student',
    date: '2024-03-15',
    time: '10:30 AM',
    read: false
  },
  {
    id: 2,
    title: 'Faculty Meeting',
    message: 'Quarterly faculty meeting scheduled for next week',
    type: 'faculty',
    date: '2024-03-14',
    time: '2:15 PM',
    read: true
  },
  {
    id: 3,
    title: 'HOD Appointment',
    message: 'Dr. Sarah Johnson has been appointed as the new HOD of Computer Science',
    type: 'hod',
    date: '2024-03-13',
    time: '11:45 AM',
    read: false
  },
  {
    id: 4,
    title: 'System Maintenance',
    message: 'Scheduled maintenance on Sunday, March 17th from 2 AM to 4 AM',
    type: 'system',
    date: '2024-03-12',
    time: '9:00 AM',
    read: true
  }
];

const notificationTypes = [
  { value: 'all', label: 'All Notifications', icon: Bell },
  { value: 'student', label: 'Student Updates', icon: GraduationCap },
  { value: 'faculty', label: 'Faculty Updates', icon: Users },
  { value: 'hod', label: 'HOD Updates', icon: Building2 },
  { value: 'system', label: 'System Updates', icon: Bell }
];

export function Notifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [isCreatingNotification, setIsCreatingNotification] = useState(false);
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: '',
    audience: 'all'
  });

  const filteredNotifications = notificationsData.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || notification.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleCreateNotification = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement notification creation logic
    console.log('Creating notification:', newNotification);
    setIsCreatingNotification(false);
    setNewNotification({ title: '', message: '', type: '', audience: 'all' });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'student':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'faculty':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'hod':
        return <Building2 className="w-5 h-5 text-yellow-400" />;
      default:
        return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Notifications</h1>
        <p className="text-gray-400">Manage and send system-wide notifications</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search notifications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-card"
          />
        </div>
        <Button
          onClick={() => setIsCreatingNotification(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Notification
        </Button>
      </div>

      {/* Create Notification Form */}
      {isCreatingNotification && (
        <Card className="glass-card p-6">
          <form onSubmit={handleCreateNotification} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Create New Notification</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newNotification.title}
                  onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  value={newNotification.message}
                  onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={newNotification.type}
                    onValueChange={(value) => setNewNotification({ ...newNotification, type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {notificationTypes.slice(1).map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience">Audience</Label>
                  <Select
                    value={newNotification.audience}
                    onValueChange={(value) => setNewNotification({ ...newNotification, audience: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="students">Students Only</SelectItem>
                      <SelectItem value="faculty">Faculty Only</SelectItem>
                      <SelectItem value="hod">HODs Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCreatingNotification(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Send className="w-4 h-4 mr-2" />
                Send Notification
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <Card
            key={notification.id}
            className={`glass-card p-4 hover:shadow-2xl transition-all duration-300 ${
              !notification.read ? 'border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-white/5">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{notification.title}</h3>
                    <p className="text-gray-300 mt-1">{notification.message}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                  <span>{notification.date}</span>
                  <span>•</span>
                  <span>{notification.time}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <Card className="glass-card p-6 text-center">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Notifications Found</h3>
          <p className="text-gray-400">Try adjusting your search or create a new notification</p>
        </Card>
      )}
    </div>
  );
} 