
import React from 'react';
import { Search, ShoppingBag, FileText, Users, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const features = [
    {
      icon: Search,
      title: 'Lost & Found',
      description: 'Report lost items or help others find their belongings',
      color: 'bg-red-100 text-red-600',
      stats: '23 items found this week'
    },
    {
      icon: ShoppingBag,
      title: 'Buy Second Items',
      description: 'Browse and purchase second-hand items from fellow students',
      color: 'bg-green-100 text-green-600',
      stats: '156 items available'
    },
    {
      icon: FileText,
      title: 'Notes Sharing',
      description: 'Share and access study materials and lecture notes',
      color: 'bg-blue-100 text-blue-600',
      stats: '2.4k notes shared'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with classmates and join study groups',
      color: 'bg-purple-100 text-purple-600',
      stats: '892 active students'
    }
  ];

  const recentActivity = [
    { action: 'iPhone 13 found in Library', time: '2 hours ago', type: 'found' },
    { action: 'Physics Notes shared by John', time: '4 hours ago', type: 'notes' },
    { action: 'MacBook Pro listed for sale', time: '6 hours ago', type: 'sale' },
    { action: 'Lost wallet reported', time: '8 hours ago', type: 'lost' },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl text-white p-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to College Utility Hub</h1>
          <p className="text-xl mb-6 text-blue-100">
            Your one-stop platform for campus life - find lost items, buy second-hand goods, share notes, and connect with your college community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,250+</div>
            <div className="text-gray-600">Active Students</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3,400+</div>
            <div className="text-gray-600">Items Exchanged</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">5,600+</div>
            <div className="text-gray-600">Notes Shared</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Recent Activity
          </CardTitle>
          <CardDescription>Latest updates from your college community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    activity.type === 'found' ? 'bg-green-500' :
                    activity.type === 'notes' ? 'bg-blue-500' :
                    activity.type === 'sale' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span className="font-medium">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
