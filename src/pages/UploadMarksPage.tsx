
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Download, Save, FileSpreadsheet } from 'lucide-react';

const UploadMarksPage: React.FC = () => {
  const { toast } = useToast();
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTestType, setSelectedTestType] = useState('');
  
  const subjects = ['Computer Networks', 'Database Systems', 'Operating Systems', 'Software Engineering'];
  const testTypes = ['Assignment', 'Quiz', 'Mid Term', 'Final Exam', 'Lab Test'];
  
  const [students] = useState([
    { id: 1, name: 'John Doe', usn: 'CS21001', marks: '' },
    { id: 2, name: 'Jane Smith', usn: 'CS21002', marks: '' },
    { id: 3, name: 'Mike Johnson', usn: 'CS21003', marks: '' },
    { id: 4, name: 'Sarah Wilson', usn: 'CS21004', marks: '' },
    { id: 5, name: 'David Brown', usn: 'CS21005', marks: '' },
  ]);

  const [marks, setMarks] = useState(
    students.reduce((acc, student) => ({ ...acc, [student.id]: '' }), {})
  );

  const handleMarksChange = (studentId: number, value: string) => {
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setMarks(prev => ({ ...prev, [studentId]: value }));
    }
  };

  const handleSubmit = () => {
    if (!selectedSemester || !selectedSubject || !selectedTestType) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emptyMarks = Object.values(marks).some(mark => mark === '');
    if (emptyMarks) {
      toast({
        title: "Warning",
        description: "Some students have empty marks. Continue anyway?",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Marks uploaded successfully!",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File Upload",
        description: `Processing ${file.name}...`,
      });
    }
  };

  const downloadTemplate = () => {
    toast({
      title: "Download Started",
      description: "CSV template is being downloaded.",
    });
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
              Upload Marks
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Enter or upload student marks for assessments
            </p>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Assessment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Semester</label>
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <SelectItem key={sem} value={sem.toString()}>
                        Semester {sem}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(subject => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Test Type</label>
                <Select value={selectedTestType} onValueChange={setSelectedTestType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Test Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {testTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CSV Upload Option */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              CSV Upload
            </CardTitle>
            <CardDescription>
              Upload marks using a CSV file or enter manually below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label htmlFor="csv-upload">
                  <Button variant="outline" className="w-full sm:w-auto cursor-pointer" asChild>
                    <span className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload CSV
                    </span>
                  </Button>
                </label>
              </div>
              <Button variant="outline" onClick={downloadTemplate} className="w-full sm:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Manual Entry Table */}
      {selectedSemester && selectedSubject && selectedTestType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Enter Marks Manually</CardTitle>
              <CardDescription>
                {selectedTestType} - {selectedSubject} (Semester {selectedSemester})
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Student Name</th>
                      <th className="text-left p-3 font-medium">USN</th>
                      <th className="text-left p-3 font-medium">Marks (0-100)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <motion.tr
                        key={student.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-3">{student.name}</td>
                        <td className="p-3 text-gray-600">{student.usn}</td>
                        <td className="p-3">
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            placeholder="Enter marks"
                            value={marks[student.id]}
                            onChange={(e) => handleMarksChange(student.id, e.target.value)}
                            className="w-24"
                          />
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={handleSubmit} className="flex-1 sm:flex-none">
                  <Save className="h-4 w-4 mr-2" />
                  Submit Marks
                </Button>
                <Button variant="outline" className="flex-1 sm:flex-none">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default UploadMarksPage;
