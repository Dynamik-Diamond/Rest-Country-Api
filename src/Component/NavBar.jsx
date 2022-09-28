import { BsMoon } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className=" bg-white dark:bg-DarkBlue drop-shadow-sm  py-4">
      <div className=" container flex justify-between align-item font-bold">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="flex items-center gap-1 text-[13px] "
        >
          <BsMoon /> Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
