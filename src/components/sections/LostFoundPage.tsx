import React, { useState } from 'react';
import { Search, Plus, MapPin, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LostFoundSubmissionForm from '@/components/forms/LostFoundSubmissionForm';

const LostFoundPage = () => {
  const [activeTab, setActiveTab] = useState('lost');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const lostItems = [
    {
      id: 1,
      title: 'iPhone 13 Pro - Blue',
      description: 'Lost near the library entrance yesterday evening',
      location: 'Main Library',
      date: '2 days ago',
      category: 'Electronics',
      status: 'lost'
    },
    {
      id: 2,
      title: 'Black Leather Wallet',
      description: 'Contains student ID and credit cards',
      location: 'Cafeteria',
      date: '1 day ago',
      category: 'Personal Items',
      status: 'lost'
    },
    {
      id: 3,
      title: 'Red Backpack - Nike',
      description: 'Contains textbooks and laptop charger',
      location: 'Science Building',
      date: '3 days ago',
      category: 'Bags',
      status: 'lost'
    }
  ];

  const foundItems = [
    {
      id: 4,
      title: 'Silver Watch - Casio',
      description: 'Found in the gymnasium locker room',
      location: 'Sports Complex',
      date: '1 day ago',
      category: 'Accessories',
      status: 'found'
    },
    {
      id: 5,
      title: 'Blue Water Bottle',
      description: 'Stainless steel with college logo',
      location: 'Engineering Building',
      date: '2 days ago',
      category: 'Personal Items',
      status: 'found'
    }
  ];

  const allItems = activeTab === 'lost' ? lostItems : foundItems;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lost & Found</h1>
          <p className="text-gray-600 mt-2">Help reunite items with their owners</p>
        </div>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => setIsFormOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Report Item
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by item name, location, or description..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'lost' ? 'default' : 'outline'}
                onClick={() => setActiveTab('lost')}
                className="min-w-24"
              >
                Lost Items
              </Button>
              <Button
                variant={activeTab === 'found' ? 'default' : 'outline'}
                onClick={() => setActiveTab('found')}
                className="min-w-24"
              >
                Found Items
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </div>
                <Badge variant={item.status === 'lost' ? 'destructive' : 'default'}>
                  {item.status === 'lost' ? 'Lost' : 'Found'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {item.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Tag className="h-4 w-4 mr-2" />
                  {item.category}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Contact Owner
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Tips */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Tips for Lost & Found</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <h4 className="font-semibold mb-2">If you lost something:</h4>
              <ul className="space-y-1">
                <li>• Provide detailed description</li>
                <li>• Include last seen location</li>
                <li>• Add your contact information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">If you found something:</h4>
              <ul className="space-y-1">
                <li>• Take a clear photo if possible</li>
                <li>• Note exact location found</li>
                <li>• Keep item safe until claimed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <LostFoundSubmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default LostFoundPage;
