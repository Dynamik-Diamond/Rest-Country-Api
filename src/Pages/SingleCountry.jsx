import { Link, useParams } from 'react-router-dom';

const SingleCountry = () => {
  const { countryId } = useParams();
  console.log(countryId);
  return (
    <div>
      <h1>{countryId}</h1>
    </div>
  );
};

export default SingleCountry;
