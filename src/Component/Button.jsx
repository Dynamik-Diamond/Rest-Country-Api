import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const BackBtn = () => {
  return (
    <Link
      to="/"
      className="inline-block py-[0.25rem] px-[0.853rem] rounded-md shadow-lg bg-white dark:bg-DarkBlue "
    >
      <div className="flex items-center justify-center gap-2">
        <HiOutlineArrowNarrowLeft />
        <span>Back</span>
      </div>
    </Link>
  );
};
