import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Profile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        <Button>Edit Profile</Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <div className="h-full w-full rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold">
              JD
            </div>
          </Avatar>
          <div>
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p className="text-muted-foreground">Computer Science</p>
            <p className="text-muted-foreground">Roll No: CS2023001</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input value="john.doe@university.edu" disabled />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input value="+1 (555) 123-4567" disabled />
          </div>
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input value="January 1, 2000" disabled />
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Input value="123 University Ave, City, State 12345" disabled />
          </div>
        </div>
      </Card>
    </div>
  );
} 