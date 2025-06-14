import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Megaphone, Pin, AlertTriangle, Calendar } from "lucide-react";
import { useState } from "react";

const announcements = [
  {
    id: 1,
    title: "Mid-Semester Exam Schedule Released",
    body: "The mid-semester examination schedule for all departments has been published. Please check the academic portal for detailed timings and venues.",
    date: "2024-06-10",
    postedBy: "HOD - Computer Science",
    type: "urgent",
    isPinned: true
  },
  {
    id: 2,
    title: "Faculty Development Program",
    body: "All faculty members are invited to attend the 3-day Faculty Development Program on 'Modern Teaching Methodologies' starting June 15th.",
    date: "2024-06-08",
    postedBy: "Admin",
    type: "normal",
    isPinned: false
  },
  {
    id: 3,
    title: "Library Maintenance Notice",
    body: "The central library will be closed for maintenance on June 12th. Digital resources will remain accessible.",
    date: "2024-06-07",
    postedBy: "Admin",
    type: "normal",
    isPinned: false
  },
  {
    id: 4,
    title: "Research Paper Submission Deadline",
    body: "Reminder: Research paper submissions for the annual conference are due by June 20th. Late submissions will not be accepted.",
    date: "2024-06-05",
    postedBy: "HOD - Research",
    type: "urgent",
    isPinned: true
  }
];

export const Announcements = () => {
  const [showDateFilter, setShowDateFilter] = useState(false);

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Megaphone className="h-6 w-6 text-pink-400" />
          Announcements
        </h1>
        <p className="text-white/70">Stay updated with important announcements and notices.</p>
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowDateFilter(!showDateFilter)}
          className="bg-white/5 border-white/10 text-white hover:bg-white/10"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Filter by Date
        </Button>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card 
            key={announcement.id} 
            className="bg-black/30 backdrop-blur-lg border-white/10 glass hover:glow transition-all duration-300 cursor-pointer"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  {announcement.isPinned && <Pin className="h-4 w-4 text-yellow-400" />}
                  {announcement.type === 'urgent' && <AlertTriangle className="h-4 w-4 text-red-400" />}
                  {announcement.title}
                </CardTitle>
                <div className="flex gap-2">
                  {announcement.isPinned && (
                    <Badge variant="outline" className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                      Pinned
                    </Badge>
                  )}
                  {announcement.type === 'urgent' && (
                    <Badge variant="outline" className="bg-red-500/20 text-red-300 border-red-400/30">
                      Urgent
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 mb-4 leading-relaxed">
                {announcement.body}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-300 font-medium">
                  Posted by: {announcement.postedBy}
                </span>
                <span className="text-white/50">
                  {new Date(announcement.date).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}; 