import { useNavigate } from 'react-router-dom';

const Country = country => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.name.common}`, {
      replace: false,
    });
  };

  const { flags, population, name, region, capital } =
    country;
  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-DarkBlue w-[250px] font-Nunito shadow"
    >
      {/* Country image */}
      <article>
        <img
          src={flags.png}
          alt="flag"
          className="w-[250px] h-[150px] object-cover"
        />
      </article>
      {/* country info */}
      <article className="p-4">
        {/* country title */}
        <h4 className="font-bold pb-3">{name.common}</h4>
        {/* country sub-info */}
        <div className="text-[11px] text-VeryDarkBlue dark:text-gray-300">
          <p>
            <span className="font-bold">Population:</span>{' '}
            {population}
          </p>
          <p>
            <span className="font-bold">Region:</span>{' '}
            {region}
          </p>
          <p>
            <span className="font-bold">Capital:</span>{' '}
            {capital}
          </p>
        </div>
      </article>
    </div>
  );
};

export default Country;
