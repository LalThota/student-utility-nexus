
import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, ShoppingBag, FileText, Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          setSidebarOpen={setSidebarOpen}
        />
        
        {/* Main Content */}
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Index;
