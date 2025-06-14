
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Search, Calendar, Clock, Check, X, Eye } from 'lucide-react';

const ManageStudentLeavePage: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Mock data
  const leaveApplications = [
    {
      id: 1,
      studentName: 'John Doe',
      usn: 'CS21001',
      leaveType: 'Medical',
      startDate: '2024-01-25',
      endDate: '2024-01-27',
      reason: 'Fever and need to rest at home as advised by doctor',
      status: 'pending',
      appliedDate: '2024-01-23',
      documents: ['medical_certificate.pdf']
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      usn: 'CS21002',
      leaveType: 'Personal',
      startDate: '2024-01-30',
      endDate: '2024-01-30',
      reason: 'Family function attendance required',
      status: 'approved',
      appliedDate: '2024-01-20',
      documents: []
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      usn: 'CS21003',
      leaveType: 'Emergency',
      startDate: '2024-01-28',
      endDate: '2024-01-29',
      reason: 'Family emergency - need to travel immediately',
      status: 'rejected',
      appliedDate: '2024-01-27',
      documents: [],
      rejectionReason: 'Insufficient notice period'
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      usn: 'CS21004',
      leaveType: 'Medical',
      startDate: '2024-02-01',
      endDate: '2024-02-03',
      reason: 'Surgery scheduled and recovery time needed',
      status: 'pending',
      appliedDate: '2024-01-24',
      documents: ['surgery_appointment.pdf', 'doctor_note.pdf']
    },
  ];

  const filteredApplications = leaveApplications.filter(app => {
    const matchesSearch = 
      app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.usn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'approved':
        return { label: 'Approved', color: 'bg-green-100 text-green-800' };
      case 'rejected':
        return { label: 'Rejected', color: 'bg-red-100 text-red-800' };
      case 'pending':
        return { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' };
      default:
        return { label: 'Unknown', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const handleApprove = (application: any) => {
    toast({
      title: "Leave Approved",
      description: `Leave application for ${application.studentName} has been approved.`,
    });
  };

  const handleReject = (application: any) => {
    toast({
      title: "Leave Rejected",
      description: `Leave application for ${application.studentName} has been rejected.`,
      variant: "destructive"
    });
  };

  const handleViewDetails = (application: any) => {
    toast({
      title: "View Details",
      description: `Viewing details for ${application.studentName}'s leave application.`,
    });
  };

  const calculateDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const statusCounts = {
    pending: leaveApplications.filter(app => app.status === 'pending').length,
    approved: leaveApplications.filter(app => app.status === 'approved').length,
    rejected: leaveApplications.filter(app => app.status === 'rejected').length,
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-6 max-w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
              Manage Student Leaves
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Review and manage student leave applications
            </p>
          </div>
          <Badge variant="outline" className="flex items-center gap-2 w-fit">
            <Calendar className="h-4 w-4" />
            {statusCounts.pending} Pending
          </Badge>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{statusCounts.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-green-600">{statusCounts.approved}</p>
              </div>
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{statusCounts.rejected}</p>
              </div>
              <X className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Leave Applications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        {filteredApplications.map((application, index) => {
          const statusInfo = getStatusInfo(application.status);
          const totalDays = calculateDays(application.startDate, application.endDate);
          
          return (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{application.studentName}</CardTitle>
                      <CardDescription>
                        {application.usn} • {application.leaveType} Leave • {totalDays} day{totalDays > 1 ? 's' : ''}
                      </CardDescription>
                    </div>
                    <Badge className={statusInfo.color}>
                      {statusInfo.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Leave Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Leave Period</p>
                        <p className="font-medium">
                          {new Date(application.startDate).toLocaleDateString()} - {new Date(application.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Applied On</p>
                        <p className="font-medium">{new Date(application.appliedDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Reason</p>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-md">{application.reason}</p>
                    </div>

                    {/* Documents */}
                    {application.documents.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Attached Documents</p>
                        <div className="flex flex-wrap gap-2">
                          {application.documents.map((doc, idx) => (
                            <Badge key={idx} variant="outline">{doc}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Rejection Reason */}
                    {application.status === 'rejected' && application.rejectionReason && (
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Rejection Reason</p>
                        <p className="text-red-700 bg-red-50 p-3 rounded-md">{application.rejectionReason}</p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewDetails(application)}
                        className="flex-1 sm:flex-none"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      
                      {application.status === 'pending' && (
                        <>
                          <Button 
                            size="sm"
                            onClick={() => handleApprove(application)}
                            className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleReject(application)}
                            className="flex-1 sm:flex-none"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}

        {filteredApplications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card>
              <CardContent className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No leave applications found</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ManageStudentLeavePage;
