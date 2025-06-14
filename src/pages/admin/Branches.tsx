import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2, Edit, Trash2, Plus, Crown, Users, GraduationCap } from 'lucide-react';

const branchesData = [
  {
    id: 1,
    name: 'Computer Science',
    hod: 'Dr. Sarah Johnson',
    studentCount: 456,
    facultyCount: 35
  },
  {
    id: 2,
    name: 'Electrical Engineering',
    hod: 'Dr. Michael Chen',
    studentCount: 389,
    facultyCount: 28
  },
  {
    id: 3,
    name: 'Mechanical Engineering',
    hod: 'Dr. Robert Wilson',
    studentCount: 412,
    facultyCount: 31
  },
  {
    id: 4,
    name: 'Civil Engineering',
    hod: 'Dr. Emily Davis',
    studentCount: 298,
    facultyCount: 22
  },
  {
    id: 5,
    name: 'Information Technology',
    hod: 'Dr. David Rodriguez',
    studentCount: 235,
    facultyCount: 14
  }
];

export function Branches() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingBranch, setIsAddingBranch] = useState(false);
  const [newBranch, setNewBranch] = useState({
    name: '',
    hod: '',
    studentCount: 0,
    facultyCount: 0
  });

  const filteredBranches = branchesData.filter(branch =>
    branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.hod.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddBranch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement add branch logic
    console.log('Adding branch:', newBranch);
    setIsAddingBranch(false);
    setNewBranch({ name: '', hod: '', studentCount: 0, facultyCount: 0 });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Branches</h1>
        <p className="text-gray-400">Manage department branches and their HODs</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search branches or HODs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass-card"
          />
        </div>
        <Button
          onClick={() => setIsAddingBranch(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Branch
        </Button>
      </div>

      {/* Add Branch Form */}
      {isAddingBranch && (
        <Card className="glass-card p-6">
          <form onSubmit={handleAddBranch} className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Add New Branch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="branchName">Branch Name</Label>
                <Input
                  id="branchName"
                  value={newBranch.name}
                  onChange={(e) => setNewBranch({ ...newBranch, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hod">HOD Name</Label>
                <Input
                  id="hod"
                  value={newBranch.hod}
                  onChange={(e) => setNewBranch({ ...newBranch, hod: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddingBranch(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Add Branch</Button>
            </div>
          </form>
        </Card>
      )}

      {/* Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBranches.map((branch) => (
          <Card key={branch.id} className="glass-card p-6 hover:shadow-2xl transition-all duration-300">
            <div className="space-y-4">
              {/* Branch Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{branch.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">{branch.hod}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-300">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Branch Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass p-3 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Students</span>
                  </div>
                  <p className="text-xl font-bold text-blue-400">{branch.studentCount}</p>
                </div>
                <div className="glass p-3 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <Users className="w-4 h-4" />
                    <span>Faculty</span>
                  </div>
                  <p className="text-xl font-bold text-purple-400">{branch.facultyCount}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredBranches.length === 0 && (
        <Card className="glass-card p-6 text-center">
          <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Branches Found</h3>
          <p className="text-gray-400">Try adjusting your search query or add a new branch</p>
        </Card>
      )}
    </div>
  );
} 