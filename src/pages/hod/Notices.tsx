import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Plus, Pin, AlertTriangle, Calendar, Clock, Users, FileText } from "lucide-react";
import { useState } from "react";

const notices = [
  {
    id: 1,
    title: "Mid-Semester Examination Schedule",
    content: "The mid-semester examinations will commence from next week. Please check the timetable on the portal.",
    date: "2024-02-15",
    time: "10:00 AM",
    priority: "high",
    pinned: true,
    audience: "All Students",
    attachments: ["exam_schedule.pdf"]
  },
  {
    id: 2,
    title: "Faculty Meeting",
    content: "There will be a faculty meeting tomorrow at 2 PM in the conference room to discuss the upcoming semester planning.",
    date: "2024-02-14",
    time: "2:00 PM",
    priority: "medium",
    pinned: true,
    audience: "Faculty",
    attachments: ["meeting_agenda.pdf"]
  },
  {
    id: 3,
    title: "Project Submission Deadline",
    content: "The final project submission deadline has been extended to March 1st. Please ensure all documentation is complete.",
    date: "2024-02-13",
    time: "11:30 AM",
    priority: "high",
    pinned: false,
    audience: "Final Year Students",
    attachments: ["project_guidelines.pdf"]
  },
  {
    id: 4,
    title: "Holiday Announcement",
    content: "The college will remain closed on February 20th for maintenance work.",
    date: "2024-02-12",
    time: "9:00 AM",
    priority: "low",
    pinned: false,
    audience: "All",
    attachments: []
  }
];

export function Notices() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotices = notices.filter(notice => {
    const matchesFilter = activeFilter === "all" || 
      (activeFilter === "pinned" && notice.pinned) ||
      (activeFilter === "high" && notice.priority === "high");
    
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-400 border-red-500/50";
      case "medium":
        return "text-yellow-400 border-yellow-500/50";
      case "low":
        return "text-green-400 border-green-500/50";
      default:
        return "text-gray-400 border-gray-500/50";
    }
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Bell className="w-8 h-8 text-indigo-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Notices</h1>
        </div>
        <p className="text-indigo-300 font-light">Important announcements and updates</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="text-sm"
          >
            All Notices
          </Button>
          <Button
            variant={activeFilter === "pinned" ? "default" : "outline"}
            onClick={() => setActiveFilter("pinned")}
            className="text-sm"
          >
            <Pin className="w-4 h-4 mr-2" />
            Pinned
          </Button>
          <Button
            variant={activeFilter === "high" ? "default" : "outline"}
            onClick={() => setActiveFilter("high")}
            className="text-sm"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            High Priority
          </Button>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search notices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4 mr-2" />
            New Notice
          </Button>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <Card key={notice.id} className="glass-card hover:scale-[1.02] transition-transform">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{notice.title}</h3>
                    {notice.pinned && (
                      <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                        <Pin className="w-3 h-3 mr-1" />
                        Pinned
                      </Badge>
                    )}
                    <Badge variant="outline" className={getPriorityColor(notice.priority)}>
                      {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)} Priority
                    </Badge>
                  </div>
                  <p className="text-gray-300">{notice.content}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {notice.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {notice.time}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {notice.audience}
                </div>
                {notice.attachments.length > 0 && (
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {notice.attachments.length} Attachment{notice.attachments.length > 1 ? 's' : ''}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-400 hover:text-red-300">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-blue-400">{notices.length}</p>
            <p className="text-xs text-blue-300">Total Notices</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-yellow">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-yellow-400">
              {notices.filter(n => n.pinned).length}
            </p>
            <p className="text-xs text-yellow-300">Pinned Notices</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-red">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-red-400">
              {notices.filter(n => n.priority === "high").length}
            </p>
            <p className="text-xs text-red-300">High Priority</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 