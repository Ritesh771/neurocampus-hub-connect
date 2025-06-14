import { useState } from "react";
import { Award, Upload, Download, Eye, FileText, Calendar, Plus } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Academic Excellence Award",
    description: "Certificate for outstanding academic performance in Computer Science",
    uploadDate: "2024-01-15",
    type: "Academic",
    status: "verified",
    fileSize: "2.3 MB",
    fileName: "academic-excellence-2024.pdf"
  },
  {
    id: 2,
    title: "Sports Achievement Certificate",
    description: "Inter-college basketball championship winner",
    uploadDate: "2024-01-10",
    type: "Sports",
    status: "pending",
    fileSize: "1.8 MB",
    fileName: "sports-certificate.pdf"
  },
  {
    id: 3,
    title: "Technical Workshop Certificate",
    description: "Completion certificate for AI/ML workshop",
    uploadDate: "2024-01-05",
    type: "Technical",
    status: "verified",
    fileSize: "1.2 MB",
    fileName: "workshop-ai-ml.pdf"
  }
];

export const Certificates = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    type: "",
    file: null as File | null
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadForm(prev => ({ ...prev, file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Certificate uploaded:", uploadForm);
    setShowUploadForm(false);
    setUploadForm({
      title: "",
      description: "",
      type: "",
      file: null
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "status-good";
      case "pending":
        return "status-pending";
      case "rejected":
        return "status-danger";
      default:
        return "status-pending";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "academic":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "sports":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "technical":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  if (showUploadForm) {
    return (
      <div className="p-4 space-y-6">
        <div className="text-center pt-4">
          <h1 className="text-2xl font-bold text-white mb-2">Upload Certificate</h1>
          <p className="text-gray-400">Add a new certificate to your collection</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Certificate Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Academic Excellence Award"
                  className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of the certificate..."
                  rows={3}
                  className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Type</label>
                <select
                  value={uploadForm.type}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full p-3 bg-glass border border-glass-border rounded-2xl text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                >
                  <option value="">Select type</option>
                  <option value="Academic" className="bg-navy-800">Academic</option>
                  <option value="Sports" className="bg-navy-800">Sports</option>
                  <option value="Technical" className="bg-navy-800">Technical</option>
                  <option value="Cultural" className="bg-navy-800">Cultural</option>
                  <option value="Other" className="bg-navy-800">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Upload File</h3>
            
            <div className="relative">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                id="certificate-file"
                required
              />
              <label
                htmlFor="certificate-file"
                className="w-full p-6 bg-glass border-2 border-dashed border-glass-border rounded-2xl text-center cursor-pointer hover:bg-white/10 transition-colors"
              >
                <Upload size={32} className="text-indigo-400 mx-auto mb-2" />
                <div className="text-white font-medium mb-1">
                  {uploadForm.file ? uploadForm.file.name : "Choose certificate file"}
                </div>
                <div className="text-sm text-gray-400">
                  PDF, JPG, PNG (Max: 5MB)
                </div>
              </label>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setShowUploadForm(false)}
              className="flex-1 p-3 glass-button rounded-2xl text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              Upload Certificate
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-4">
        <h1 className="text-2xl font-bold text-white mb-2">Certificates</h1>
        <p className="text-gray-400">Manage your academic and achievement certificates</p>
      </div>

      {/* Upload Button */}
      <button
        onClick={() => setShowUploadForm(true)}
        className="w-full glass-card p-4 hover:shadow-glow transition-all duration-300 border-2 border-dashed border-indigo-500/30 hover:border-indigo-500/50"
      >
        <div className="flex items-center justify-center space-x-3 text-indigo-400">
          <Plus size={24} />
          <span className="text-lg font-medium">Upload New Certificate</span>
        </div>
      </button>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-white">{certificates.length}</div>
          <div className="text-sm text-gray-400">Total</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-green-400">
            {certificates.filter(c => c.status === 'verified').length}
          </div>
          <div className="text-sm text-gray-400">Verified</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-xl font-bold text-yellow-400">
            {certificates.filter(c => c.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-400">Pending</div>
        </div>
      </div>

      {/* Certificates List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white px-2">My Certificates</h3>
        
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            className="glass-card p-5 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{cert.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{new Date(cert.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <span>•</span>
                  <span>{cert.fileSize}</span>
                </div>
              </div>
              
              <div className="ml-4 text-right">
                <div className={`px-3 py-1 rounded-full text-sm border mb-2 ${getStatusColor(cert.status)}`}>
                  {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs border ${getTypeColor(cert.type)}`}>
                  {cert.type}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-3 border-t border-gray-700">
              <button className="flex-1 flex items-center justify-center space-x-2 p-3 glass-button rounded-2xl hover:shadow-glow transition-all duration-300">
                <Eye size={16} className="text-indigo-400" />
                <span className="text-sm text-white">View</span>
              </button>
              
              <button className="flex-1 flex items-center justify-center space-x-2 p-3 glass-button rounded-2xl hover:shadow-glow transition-all duration-300">
                <Download size={16} className="text-indigo-400" />
                <span className="text-sm text-white">Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
          <Award size={20} className="mr-2 text-indigo-400" />
          Tips
        </h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Upload clear, high-resolution scans for faster verification</li>
          <li>• Include all relevant details in the description</li>
          <li>• Verification typically takes 2-3 business days</li>
          <li>• Keep digital copies as backup</li>
        </ul>
      </div>
    </div>
  );
}; 