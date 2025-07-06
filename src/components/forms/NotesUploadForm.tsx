
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';

interface NotesUploadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotesUploadForm = ({ isOpen, onClose }: NotesUploadFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Upload Study Notes</DialogTitle>
        </DialogHeader>
        
        <form className="space-y-4">
          {/* Notes Title */}
          <div className="space-y-2">
            <Label htmlFor="notesTitle">Notes Title</Label>
            <Input id="notesTitle" placeholder="e.g., Linear Algebra - Eigenvalues" />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label>Subject</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Code */}
          <div className="space-y-2">
            <Label htmlFor="courseCode">Course Code</Label>
            <Input id="courseCode" placeholder="e.g., MATH 201, CS 101" />
          </div>

          {/* Professor/Author */}
          <div className="space-y-2">
            <Label htmlFor="author">Professor/Author</Label>
            <Input id="author" placeholder="e.g., Dr. Smith's Class Notes" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="notesDescription">Description</Label>
            <Textarea 
              id="notesDescription" 
              placeholder="Brief description of the notes content..."
              rows={3}
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="fileUpload">Upload File</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-2">
                <Label htmlFor="fileUpload" className="cursor-pointer text-blue-600 hover:text-blue-500">
                  Choose file to upload
                </Label>
                <Input id="fileUpload" type="file" className="hidden" accept=".pdf,.doc,.docx,.ppt,.pptx" />
              </div>
              <p className="text-xs text-gray-500 mt-1">PDF, DOC, PPT files only (Max 10MB)</p>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input id="tags" placeholder="e.g., algebra, vectors, mathematics" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              <Upload className="h-4 w-4 mr-2" />
              Upload Notes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NotesUploadForm;
