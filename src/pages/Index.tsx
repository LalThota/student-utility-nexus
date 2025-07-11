
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import styles from './Index.module.css';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className={styles.contentWrapper}>
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
