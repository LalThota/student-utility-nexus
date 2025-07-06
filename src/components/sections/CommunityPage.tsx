
import React from 'react';
import { Users, MessageCircle, Calendar, Trophy, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const CommunityPage = () => {
  const studyGroups = [
    {
      id: 1,
      name: 'Calculus Study Group',
      subject: 'Mathematics',
      members: 24,
      nextMeeting: 'Tomorrow 3:00 PM',
      location: 'Library Room 202',
      description: 'Weekly calculus problem-solving sessions',
      moderator: 'Sarah Johnson'
    },
    {
      id: 2,
      name: 'Organic Chemistry Lab',
      subject: 'Chemistry',
      members: 18,
      nextMeeting: 'Friday 2:00 PM',
      location: 'Chemistry Building',
      description: 'Lab preparation and discussion',
      moderator: 'Mike Chen'
    },
    {
      id: 3,
      name: 'CS Interview Prep',
      subject: 'Computer Science',
      members: 35,
      nextMeeting: 'Wednesday 4:00 PM',
      location: 'Online (Zoom)',
      description: 'Practice coding interviews together',
      moderator: 'Alex Rodriguez'
    }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'Tips for Final Exam Week?',
      author: 'Emma Wilson',
      replies: 23,
      lastReply: '2 hours ago',
      category: 'General'
    },
    {
      id: 2,
      title: 'Looking for Physics 201 study partner',
      author: 'David Kim',
      replies: 8,
      lastReply: '4 hours ago',
      category: 'Study Partners'
    },
    {
      id: 3,
      title: 'Best places to study on campus?',
      author: 'Lisa Martinez',
      replies: 15,
      lastReply: '6 hours ago',
      category: 'Campus Life'
    }
  ];

  const topContributors = [
    { name: 'Jennifer Adams', points: 1250, badge: 'Helper' },
    { name: 'Robert Chen', points: 980, badge: 'Mentor' },
    { name: 'Amanda Davis', points: 875, badge: 'Scholar' },
    { name: 'Michael Brown', points: 650, badge: 'Student' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Community</h1>
          <p className="text-gray-600 mt-2">Connect with fellow students and join study groups</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            New Discussion
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">892</div>
            <div className="text-sm text-gray-600">Active Students</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-sm text-gray-600">Study Groups</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-sm text-gray-600">Events This Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3.8k</div>
            <div className="text-sm text-gray-600">Total Posts</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Study Groups */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Active Study Groups
              </CardTitle>
              <CardDescription>Join or create study groups for better learning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studyGroups.map((group) => (
                  <div key={group.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{group.name}</h3>
                        <p className="text-gray-600 text-sm">{group.description}</p>
                      </div>
                      <Badge variant="outline">{group.subject}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <span className="font-medium">Members:</span> {group.members}
                      </div>
                      <div>
                        <span className="font-medium">Moderator:</span> {group.moderator}
                      </div>
                      <div>
                        <span className="font-medium">Next Meeting:</span> {group.nextMeeting}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {group.location}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Join Group</Button>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Discussions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Recent Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDiscussions.map((discussion) => (
                  <div key={discussion.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {discussion.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span>by {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.replies} replies</span>
                      <span>•</span>
                      <span>{discussion.lastReply}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Avatar>
                        <AvatarFallback>
                          {contributor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{contributor.name}</div>
                      <div className="text-xs text-gray-500">{contributor.points} points</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full" variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Find Study Partner
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
