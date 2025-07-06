
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BuyItemPostFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyItemPostForm = ({ isOpen, onClose }: BuyItemPostFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Post Item for Sale</DialogTitle>
        </DialogHeader>
        
        <form className="space-y-4">
          {/* Item Title */}
          <div className="space-y-2">
            <Label htmlFor="itemTitle">Item Title</Label>
            <Input id="itemTitle" placeholder="e.g., MacBook Pro 13 2021" />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="textbooks">Textbooks</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="sports">Sports & Fitness</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Selling Price ($)</Label>
              <Input id="price" type="number" placeholder="120" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price ($)</Label>
              <Input id="originalPrice" type="number" placeholder="200" />
            </div>
          </div>

          {/* Condition */}
          <div className="space-y-2">
            <Label>Condition</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="like-new">Like New</SelectItem>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="very-good">Very Good</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="itemDescription">Description</Label>
            <Textarea 
              id="itemDescription" 
              placeholder="Describe the item, its condition, what's included..."
              rows={3}
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="itemLocation">Pickup Location</Label>
            <Input id="itemLocation" placeholder="e.g., Campus Dormitory, Main Library" />
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <Label htmlFor="sellerContact">Contact Information</Label>
            <Input id="sellerContact" placeholder="Your email or phone number" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Post Item
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BuyItemPostForm;
