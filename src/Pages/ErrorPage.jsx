import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className=" mt-12 container">
      <Link to="/">Back</Link>
      <div className="h-[60vh] flex justify-center items-center">
        <h1 className="font-bold text-[3rem]">
          Page Not Found
        </h1>
      </div>
    </section>
  );
};

export default ErrorPage;
