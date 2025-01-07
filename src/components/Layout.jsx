import React, { useEffect } from 'react';

const Layout = ({ children }) => {

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="flex min-h-screen">
      <main className="flex flex-grow justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
