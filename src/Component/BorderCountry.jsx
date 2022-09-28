import { useNavigate } from 'react-router-dom';

const BorderCountry = ({ name }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${name}`, { replace: false });
  };

  return (
    <button
      onClick={handleClick}
      className="py-[0.25rem] px-[1.3rem] rounded-sm shadow-lg bg-white dark:bg-DarkBlue mr-1"
    >
      {name}
    </button>
  );
};

export default BorderCountry;
