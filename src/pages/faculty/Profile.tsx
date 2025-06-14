import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Edit, Lock, Camera } from "lucide-react";
import { useState } from "react";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Anjali Sharma",
    email: "anjali.sharma@university.edu",
    phone: "+91 9876543210",
    department: "Computer Science",
    designation: "Associate Professor",
    employeeId: "EMP001",
    joiningDate: "2018-08-15",
    address: "123, Faculty Colony, University Campus"
  });

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <User className="h-6 w-6 text-gray-400" />
          Profile
        </h1>
        <p className="text-white/70">Manage your personal information and account settings.</p>
      </div>

      {/* Profile Card */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Personal Information</CardTitle>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Profile Picture Section */}
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-white/20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
                  AS
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-400/30"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-white/70">{profile.designation}</p>
              <p className="text-white/60">{profile.department} Department</p>
              <p className="text-white/50 text-sm">Employee ID: {profile.employeeId}</p>
            </div>
          </div>

          {/* Personal Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-blue-400" />
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Full Name</label>
                  <Input
                    value={profile.name}
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Department</label>
                  <Input
                    value={profile.department}
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Designation</label>
                  <Input
                    value={profile.designation}
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Joining Date</label>
                  <Input
                    value={profile.joiningDate}
                    disabled={!isEditing}
                    type="date"
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email Address</label>
                  <Input
                    value={profile.email}
                    disabled={!isEditing}
                    type="email"
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Phone Number</label>
                  <Input
                    value={profile.phone}
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-white/70 text-sm mb-2">Address</label>
                  <Input
                    value={profile.address}
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-3 mt-8">
              <Button className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-400/30">
                Save Changes
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Lock className="h-5 w-5 text-yellow-400" />
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <h4 className="text-white font-medium">Change Password</h4>
                <p className="text-white/60 text-sm">Update your account password</p>
              </div>
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                Change
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div>
                <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                <p className="text-white/60 text-sm">Add an extra layer of security</p>
              </div>
              <Button
                variant="outline"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
              >
                Enable
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 