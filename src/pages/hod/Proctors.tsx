import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Plus, Mail, Phone, GraduationCap, BookOpen, UserPlus } from "lucide-react";
import { useState } from "react";

const proctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 234-567-8901",
    department: "Computer Science",
    designation: "Associate Professor",
    students: 45,
    subjects: ["Data Structures", "Algorithms"],
    image: "/avatars/sarah.jpg"
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 234-567-8902",
    department: "Computer Science",
    designation: "Assistant Professor",
    students: 38,
    subjects: ["Database Systems", "Web Development"],
    image: "/avatars/michael.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    email: "emily.brown@example.com",
    phone: "+1 234-567-8903",
    department: "Computer Science",
    designation: "Professor",
    students: 42,
    subjects: ["Machine Learning", "AI"],
    image: "/avatars/emily.jpg"
  },
  {
    id: 4,
    name: "Prof. David Wilson",
    email: "david.wilson@example.com",
    phone: "+1 234-567-8904",
    department: "Computer Science",
    designation: "Assistant Professor",
    students: 35,
    subjects: ["Computer Networks", "Security"],
    image: "/avatars/david.jpg"
  }
];

export function Proctors() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProctors = proctors.filter(proctor =>
    proctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proctor.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-indigo-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Proctors</h1>
        </div>
        <p className="text-indigo-300 font-light">Faculty members assigned as student proctors</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search proctors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Assign New Proctor
        </Button>
      </div>

      {/* Proctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProctors.map((proctor) => (
          <Card key={proctor.id} className="glass-card hover:scale-[1.02] transition-transform">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16 border-2 border-indigo-500">
                  <AvatarImage src={proctor.image} alt={proctor.name} />
                  <AvatarFallback className="bg-indigo-900 text-indigo-300">
                    {proctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{proctor.name}</h3>
                      <p className="text-sm text-indigo-300">{proctor.designation}</p>
                    </div>
                    <Badge variant="outline" className="border-green-500 text-green-400">
                      {proctor.students} Students
                    </Badge>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Mail className="w-4 h-4 mr-2" />
                      {proctor.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Phone className="w-4 h-4 mr-2" />
                      {proctor.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {proctor.department}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Subjects:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {proctor.subjects.map((subject, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      View Students
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-400 hover:text-red-300">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-blue-400">{proctors.length}</p>
            <p className="text-xs text-blue-300">Total Proctors</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-green">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-green-400">
              {proctors.reduce((acc, p) => acc + p.students, 0)}
            </p>
            <p className="text-xs text-green-300">Total Students</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-purple">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-purple-400">
              {proctors.reduce((acc, p) => acc + p.subjects.length, 0)}
            </p>
            <p className="text-xs text-purple-300">Total Subjects</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 