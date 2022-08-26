import { BsMoon } from 'react-icons/bs';

const NavBar = ({ darkTheme, setDarkTheme }) => {
  return (
    <nav className="bg-white dark:bg-DarkBlue py-4">
      <div className=" container flex justify-between align-item">
        <article>
          <h1>Where in the world?</h1>
        </article>
        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="flex"
        >
          <BsMoon className="dark:Fill-white" /> Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
