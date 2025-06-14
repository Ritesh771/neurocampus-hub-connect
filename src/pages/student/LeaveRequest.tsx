import { useState } from "react";
import { Calendar, FileText, Send, CheckCircle } from "lucide-react";

const leaveTypes = [
  "Medical Leave",
  "Personal Leave",
  "Family Emergency",
  "Academic Conference",
  "Sports Event",
  "Other"
];

export const LeaveRequest = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "",
    reason: "",
    attachment: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Leave request submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fromDate: "",
        toDate: "",
        leaveType: "",
        reason: "",
        attachment: null
      });
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachment: file }));
  };

  if (isSubmitted) {
    return (
      <div className="p-4 space-y-6">
        <div className="text-center pt-4">
          <h1 className="text-2xl font-bold text-white mb-2">Leave Request</h1>
          <p className="text-gray-400">Submit your leave application</p>
        </div>

        <div className="glass-card p-8 text-center animate-fade-in">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
          <p className="text-gray-400 mb-4">Your leave request has been submitted successfully and is pending approval.</p>
          <div className="text-sm text-indigo-400">You will be notified once it's reviewed.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Leave Request</h1>
        <p className="text-gray-400">Submit your leave application</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Calendar size={20} className="mr-2 text-indigo-400" />
            Select Dates
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">From Date</label>
              <input
                type="date"
                value={formData.fromDate}
                onChange={(e) => setFormData(prev => ({ ...prev, fromDate: e.target.value }))}
                className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">To Date</label>
              <input
                type="date"
                value={formData.toDate}
                onChange={(e) => setFormData(prev => ({ ...prev, toDate: e.target.value }))}
                className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        {/* Leave Type */}
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold text-white mb-4">Leave Type</h3>
          
          <select
            value={formData.leaveType}
            onChange={(e) => setFormData(prev => ({ ...prev, leaveType: e.target.value }))}
            className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          >
            <option value="">Select leave type</option>
            {leaveTypes.map((type) => (
              <option key={type} value={type} className="bg-navy-800">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Reason */}
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <FileText size={20} className="mr-2 text-indigo-400" />
            Reason for Leave
          </h3>
          
          <textarea
            value={formData.reason}
            onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            placeholder="Please provide a detailed reason for your leave request..."
            rows={4}
            className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            required
          />
        </div>

        {/* Attachment */}
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold text-white mb-4">Supporting Document (Optional)</h3>
          
          <div className="relative">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
              id="attachment"
            />
            <label
              htmlFor="attachment"
              className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-gray-400 cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText size={20} />
              <span>{formData.attachment ? formData.attachment.name : "Choose file..."}</span>
            </label>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max: 5MB)
          </p>
        </div>

        {/* Submit Button */}
        <div className="glass-card p-5">
          <button
            type="submit"
            disabled={!formData.fromDate || !formData.toDate || !formData.leaveType || !formData.reason}
            className="w-full p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Submit Leave Request</span>
          </button>
        </div>
      </form>

      {/* Guidelines */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Guidelines</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Submit requests at least 3 days in advance (except emergencies)</li>
          <li>• Medical leaves require a doctor's certificate</li>
          <li>• Academic conferences need approval letter</li>
          <li>• Response time: 2-3 working days</li>
        </ul>
      </div>
    </div>
  );
}; 