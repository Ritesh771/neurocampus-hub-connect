
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useAuth } from '@/context/AuthContext';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account details and profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-32">
                  <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center relative mx-auto md:mx-0">
                    {user?.profilePic ? (
                      <img 
                        src={user.profilePic} 
                        alt={user?.name} 
                        className="w-32 h-32 rounded-full" 
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={user?.name || ""} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue={user?.email || ""} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input id="role" value={user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || ""} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">About</Label>
                    <textarea 
                      id="bio" 
                      className="w-full min-h-[100px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      defaultValue="Computer Science educator with 10 years of experience teaching Operating Systems, Networks, and Web Development."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Computer Science & Engineering" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input id="designation" defaultValue="Assistant Professor" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="joining-date">Joining Date</Label>
                  <Input id="joining-date" type="date" defaultValue="2020-06-15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-id">Employee ID</Label>
                  <Input id="employee-id" defaultValue="FAC2020035" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how you want to receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                {[
                  { id: 'email-assignments', label: 'Assignment Updates', defaultChecked: true },
                  { id: 'email-announcements', label: 'Course Announcements', defaultChecked: true },
                  { id: 'email-messages', label: 'New Messages', defaultChecked: false },
                  { id: 'email-grades', label: 'Grade Updates', defaultChecked: true },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <Label htmlFor={item.id}>{item.label}</Label>
                    <Switch id={item.id} defaultChecked={item.defaultChecked} />
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Push Notifications</h3>
                {[
                  { id: 'push-assignments', label: 'Assignment Updates', defaultChecked: true },
                  { id: 'push-announcements', label: 'Course Announcements', defaultChecked: true },
                  { id: 'push-messages', label: 'New Messages', defaultChecked: true },
                  { id: 'push-grades', label: 'Grade Updates', defaultChecked: true },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <Label htmlFor={item.id}>{item.label}</Label>
                    <Switch id={item.id} defaultChecked={item.defaultChecked} />
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">System Notifications</h3>
                {[
                  { id: 'system-maintenance', label: 'System Maintenance', defaultChecked: true },
                  { id: 'system-updates', label: 'System Updates', defaultChecked: false },
                  { id: 'system-alerts', label: 'Security Alerts', defaultChecked: true },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <Label htmlFor={item.id}>{item.label}</Label>
                    <Switch id={item.id} defaultChecked={item.defaultChecked} />
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how the application looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Theme</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'theme-light', name: 'Light', selected: true },
                    { id: 'theme-dark', name: 'Dark', selected: false },
                    { id: 'theme-system', name: 'System', selected: false },
                  ].map((theme) => (
                    <div
                      key={theme.id}
                      className={`border rounded-md p-4 cursor-pointer ${
                        theme.selected ? 'border-primary bg-primary/5' : 'hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{theme.name}</span>
                        {theme.selected && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Text Size</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {[
                    { id: 'text-xs', name: 'Small', selected: false },
                    { id: 'text-sm', name: 'Medium', selected: false },
                    { id: 'text-md', name: 'Large', selected: true },
                    { id: 'text-lg', name: 'Extra Large', selected: false },
                  ].map((size) => (
                    <div
                      key={size.id}
                      className={`border rounded-md p-4 cursor-pointer ${
                        size.selected ? 'border-primary bg-primary/5' : 'hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{size.name}</span>
                        {size.selected && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">Animations</Label>
                  <Switch id="animations" defaultChecked={true} />
                </div>
                <p className="text-sm text-gray-500">Enable or disable animations throughout the application</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Password Settings</CardTitle>
              <CardDescription>
                Update your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Secure your account with 2FA</p>
                </div>
                <Switch id="2fa" defaultChecked={false} />
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  Two-factor authentication adds an extra layer of security to your account. In addition to your password, you'll need to enter a code sent to your phone.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Setup Two-Factor Authentication</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Login Activity</CardTitle>
              <CardDescription>
                Review your recent account activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { device: 'Chrome on Windows', location: 'Bangalore, India', time: 'Current session', ip: '103.68.219.xxx' },
                  { device: 'Safari on iPhone', location: 'Bangalore, India', time: '2 days ago', ip: '103.68.220.xxx' },
                  { device: 'Firefox on MacOS', location: 'Chennai, India', time: '5 days ago', ip: '152.57.110.xxx' },
                ].map((session, i) => (
                  <div key={i} className="flex justify-between items-center border-b last:border-0 pb-3 last:pb-0">
                    <div>
                      <p className="font-medium">{session.device}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">{session.location}</span>
                        <span className="mx-1 text-gray-500">•</span>
                        <span className="text-xs text-gray-500">IP: {session.ip}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-xs ${i === 0 ? 'text-green-500' : 'text-gray-500'} mr-2`}>
                        {session.time}
                      </span>
                      {i !== 0 && (
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline">Log Out of All Devices</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
