import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BuyItemPostForm from '@/components/forms/BuyItemPostForm';

const BuyItemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items', count: 156 },
    { id: 'textbooks', name: 'Textbooks', count: 45 },
    { id: 'electronics', name: 'Electronics', count: 32 },
    { id: 'furniture', name: 'Furniture', count: 28 },
    { id: 'clothing', name: 'Clothing', count: 25 },
    { id: 'sports', name: 'Sports & Fitness', count: 18 },
    { id: 'other', name: 'Other', count: 8 }
  ];

  const items = [
    {
      id: 1,
      title: 'MacBook Pro 13" 2021',
      price: 1200,
      originalPrice: 1800,
      description: 'Excellent condition, barely used. Includes charger and case.',
      seller: 'Sarah K.',
      rating: 4.9,
      image: '/placeholder.svg',
      category: 'electronics',
      condition: 'Like New',
      location: 'Campus Dormitory'
    },
    {
      id: 2,
      title: 'Calculus Textbook - 12th Edition',
      price: 85,
      originalPrice: 250,
      description: 'Slightly used, all pages intact. No highlighting.',
      seller: 'Mike R.',
      rating: 4.7,
      image: '/placeholder.svg',
      category: 'textbooks',
      condition: 'Good',
      location: 'Engineering Building'
    },
    {
      id: 3,
      title: 'Study Desk with Chair',
      price: 120,
      originalPrice: 200,
      description: 'Perfect for dorm room. Includes matching chair.',
      seller: 'Emma L.',
      rating: 4.8,
      image: '/placeholder.svg',
      category: 'furniture',
      condition: 'Very Good',
      location: 'Student Housing'
    },
    {
      id: 4,
      title: 'iPhone 12 - 128GB',
      price: 450,
      originalPrice: 700,
      description: 'Unlocked, comes with case and screen protector.',
      seller: 'David P.',
      rating: 5.0,
      image: '/placeholder.svg',
      category: 'electronics',
      condition: 'Excellent',
      location: 'Main Campus'
    },
    {
      id: 5,
      title: 'Gym Equipment Set',
      price: 200,
      originalPrice: 350,
      description: 'Dumbbells, resistance bands, and yoga mat included.',
      seller: 'Lisa M.',
      rating: 4.6,
      image: '/placeholder.svg',
      category: 'sports',
      condition: 'Good',
      location: 'Sports Complex'
    },
    {
      id: 6,
      title: 'Winter Coat - North Face',
      price: 80,
      originalPrice: 150,
      description: 'Size Medium, warm and waterproof. Perfect for winter.',
      seller: 'Alex T.',
      rating: 4.8,
      image: '/placeholder.svg',
      category: 'clothing',
      condition: 'Very Good',
      location: 'Student Center'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Buy Second Items</h1>
          <p className="text-gray-600 mt-2">Find great deals on pre-owned items from fellow students</p>
        </div>
        <Button 
          className="bg-green-600 hover:bg-green-700"
          onClick={() => setIsFormOpen(true)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Sell Item
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for items, brands, or categories..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="min-w-24">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Items Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative">
                  <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white group-hover:scale-110 transition-transform"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">${item.price}</span>
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="mb-4 line-clamp-2">
                    {item.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Condition:</span>
                      <Badge variant="outline">{item.condition}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Location:</span>
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Seller:</span>
                      <div className="flex items-center">
                        <span className="mr-1">{item.seller}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-xs">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      Contact Seller
                    </Button>
                    <Button variant="outline" size="sm">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BuyItemPostForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default BuyItemsPage;
