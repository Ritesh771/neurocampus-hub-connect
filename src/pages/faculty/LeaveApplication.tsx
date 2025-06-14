import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, FileText, Clock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

export const LeaveApplication = () => {
  const { toast } = useToast();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const leaveTypes = [
    { value: "sick", label: "Sick Leave" },
    { value: "casual", label: "Casual Leave" },
    { value: "emergency", label: "Emergency Leave" },
    { value: "personal", label: "Personal Leave" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async () => {
    if (!startDate || !endDate || !leaveType || !reason.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (endDate < startDate) {
      toast({
        title: "Error",
        description: "End date cannot be before start date",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Leave Application Submitted",
      description: "Your leave application has been submitted successfully",
    });
    
    // Reset form
    setStartDate(undefined);
    setEndDate(undefined);
    setLeaveType("");
    setReason("");
    setIsSubmitting(false);
  };

  const getLeaveTypeColor = (type: string) => {
    switch (type) {
      case "sick": return "text-red-400";
      case "casual": return "text-blue-400";
      case "emergency": return "text-orange-400";
      case "personal": return "text-purple-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-blue-500/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <FileText className="h-6 w-6 text-blue-400" />
          Leave Application
        </h1>
        <p className="text-white/70">Submit a leave application for approval.</p>
      </div>

      {/* Leave Application Form */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Application Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Leave Type */}
          <div>
            <label className="text-white/70 text-sm mb-2 block">Leave Type</label>
            <Select value={leaveType} onValueChange={setLeaveType}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select leave type" />
              </SelectTrigger>
              <SelectContent>
                {leaveTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <span className={getLeaveTypeColor(type.value)}>{type.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Start Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal bg-white/5 border-white/20 text-white hover:bg-white/10 ${
                      !startDate && "text-white/50"
                    }`}
                  >
                    {startDate ? format(startDate, "PPP") : "Select start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-black/90 border-white/10">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="bg-transparent text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-white/70 text-sm mb-2 block flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                End Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal bg-white/5 border-white/20 text-white hover:bg-white/10 ${
                      !endDate && "text-white/50"
                    }`}
                  >
                    {endDate ? format(endDate, "PPP") : "Select end date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-black/90 border-white/10">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="bg-transparent text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="text-white/70 text-sm mb-2 block">Reason for Leave</label>
            <Textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please provide a detailed reason for your leave..."
              className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting Application...
              </div>
            ) : (
              "Submit Application"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Leave Policy Information */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            Leave Policy Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
              <p className="text-yellow-400 text-sm font-medium">Sick Leave</p>
              <p className="text-white/60 text-xs mt-1">15 days per year</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
              <p className="text-blue-400 text-sm font-medium">Casual Leave</p>
              <p className="text-white/60 text-xs mt-1">12 days per year</p>
            </div>
            <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-400/20">
              <p className="text-orange-400 text-sm font-medium">Emergency Leave</p>
              <p className="text-white/60 text-xs mt-1">5 days per year</p>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
              <p className="text-purple-400 text-sm font-medium">Personal Leave</p>
              <p className="text-white/60 text-xs mt-1">10 days per year</p>
            </div>
          </div>
          <p className="text-white/60 text-sm">
            Note: Leave applications should be submitted at least 3 days in advance for planned leaves.
            Emergency leaves can be applied on the same day.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}; 