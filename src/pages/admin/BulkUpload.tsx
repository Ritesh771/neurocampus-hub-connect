import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, Download, AlertCircle } from 'lucide-react';

const templates = [
  { value: 'students', label: 'Students Template' },
  { value: 'faculty', label: 'Faculty Template' },
  { value: 'hod', label: 'HOD Template' }
];

export function BulkUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [templateType, setTemplateType] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('idle');
      setErrorMessage('');
    }
  };

  const handleTemplateDownload = () => {
    // TODO: Implement template download logic
    console.log('Downloading template:', templateType);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !templateType) {
      setErrorMessage('Please select both a file and template type');
      return;
    }

    setUploadStatus('uploading');
    try {
      // TODO: Implement file upload logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated upload
      setUploadStatus('success');
      setSelectedFile(null);
    } catch (error) {
      setUploadStatus('error');
      setErrorMessage('Failed to upload file. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Bulk Upload</h1>
        <p className="text-gray-400">Upload multiple users at once using CSV templates</p>
      </div>

      {/* Upload Form */}
      <Card className="glass-card p-6">
        <form onSubmit={handleUpload} className="space-y-6">
          {/* Template Selection */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Download Template</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="template">Select Template Type</Label>
                <Select
                  value={templateType}
                  onValueChange={setTemplateType}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select template type" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.value} value={template.value}>
                        {template.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="button"
                variant="outline"
                className="md:self-end"
                onClick={handleTemplateDownload}
                disabled={!templateType}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Upload File</h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="file">Select CSV File</Label>
                  <div className="relative">
                    <Input
                      id="file"
                      type="file"
                      accept=".csv"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="md:self-end bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  disabled={!selectedFile || uploadStatus === 'uploading'}
                >
                  {uploadStatus === 'uploading' ? (
                    <>
                      <Upload className="w-4 h-4 mr-2 animate-bounce" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload File
                    </>
                  )}
                </Button>
              </div>

              {/* Status Messages */}
              {selectedFile && (
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">{selectedFile.name}</span>
                </div>
              )}

              {errorMessage && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {uploadStatus === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <FileText className="w-4 h-4" />
                  <span>File uploaded successfully!</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </Card>

      {/* Instructions */}
      <Card className="glass-card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Instructions</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">1.</span>
            Download the appropriate template for the type of users you want to upload
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">2.</span>
            Fill in the template with user information following the format
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">3.</span>
            Save the file in CSV format
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">4.</span>
            Upload the file using the form above
          </li>
        </ul>
      </Card>
    </div>
  );
} 