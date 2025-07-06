
import React, { useState } from 'react';
import { Bell, Check, X, Clock, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NotificationsPage = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'lost-found',
      title: 'Item Match Found!',
      message: 'Someone found an item matching your lost iPhone description',
      time: '2 hours ago',
      read: false,
      icon: AlertCircle,
      color: 'text-red-600'
    },
    {
      id: 2,
      type: 'marketplace',
      title: 'New Message from Seller',
      message: 'Sarah replied to your inquiry about the MacBook Pro',
      time: '4 hours ago',
      read: false,
      icon: Info,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'notes',
      title: 'Notes Downloaded',
      message: 'Your Physics 201 notes were downloaded 25 times this week',
      time: '1 day ago',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'community',
      title: 'Study Group Reminder',
      message: 'Calculus study group meeting tomorrow at 3:00 PM',
      time: '1 day ago',
      read: false,
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      id: 5,
      type: 'system',
      title: 'Weekly Summary Available',
      message: 'Your activity summary for this week is ready to view',
      time: '2 days ago',
      read: true,
      icon: Info,
      color: 'text-gray-600'
    },
    {
      id: 6,
      type: 'marketplace',
      title: 'Price Drop Alert',
      message: 'The Chemistry textbook you liked is now 20% off',
      time: '3 days ago',
      read: true,
      icon: AlertCircle,
      color: 'text-green-600'
    },
    {
      id: 7,
      type: 'community',
      title: 'New Group Member',
      message: 'Mike joined your Computer Science study group',
      time: '3 days ago',
      read: true,
      icon: CheckCircle,
      color: 'text-purple-600'
    },
    {
      id: 8,
      type: 'lost-found',
      title: 'Item Claimed',
      message: 'Your found wallet has been successfully claimed',
      time: '1 week ago',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ];

  const filters = [
    { id: 'all', name: 'All', count: notifications.length },
    { id: 'unread', name: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'lost-found', name: 'Lost & Found', count: notifications.filter(n => n.type === 'lost-found').length },
    { id: 'marketplace', name: 'Marketplace', count: notifications.filter(n => n.type === 'marketplace').length },
    { id: 'notes', name: 'Notes', count: notifications.filter(n => n.type === 'notes').length },
    { id: 'community', name: 'Community', count: notifications.filter(n => n.type === 'community').length }
  ];

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount} new
              </Badge>
            )}
          </div>
          <p className="text-gray-600 mt-2">Stay updated with your college activities</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            Settings
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.id}
                variant={filter === filterOption.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(filterOption.id)}
                className="relative"
              >
                {filterOption.name}
                {filterOption.count > 0 && (
                  <Badge 
                    variant="secondary" 
                    className="ml-2 text-xs"
                  >
                    {filterOption.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
            </CardContent>
          </Card>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card 
                key={notification.id} 
                className={`transition-colors hover:bg-gray-50 ${
                  !notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 ${notification.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 mt-1 text-sm">
                            {notification.message}
                          </p>
                          <p className="text-gray-400 text-xs mt-2">
                            {notification.time}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          )}
                          <Button variant="ghost" size="sm">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Customize what notifications you receive</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Email Notifications</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Lost & Found matches</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>New marketplace messages</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Study group updates</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Push Notifications</h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Urgent notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Daily summary</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Weekly reports</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsPage;
