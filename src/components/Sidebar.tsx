
import React from 'react';
import { X, Search, ShoppingBag, FileText, Home, Users, Bell } from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, activeSection, setActiveSection, setSidebarOpen }: SidebarProps) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'lost-found', label: 'Lost & Found', icon: Search },
    { id: 'buy-items', label: 'Buy Second Items', icon: ShoppingBag },
    { id: 'notes-sharing', label: 'Online Notes Sharing', icon: FileText },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className={styles.closeButtonContainer}>
            <button
              className={styles.closeButton}
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className={styles.nav}>
            <div className={styles.menuList}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`${styles.menuItem} ${activeSection === item.id ? styles.active : ''}`}
                  >
                    <Icon className={styles.menuIcon} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className={styles.footer}>
            <p>College Utility Hub</p>
            <p>© 2024 Student Services</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
