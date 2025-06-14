import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Download, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const UploadMarks = () => {
  const { toast } = useToast();
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTestType, setSelectedTestType] = useState("");
  const [maxMarks, setMaxMarks] = useState(100);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const semesters = ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester"];
  
  const subjects = {
    "1st Semester": ["Mathematics I", "Physics", "Chemistry", "English"],
    "2nd Semester": ["Mathematics II", "Data Structures", "Computer Organization", "Digital Electronics"],
    "3rd Semester": ["Database Systems", "Operating Systems", "Computer Networks", "Software Engineering"],
    "4th Semester": ["Web Development", "Machine Learning", "Compiler Design", "Mobile Computing"],
  };

  const testTypes = [
    { value: "internal1", label: "Internal Assessment 1", maxMarks: 50 },
    { value: "internal2", label: "Internal Assessment 2", maxMarks: 50 },
    { value: "internal3", label: "Internal Assessment 3", maxMarks: 50 },
    { value: "midterm", label: "Mid-Term Examination", maxMarks: 100 },
    { value: "final", label: "Final Examination", maxMarks: 100 },
    { value: "assignment", label: "Assignment", maxMarks: 25 },
    { value: "project", label: "Project", maxMarks: 100 },
  ];

  const [students, setStudents] = useState([
    { id: "1", name: "John Doe", usn: "1BM19CS001", marks: "" },
    { id: "2", name: "Jane Smith", usn: "1BM19CS002", marks: "" },
    { id: "3", name: "Mike Johnson", usn: "1BM19CS003", marks: "" },
    { id: "4", name: "Sarah Wilson", usn: "1BM19CS004", marks: "" },
    { id: "5", name: "David Brown", usn: "1BM19CS005", marks: "" },
    { id: "6", name: "Emma Davis", usn: "1BM19CS006", marks: "" },
    { id: "7", name: "Chris Miller", usn: "1BM19CS007", marks: "" },
    { id: "8", name: "Lisa Anderson", usn: "1BM19CS008", marks: "" },
  ]);

  const updateMarks = (studentId: string, marks: string) => {
    setStudents(prev => prev.map(student => 
      student.id === studentId ? { ...student, marks } : student
    ));
  };

  const handleTestTypeChange = (testType: string) => {
    setSelectedTestType(testType);
    const selectedTest = testTypes.find(t => t.value === testType);
    if (selectedTest) {
      setMaxMarks(selectedTest.maxMarks);
    }
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const csv = e.target?.result as string;
      const lines = csv.split('\n');
      const data = lines.slice(1).map(line => {
        const [usn, marks] = line.split(',');
        return { usn: usn?.trim(), marks: marks?.trim() };
      });

      setStudents(prev => prev.map(student => {
        const csvData = data.find(d => d.usn === student.usn);
        return csvData ? { ...student, marks: csvData.marks } : student;
      }));

      toast({
        title: "CSV Uploaded",
        description: "Marks have been imported from CSV file",
      });
    };
    reader.readAsText(file);
  };

  const downloadTemplate = () => {
    const csvContent = "USN,Marks\n" + students.map(s => `${s.usn},`).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'marks_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async () => {
    if (!selectedSemester || !selectedSubject || !selectedTestType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const emptyMarks = students.filter(s => !s.marks.trim());
    if (emptyMarks.length > 0) {
      toast({
        title: "Warning",
        description: `${emptyMarks.length} students have empty marks. Continue anyway?`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Marks Uploaded",
      description: `Marks uploaded successfully for ${students.length} students`,
    });
    
    setIsSubmitting(false);
  };

  const clearAllMarks = () => {
    setStudents(prev => prev.map(student => ({ ...student, marks: "" })));
    toast({
      title: "Marks Cleared",
      description: "All marks have been cleared",
    });
  };

  const filledCount = students.filter(s => s.marks.trim()).length;

  return (
    <div className="space-y-6 pb-6">
      <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg shadow-purple-500/10">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Upload className="h-6 w-6 text-purple-400" />
          Upload Marks
        </h1>
        <p className="text-white/70">Upload student marks for tests and assignments.</p>
      </div>

      {/* Selection Form */}
      <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Test Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-white/70 text-sm mb-2 block">Semester</label>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-white/70 text-sm mb-2 block">Subject</label>
            <Select value={selectedSubject} onValueChange={setSelectedSubject} disabled={!selectedSemester}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {selectedSemester && subjects[selectedSemester as keyof typeof subjects]?.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-white/70 text-sm mb-2 block">Test Type</label>
            <Select value={selectedTestType} onValueChange={handleTestTypeChange}>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select test type" />
              </SelectTrigger>
              <SelectContent>
                {testTypes.map((test) => (
                  <SelectItem key={test.value} value={test.value}>
                    {test.label} (Max: {test.maxMarks})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedTestType && (
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
              <p className="text-blue-400 text-sm">
                Maximum Marks: <span className="font-bold">{maxMarks}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* CSV Upload Section */}
      {selectedSemester && selectedSubject && selectedTestType && (
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange-400" />
              CSV Upload (Optional)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button
                onClick={downloadTemplate}
                variant="outline"
                className="flex-1 bg-transparent border-blue-400/50 text-blue-400 hover:bg-blue-500/20"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
              
              <label className="flex-1">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-green-400/50 text-green-400 hover:bg-green-500/20"
                  asChild
                >
                  <div>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload CSV
                  </div>
                </Button>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVUpload}
                  className="hidden"
                />
              </label>
            </div>
            
            <p className="text-white/60 text-sm">
              Upload a CSV file with USN and marks columns to auto-fill the table below.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Marks Entry Table */}
      {selectedSemester && selectedSubject && selectedTestType && (
        <Card className="bg-black/30 backdrop-blur-lg border-white/10 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">
              Student Marks ({filledCount}/{students.length} completed)
            </CardTitle>
            <Button
              onClick={clearAllMarks}
              variant="outline"
              size="sm"
              className="bg-transparent border-red-400/50 text-red-400 hover:bg-red-500/20"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex-1">
                    <p className="text-white font-medium">{student.name}</p>
                    <p className="text-white/60 text-sm">{student.usn}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max={maxMarks}
                      value={student.marks}
                      onChange={(e) => updateMarks(student.id, e.target.value)}
                      placeholder="0"
                      className="w-20 p-2 bg-white/10 border border-white/20 rounded text-white text-center focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                    <span className="text-white/60 text-sm">/ {maxMarks}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit Button */}
      {selectedSemester && selectedSubject && selectedTestType && (
        <div className="flex gap-3">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 h-12 bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Uploading Marks...
              </div>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Submit Marks
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}; 