import { CheckCircle, Clock, XCircle, Calendar, FileText, User } from "lucide-react";

const leaveRequests = [
  {
    id: 1,
    fromDate: "2024-01-15",
    toDate: "2024-01-17",
    type: "Medical Leave",
    reason: "Fever and cold symptoms, doctor advised rest",
    status: "approved",
    submittedDate: "2024-01-10",
    approvedBy: "Dr. Smith",
    approvedDate: "2024-01-11",
    days: 3
  },
  {
    id: 2,
    fromDate: "2024-01-22",
    toDate: "2024-01-22",
    type: "Personal Leave",
    reason: "Family function attendance",
    status: "pending",
    submittedDate: "2024-01-18",
    days: 1
  },
  {
    id: 3,
    fromDate: "2024-01-08",
    toDate: "2024-01-09",
    type: "Academic Conference",
    reason: "National Science Conference participation",
    status: "rejected",
    submittedDate: "2024-01-02",
    rejectedBy: "Prof. Johnson",
    rejectedDate: "2024-01-05",
    rejectionReason: "Insufficient notice period",
    days: 2
  },
  {
    id: 4,
    fromDate: "2024-01-25",
    toDate: "2024-01-26",
    type: "Family Emergency",
    reason: "Grandmother's hospitalization",
    status: "approved",
    submittedDate: "2024-01-24",
    approvedBy: "Dr. Williams",
    approvedDate: "2024-01-24",
    days: 2
  }
];

export const LeaveStatus = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle size={20} className="text-green-400" />;
      case "pending":
        return <Clock size={20} className="text-yellow-400" />;
      case "rejected":
        return <XCircle size={20} className="text-red-400" />;
      default:
        return <Clock size={20} className="text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "status-good";
      case "pending":
        return "status-pending";
      case "rejected":
        return "status-danger";
      default:
        return "status-pending";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const totalRequests = leaveRequests.length;
  const approvedRequests = leaveRequests.filter(req => req.status === 'approved').length;
  const pendingRequests = leaveRequests.filter(req => req.status === 'pending').length;
  const rejectedRequests = leaveRequests.filter(req => req.status === 'rejected').length;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Leave Status</h1>
        <p className="text-gray-400">Track your leave applications</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-3">
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-white">{totalRequests}</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-green-400">{approvedRequests}</div>
          <div className="text-xs text-gray-400">Approved</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-yellow-400">{pendingRequests}</div>
          <div className="text-xs text-gray-400">Pending</div>
        </div>
        <div className="glass-card p-3 text-center">
          <div className="text-lg font-bold text-red-400">{rejectedRequests}</div>
          <div className="text-xs text-gray-400">Rejected</div>
        </div>
      </div>

      {/* Leave Requests List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2">Recent Requests</h3>
        
        {leaveRequests.map((request, index) => (
          <div 
            key={request.id}
            className="glass-card p-5 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(request.status)}
                <div>
                  <h4 className="text-lg font-semibold text-white">{request.type}</h4>
                  <p className="text-sm text-gray-400">#{request.id} • {request.days} day(s)</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(request.status)}`}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-center space-x-2 mb-3 text-sm text-gray-300">
              <Calendar size={16} className="text-indigo-400" />
              <span>{formatDate(request.fromDate)} - {formatDate(request.toDate)}</span>
            </div>

            {/* Reason */}
            <div className="flex items-start space-x-2 mb-4 text-sm">
              <FileText size={16} className="text-indigo-400 mt-0.5" />
              <p className="text-gray-300">{request.reason}</p>
            </div>

            {/* Timeline */}
            <div className="border-t border-gray-700 pt-3 space-y-2 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Submitted:</span>
                <span>{formatDate(request.submittedDate)}</span>
              </div>
              
              {request.status === 'approved' && (
                <>
                  <div className="flex justify-between text-green-400">
                    <span>Approved by:</span>
                    <span>{request.approvedBy}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Approved on:</span>
                    <span>{formatDate(request.approvedDate!)}</span>
                  </div>
                </>
              )}
              
              {request.status === 'rejected' && (
                <>
                  <div className="flex justify-between text-red-400">
                    <span>Rejected by:</span>
                    <span>{request.rejectedBy}</span>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span>Rejected on:</span>
                    <span>{formatDate(request.rejectedDate!)}</span>
                  </div>
                  {request.rejectionReason && (
                    <div className="mt-2 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-xs">
                        <strong>Reason:</strong> {request.rejectionReason}
                      </p>
                    </div>
                  )}
                </>
              )}
              
              {request.status === 'pending' && (
                <div className="text-yellow-400 text-center py-2">
                  <Clock size={16} className="inline mr-1" />
                  Awaiting approval...
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full p-3 glass-button rounded-2xl text-left hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3">
              <FileText size={20} className="text-indigo-400" />
              <div>
                <div className="text-white font-medium">New Leave Request</div>
                <div className="text-sm text-gray-400">Submit a new application</div>
              </div>
            </div>
          </button>
          
          <button className="w-full p-3 glass-button rounded-2xl text-left hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3">
              <Calendar size={20} className="text-indigo-400" />
              <div>
                <div className="text-white font-medium">Leave Balance</div>
                <div className="text-sm text-gray-400">Check remaining days</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}; 