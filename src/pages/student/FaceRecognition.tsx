import { useState } from "react";
import { Scan, Camera, CheckCircle, XCircle, Clock, User, Calendar, MapPin } from "lucide-react";

const scanHistory = [
  {
    id: 1,
    date: "2024-01-20",
    time: "09:15 AM",
    subject: "Mathematics",
    room: "A101",
    status: "success",
    confidence: 98.5
  },
  {
    id: 2,
    date: "2024-01-20",
    time: "11:05 AM",
    subject: "Physics",
    room: "B205",
    status: "success",
    confidence: 97.2
  },
  {
    id: 3,
    date: "2024-01-19",
    time: "09:10 AM",
    subject: "Chemistry",
    room: "C303",
    status: "failed",
    confidence: 45.8
  },
  {
    id: 4,
    date: "2024-01-19",
    time: "14:00 PM",
    subject: "Computer Science",
    room: "Lab 1",
    status: "success",
    confidence: 99.1
  },
  {
    id: 5,
    date: "2024-01-18",
    time: "11:00 AM",
    subject: "English",
    room: "A102",
    status: "success",
    confidence: 96.8
  }
];

export const FaceRecognition = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [showCamera, setShowCamera] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setShowCamera(true);
    setScanResult(null);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        success: Math.random() > 0.2, // 80% success rate
        confidence: Math.random() * 20 + 80, // 80-100% confidence
        timestamp: new Date().toLocaleTimeString(),
        subject: "Current Class", // This would be determined by current time/schedule
        room: "A101"
      });
    }, 3000);
  };

  const closeScan = () => {
    setShowCamera(false);
    setScanResult(null);
    setIsScanning(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle size={20} className="text-green-400" />;
      case "failed":
        return <XCircle size={20} className="text-red-400" />;
      default:
        return <Clock size={20} className="text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "status-good";
      case "failed":
        return "status-danger";
      default:
        return "status-pending";
    }
  };

  const successfulScans = scanHistory.filter(scan => scan.status === 'success').length;
  const averageConfidence = scanHistory.reduce((sum, scan) => sum + scan.confidence, 0) / scanHistory.length;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Face Recognition</h1>
        <p className="text-gray-400">Secure attendance with biometric scanning</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-white">{scanHistory.length}</div>
          <div className="text-sm text-gray-400">Total Scans</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-green-400">{successfulScans}</div>
          <div className="text-sm text-gray-400">Successful</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-indigo-400">{averageConfidence.toFixed(1)}%</div>
          <div className="text-sm text-gray-400">Avg Confidence</div>
        </div>
      </div>

      {/* Scan Interface */}
      <div className="glass-card p-6">
        {!showCamera ? (
          <>
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={40} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ready to Scan</h3>
              <p className="text-gray-400">Position your face in front of the camera for attendance</p>
            </div>
            
            <button
              onClick={startScan}
              className="w-full p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Scan size={20} />
              <span>Start Face Scan</span>
            </button>
          </>
        ) : (
          <div className="text-center">
            {/* Camera Preview Placeholder */}
            <div className="w-full h-64 bg-gray-800 rounded-2xl mb-4 flex items-center justify-center border-2 border-indigo-500/30">
              {isScanning ? (
                <div className="text-center">
                  <div className="w-32 h-32 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-white font-medium">Scanning...</p>
                  <p className="text-gray-400 text-sm">Please keep your face centered</p>
                </div>
              ) : scanResult ? (
                <div className="text-center">
                  {scanResult.success ? (
                    <div className="text-center">
                      <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                      <h4 className="text-lg font-bold text-white mb-2">Scan Successful!</h4>
                      <p className="text-gray-300 mb-2">Confidence: {scanResult.confidence.toFixed(1)}%</p>
                      <p className="text-gray-400 text-sm">Attendance marked for {scanResult.subject}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <XCircle size={48} className="text-red-400 mx-auto mb-4" />
                      <h4 className="text-lg font-bold text-white mb-2">Scan Failed</h4>
                      <p className="text-gray-300 mb-2">Confidence: {scanResult.confidence.toFixed(1)}%</p>
                      <p className="text-gray-400 text-sm">Please try again with better lighting</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <Camera size={48} className="text-indigo-400 mx-auto mb-4" />
                  <p className="text-white">Camera Ready</p>
                </div>
              )}
            </div>

            <div className="flex space-x-3">
              {scanResult ? (
                <>
                  <button
                    onClick={closeScan}
                    className="flex-1 p-3 glass-button rounded-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    Close
                  </button>
                  {!scanResult.success && (
                    <button
                      onClick={startScan}
                      className="flex-1 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-glow transition-all duration-300"
                    >
                      Try Again
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={closeScan}
                  disabled={isScanning}
                  className="w-full p-3 glass-button rounded-2xl text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Scan History */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2">Recent Scans</h3>
        
        {scanHistory.map((scan, index) => (
          <div 
            key={scan.id}
            className="glass-card p-4 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getStatusIcon(scan.status)}
                <div>
                  <h4 className="text-white font-semibold">{scan.subject}</h4>
                  <p className="text-sm text-gray-400">{scan.room}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(scan.status)}`}>
                {scan.confidence.toFixed(1)}%
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar size={14} />
                <span>{new Date(scan.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>{scan.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 