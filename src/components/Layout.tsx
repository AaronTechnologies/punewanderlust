
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import UnderDevelopment from './UnderDevelopment';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <UnderDevelopment />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
