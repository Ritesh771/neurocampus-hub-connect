import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clipboard, Check, X, Search, Filter } from "lucide-react";
import { useState } from "react";

const leaveApplications = [
  {
    id: 1,
    studentName: "Arjun Sharma",
    usn: "1MS21CS001",
    fromDate: "2024-06-15",
    toDate: "2024-06-17",
    reason: "Family function",
    status: "pending",
    appliedDate: "2024-06-10"
  },
  {
    id: 2,
    studentName: "Priya Kumari",
    usn: "1MS21CS025",
    fromDate: "2024-06-20",
    toDate: "2024-06-20",
    reason: "Medical appointment",
    status: "approved",
    appliedDate: "2024-06-08"
  },
  {
    id: 3,
    studentName: "Rohit Verma",
    usn: "1MS21CS042",
    fromDate: "2024-06-12",
    toDate: "2024-06-14",
    reason: "Personal work",
    status: "rejected",
    appliedDate: "2024-06-05"
  },
  {
    id: 4,
    studentName: "Sneha Reddy",
    usn: "1MS21CS058",
    fromDate: "2024-06-18",
    toDate: "2024-06-19",
    reason: "Sister's wedding",
    status: "pending",
    appliedDate: "2024-06-09"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <Badge className="bg-green-500/20 text-green-300 border-green-400/30">Approved</Badge>;
    case "pending":
      return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">Pending</Badge>;
    case "rejected":
      return <Badge className="bg-red-500/20 text-red-300 border-red-400/30">Rejected</Badge>;
    default:
      return null;
  }
};

export const ManageStudentLeave = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApplications = leaveApplications.filter(app => {
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.usn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 glass glow">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Clipboard className="h-6 w-6 text-red-400" />
          Manage Student Leave
        </h1>
        <p className="text-white/70">Review and approve student leave applications.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            <Input
              placeholder="Search by name or USN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
        </div>
        <Button
          variant="outline"
          className="bg-white/5 border-white/10 text-white hover:bg-white/10"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Leave Applications Table */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 glass">
        <CardHeader>
          <CardTitle className="text-white">Leave Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-white/70">Student</TableHead>
                  <TableHead className="text-white/70">Duration</TableHead>
                  <TableHead className="text-white/70">Reason</TableHead>
                  <TableHead className="text-white/70">Status</TableHead>
                  <TableHead className="text-white/70">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id} className="border-white/10 hover:bg-white/5">
                    <TableCell>
                      <div>
                        <div className="text-white font-medium">{application.studentName}</div>
                        <div className="text-white/60 text-sm">{application.usn}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-white">
                        {new Date(application.fromDate).toLocaleDateString()} - {new Date(application.toDate).toLocaleDateString()}
                      </div>
                      <div className="text-white/60 text-sm">
                        Applied: {new Date(application.appliedDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-white/80 max-w-32 truncate">
                      {application.reason}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(application.status)}
                    </TableCell>
                    <TableCell>
                      {application.status === "pending" && (
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-500/20 text-green-300 hover:bg-green-500/30 border-green-400/30">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-red-500/20 text-red-300 hover:bg-red-500/30 border-red-400/30">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 