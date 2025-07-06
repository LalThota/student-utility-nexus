
import React, { useState } from 'react';
import { Search, Upload, Download, BookOpen, User, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NotesSharingPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'all', name: 'All Subjects', count: 2400 },
    { id: 'mathematics', name: 'Mathematics', count: 580 },
    { id: 'physics', name: 'Physics', count: 420 },
    { id: 'chemistry', name: 'Chemistry', count: 350 },
    { id: 'computer-science', name: 'Computer Science', count: 480 },
    { id: 'biology', name: 'Biology', count: 320 },
    { id: 'english', name: 'English', count: 180 },
    { id: 'history', name: 'History', count: 70 }
  ];

  const notes = [
    {
      id: 1,
      title: 'Linear Algebra - Eigenvalues and Eigenvectors',
      subject: 'Mathematics',
      author: 'Dr. Smith\'s Class Notes',
      uploader: 'Jennifer W.',
      rating: 4.8,
      downloads: 245,
      pages: 12,
      type: 'PDF',
      uploadDate: '3 days ago',
      description: 'Comprehensive notes covering eigenvalues, eigenvectors, and their applications.',
      tags: ['Linear Algebra', 'Mathematics', 'Vectors']
    },
    {
      id: 2,
      title: 'Organic Chemistry - Reaction Mechanisms',
      subject: 'Chemistry',
      author: 'Prof. Johnson\'s Lectures',
      uploader: 'Mike R.',
      rating: 4.9,
      downloads: 189,
      pages: 18,
      type: 'PDF',
      uploadDate: '1 week ago',
      description: 'Detailed explanation of organic reaction mechanisms with examples.',
      tags: ['Organic Chemistry', 'Reactions', 'Mechanisms']
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms - Sorting',
      subject: 'Computer Science',
      author: 'CS 201 Study Guide',
      uploader: 'Alex K.',
      rating: 4.7,
      downloads: 356,
      pages: 8,
      type: 'PDF',
      uploadDate: '5 days ago',
      description: 'Complete guide to sorting algorithms with complexity analysis.',
      tags: ['Algorithms', 'Data Structures', 'Sorting']
    },
    {
      id: 4,
      title: 'Classical Mechanics - Newton\'s Laws',
      subject: 'Physics',
      author: 'Physics 101 Summary',
      uploader: 'Sarah L.',
      rating: 4.6,
      downloads: 167,
      pages: 15,
      type: 'PDF',
      uploadDate: '2 weeks ago',
      description: 'Fundamental concepts of classical mechanics and Newton\'s laws.',
      tags: ['Physics', 'Mechanics', 'Newton']
    },
    {
      id: 5,
      title: 'Cell Biology - Mitosis and Meiosis',
      subject: 'Biology',
      author: 'Bio 150 Lab Notes',
      uploader: 'Emma T.',
      rating: 4.5,
      downloads: 123,
      pages: 10,
      type: 'PDF',
      uploadDate: '1 week ago',
      description: 'Detailed study of cell division processes with diagrams.',
      tags: ['Biology', 'Cell Division', 'Mitosis']
    },
    {
      id: 6,
      title: 'Shakespeare Analysis - Hamlet',
      subject: 'English',
      author: 'Literature 201 Essays',
      uploader: 'David P.',
      rating: 4.4,
      downloads: 89,
      pages: 6,
      type: 'PDF',
      uploadDate: '4 days ago',
      description: 'Character analysis and themes in Shakespeare\'s Hamlet.',
      tags: ['Literature', 'Shakespeare', 'Analysis']
    }
  ];

  const filteredNotes = selectedSubject === 'all' 
    ? notes 
    : notes.filter(note => note.subject.toLowerCase().replace(' ', '-') === selectedSubject);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Online Notes Sharing</h1>
          <p className="text-gray-600 mt-2">Access and share study materials with your peers</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Notes
        </Button>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search notes by title, subject, or author..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Subjects Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Subjects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {subjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedSubject === subject.id
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{subject.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {subject.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upload Stats */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Your Contributions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Notes Uploaded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1,456</div>
                  <div className="text-sm text-gray-600">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">4.7</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notes Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2">{note.title}</CardTitle>
                      <CardDescription className="mt-2">{note.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {note.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {note.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{note.uploader}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
                        <span>{note.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{note.downloads} downloads</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{note.uploadDate}</span>
                      </div>
                    </div>

                    {/* Author and Pages */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm">
                        <div className="font-medium">{note.author}</div>
                        <div className="text-gray-600">{note.pages} pages • {note.subject}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesSharingPage;
