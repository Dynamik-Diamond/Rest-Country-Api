import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const BackBtn = () => {
  let navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBackButton}
      className="inline-block py-[0.25rem] px-[0.853rem] rounded-md shadow-lg bg-white dark:bg-DarkBlue "
    >
      <div className="flex items-center justify-center gap-2">
        <HiOutlineArrowNarrowLeft />
        <span>Back</span>
      </div>
    </button>
  );
};
