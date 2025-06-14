
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, ChevronRight, Plus, Edit, Trash2, BookOpen } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AcademicStructurePage: React.FC = () => {
  const { toast } = useToast();
  const [expandedSemesters, setExpandedSemesters] = useState<number[]>([1]);
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [isEditSubjectOpen, setIsEditSubjectOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);

  // Mock academic structure data
  const academicStructure = [
    {
      semester: 1,
      subjects: [
        { id: 1, name: 'Mathematics I', code: 'MA101', credits: 4, section: 'A' },
        { id: 2, name: 'Physics', code: 'PH101', credits: 4, section: 'A' },
        { id: 3, name: 'Chemistry', code: 'CH101', credits: 4, section: 'A' },
        { id: 4, name: 'Programming in C', code: 'CS101', credits: 3, section: 'A' },
      ]
    },
    {
      semester: 2,
      subjects: [
        { id: 5, name: 'Mathematics II', code: 'MA102', credits: 4, section: 'A' },
        { id: 6, name: 'Data Structures', code: 'CS102', credits: 4, section: 'A' },
        { id: 7, name: 'Digital Electronics', code: 'EC102', credits: 3, section: 'A' },
      ]
    },
    {
      semester: 3,
      subjects: [
        { id: 8, name: 'Computer Organization', code: 'CS201', credits: 4, section: 'A' },
        { id: 9, name: 'Discrete Mathematics', code: 'MA201', credits: 3, section: 'A' },
        { id: 10, name: 'Object Oriented Programming', code: 'CS202', credits: 4, section: 'A' },
      ]
    }
  ];

  const toggleSemester = (semester: number) => {
    setExpandedSemesters(prev =>
      prev.includes(semester)
        ? prev.filter(s => s !== semester)
        : [...prev, semester]
    );
  };

  const handleAddSubject = () => {
    toast({
      title: "Subject Added",
      description: "New subject has been successfully added to the curriculum.",
    });
    setIsAddSubjectOpen(false);
  };

  const handleEditSubject = (subject: any) => {
    setSelectedSubject(subject);
    setIsEditSubjectOpen(true);
  };

  const handleUpdateSubject = () => {
    toast({
      title: "Subject Updated",
      description: "Subject details have been successfully updated.",
    });
    setIsEditSubjectOpen(false);
    setSelectedSubject(null);
  };

  const handleDeleteSubject = (subjectName: string) => {
    toast({
      title: "Subject Deleted",
      description: `${subjectName} has been removed from the curriculum.`,
      variant: "destructive",
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
              Academic Structure
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Manage curriculum, subjects, and academic structure
            </p>
          </div>
          <Dialog open={isAddSubjectOpen} onOpenChange={setIsAddSubjectOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Subject
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Subject</DialogTitle>
                <DialogDescription>
                  Add a new subject to the academic curriculum.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject-name" className="text-right">
                    Subject Name
                  </Label>
                  <Input id="subject-name" className="col-span-3" placeholder="Enter subject name" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject-code" className="text-right">
                    Subject Code
                  </Label>
                  <Input id="subject-code" className="col-span-3" placeholder="e.g., CS101" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="credits" className="text-right">
                    Credits
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select credits" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Credit</SelectItem>
                      <SelectItem value="2">2 Credits</SelectItem>
                      <SelectItem value="3">3 Credits</SelectItem>
                      <SelectItem value="4">4 Credits</SelectItem>
                      <SelectItem value="5">5 Credits</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="semester" className="text-right">
                    Semester
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                        <SelectItem key={sem} value={sem.toString()}>Semester {sem}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="section" className="text-right">
                    Section
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">Section A</SelectItem>
                      <SelectItem value="B">Section B</SelectItem>
                      <SelectItem value="C">Section C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddSubject}>Add Subject</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Academic Structure by Semester */}
      <div className="space-y-4">
        {academicStructure.map((semesterData, index) => (
          <motion.div
            key={semesterData.semester}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <Collapsible
                open={expandedSemesters.includes(semesterData.semester)}
                onOpenChange={() => toggleSemester(semesterData.semester)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {expandedSemesters.includes(semesterData.semester) ? (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        )}
                        <div>
                          <CardTitle className="text-lg">Semester {semesterData.semester}</CardTitle>
                          <CardDescription>
                            {semesterData.subjects.length} subjects • {' '}
                            {semesterData.subjects.reduce((sum, subject) => sum + subject.credits, 0)} total credits
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {semesterData.subjects.length} subjects
                      </Badge>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="overflow-x-auto">
                      <div className="min-w-[600px]">
                        <div className="grid grid-cols-5 gap-4 p-3 bg-gray-50 rounded-lg mb-2 font-medium text-sm text-gray-700">
                          <div>Subject Name</div>
                          <div>Subject Code</div>
                          <div>Credits</div>
                          <div>Section</div>
                          <div>Actions</div>
                        </div>
                        {semesterData.subjects.map((subject, subjectIndex) => (
                          <motion.div
                            key={subject.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: subjectIndex * 0.1 }}
                            className="grid grid-cols-5 gap-4 p-3 border-b hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900 flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-blue-500" />
                              {subject.name}
                            </div>
                            <div className="text-gray-600 font-mono text-sm">{subject.code}</div>
                            <div>
                              <Badge variant="secondary">{subject.credits} Credits</Badge>
                            </div>
                            <div className="text-gray-600">Section {subject.section}</div>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditSubject(subject)}
                                className="flex items-center gap-1"
                              >
                                <Edit className="h-3 w-3" />
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteSubject(subject.name)}
                                className="flex items-center gap-1 text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-3 w-3" />
                                Delete
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Edit Subject Dialog */}
      <Dialog open={isEditSubjectOpen} onOpenChange={setIsEditSubjectOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Subject</DialogTitle>
            <DialogDescription>
              Update the subject details.
            </DialogDescription>
          </DialogHeader>
          {selectedSubject && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-subject-name" className="text-right">
                  Subject Name
                </Label>
                <Input
                  id="edit-subject-name"
                  className="col-span-3"
                  defaultValue={selectedSubject.name}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-subject-code" className="text-right">
                  Subject Code
                </Label>
                <Input
                  id="edit-subject-code"
                  className="col-span-3"
                  defaultValue={selectedSubject.code}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-credits" className="text-right">
                  Credits
                </Label>
                <Select defaultValue={selectedSubject.credits.toString()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Credit</SelectItem>
                    <SelectItem value="2">2 Credits</SelectItem>
                    <SelectItem value="3">3 Credits</SelectItem>
                    <SelectItem value="4">4 Credits</SelectItem>
                    <SelectItem value="5">5 Credits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-section" className="text-right">
                  Section
                </Label>
                <Select defaultValue={selectedSubject.section}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Section A</SelectItem>
                    <SelectItem value="B">Section B</SelectItem>
                    <SelectItem value="C">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={handleUpdateSubject}>Update Subject</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AcademicStructurePage;
