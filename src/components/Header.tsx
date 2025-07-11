
import React from 'react';
import { Search, Menu, User, BookOpen } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Left side - Logo and Menu */}
        <div className={styles.leftSection}>
          <button
            className={styles.menuButton}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className={styles.logoText}>
              <h1>College Utility</h1>
              <p>Student Hub</p>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search items, notes, or announcements..."
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className={styles.rightSection}>
          <button className={styles.signInButton}>
            <User className="h-4 w-4" />
            Sign In
          </button>
          <button className={styles.getStartedButton}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
