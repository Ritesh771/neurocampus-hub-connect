import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Edit, Save, Mail, Phone, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { useState } from "react";

const profileData = {
  name: "Dr. Sarah Johnson",
  title: "Head of Department",
  department: "Computer Science Engineering",
  email: "sarah.johnson@university.edu",
  phone: "+91 9876543210",
  address: "Department of CSE, University Campus, Bangalore - 560001",
  joinDate: "August 15, 2018",
  experience: "12 years",
  qualification: "Ph.D. in Computer Science",
  specialization: "Machine Learning, Data Science, AI",
  about: "Experienced academic leader with over 12 years in computer science education and research. Specialized in machine learning and artificial intelligence with a passion for student development and innovative teaching methodologies."
};

const achievements = [
  { title: "Best HOD Award", year: "2023", description: "Outstanding leadership in department management" },
  { title: "Research Excellence", year: "2022", description: "Published 15+ papers in international journals" },
  { title: "Teaching Innovation", year: "2021", description: "Implemented new curriculum for AI/ML courses" },
  { title: "Student Mentorship", year: "2020", description: "Guided 50+ students to successful placements" }
];

const statistics = [
  { label: "Years of Experience", value: "12+", icon: Calendar },
  { label: "Students Mentored", value: "500+", icon: BookOpen },
  { label: "Research Papers", value: "25", icon: Award },
  { label: "Department Rank", value: "#3", icon: Award }
];

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profileData);

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile:", editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profileData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Settings className="w-8 h-8 text-gray-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Profile</h1>
        </div>
        <p className="text-gray-300 font-light">Manage your profile information</p>
      </div>

      {/* Profile Header */}
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-white/10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-indigo-600 text-white text-3xl">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {!isEditing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    className="glass border-white/20 text-white"
                  />
                  <Input
                    value={editedProfile.title}
                    onChange={(e) => setEditedProfile({ ...editedProfile, title: e.target.value })}
                    className="glass border-white/20 text-white"
                  />
                  <Input
                    value={editedProfile.department}
                    onChange={(e) => setEditedProfile({ ...editedProfile, department: e.target.value })}
                    className="glass border-white/20 text-white"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-1">{profileData.name}</h2>
                  <p className="text-indigo-300 mb-2">{profileData.title}</p>
                  <p className="text-gray-400">{profileData.department}</p>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">{profileData.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">{profileData.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">{profileData.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <div>
                <p className="text-sm text-gray-400">Join Date</p>
                <p className="text-white">{profileData.joinDate}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About & Qualifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white font-semibold">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{profileData.about}</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white font-semibold">Qualifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Experience</p>
              <p className="text-white">{profileData.experience}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Qualification</p>
              <p className="text-white">{profileData.qualification}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Specialization</p>
              <p className="text-white">{profileData.specialization}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 glass rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold">{achievement.title}</h3>
                  <Badge variant="outline" className="border-indigo-500 text-indigo-400">
                    {achievement.year}
                  </Badge>
                </div>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statistics.map((stat, index) => (
          <Card key={index} className="glass-card">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-indigo-400 mr-2" />
                <p className="text-xl font-bold text-indigo-400">{stat.value}</p>
              </div>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 