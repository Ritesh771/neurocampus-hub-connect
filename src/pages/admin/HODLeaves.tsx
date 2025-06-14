import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Search, Check, X, Clock, Calendar, Building2 } from 'lucide-react';

const leaveRequestsData = [
  {
    id: 1,
    hod: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    type: 'Annual Leave',
    startDate: '2024-03-20',
    endDate: '2024-03-25',
    reason: 'Family vacation',
    status: 'pending',
    appliedOn: '2024-03-15'
  },
  {
    id: 2,
    hod: 'Dr. Michael Chen',
    department: 'Electrical Engineering',
    type: 'Sick Leave',
    startDate: '2024-03-18',
    endDate: '2024-03-19',
    reason: 'Medical appointment',
    status: 'approved',
    appliedOn: '2024-03-17'
  },
  {
    id: 3,
    hod: 'Dr. Emily Davis',
    department: 'Civil Engineering',
    type: 'Conference Leave',
    startDate: '2024-04-01',
    endDate: '2024-04-03',
    reason: 'International conference attendance',
    status: 'rejected',
    appliedOn: '2024-03-14'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'approved':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'rejected':
      return 'bg-red-500/20 text-red-300 border-red-500/30';
    default:
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'approved':
      return <Check className="w-4 h-4" />;
    case 'rejected':
      return <X className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

export function HODLeaves() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredRequests = leaveRequestsData.filter(request => {
    const matchesSearch = request.hod.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || request.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id: number) => {
    // TODO: Implement approve logic
    console.log('Approving leave request:', id);
  };

  const handleReject = (id: number) => {
    // TODO: Implement reject logic
    console.log('Rejecting leave request:', id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">HOD Leave Requests</h1>
        <p className="text-gray-400">Manage and review leave requests from department heads</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by HOD or department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-card"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedStatus === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('all')}
          >
            All
          </Button>
          <Button
            variant={selectedStatus === 'pending' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('pending')}
          >
            Pending
          </Button>
          <Button
            variant={selectedStatus === 'approved' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('approved')}
          >
            Approved
          </Button>
          <Button
            variant={selectedStatus === 'rejected' ? 'default' : 'outline'}
            onClick={() => setSelectedStatus('rejected')}
          >
            Rejected
          </Button>
        </div>
      </div>

      {/* Leave Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <Card key={request.id} className="glass-card p-6 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">{request.department}</h3>
                  </div>
                  <p className="text-gray-300 mt-1">{request.hod}</p>
                </div>
                <Badge className={getStatusColor(request.status)}>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(request.status)}
                    <span className="capitalize">{request.status}</span>
                  </div>
                </Badge>
              </div>

              {/* Leave Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FileText className="w-4 h-4" />
                    <span>Leave Type</span>
                  </div>
                  <p className="text-white">{request.type}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Duration</span>
                  </div>
                  <p className="text-white">
                    {request.startDate} to {request.endDate}
                  </p>
                </div>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <p className="text-gray-400">Reason</p>
                <p className="text-white">{request.reason}</p>
              </div>

              {/* Actions */}
              {request.status === 'pending' && (
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    onClick={() => handleReject(request.id)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => handleApprove(request.id)}
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <Card className="glass-card p-6 text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Leave Requests Found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </Card>
      )}
    </div>
  );
} 