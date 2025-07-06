
import React from 'react';
import HomePage from '@/components/sections/HomePage';
import LostFoundPage from '@/components/sections/LostFoundPage';
import BuyItemsPage from '@/components/sections/BuyItemsPage';
import NotesSharingPage from '@/components/sections/NotesSharingPage';
import CommunityPage from '@/components/sections/CommunityPage';
import NotificationsPage from '@/components/sections/NotificationsPage';

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'lost-found':
        return <LostFoundPage />;
      case 'buy-items':
        return <BuyItemsPage />;
      case 'notes-sharing':
        return <NotesSharingPage />;
      case 'community':
        return <CommunityPage />;
      case 'notifications':
        return <NotificationsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <main className="flex-1 lg:ml-0">
      <div className="max-w-7xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default MainContent;
