import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const SharedLayout = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <main className={darkTheme ? 'dark' : ''}>
      <div className="font-Nunito bg-VeryLightGray text-VeryDarkBlue dark:bg-VeryDarkBlue dark:text-white min-h-screen">
        <NavBar
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
