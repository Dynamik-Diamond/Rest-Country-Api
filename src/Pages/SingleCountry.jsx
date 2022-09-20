import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../Context';

const SingleCountry = () => {
  const { countries } = useGlobalContext();
  const { countryId } = useParams();

  const countryInfo = countries.find(
    (country, index) => country.name.common === countryId,
  );

  const nativeName = Object.values(
    countryInfo.name.nativeName,
  )[0].common;

  const flag = Object.values(countryInfo.flags)[0];

  const {
    name: { common },
    region,
    subregion,
    capital,
    population,
    borders,
    languages,
    tld,
    currencies,
  } = countryInfo;

  console.log(borders);
  return (
    <div className="container space-y-16 pt-8">
      <Link to="/">back</Link>
      {/* Flag and country details */}
      <article className="sm:flex place-items-center gap-[10rem] space-y-12 md:space-y-0">
        <div className="shadow">
          <img
            src={flag}
            alt={common}
            className="w-[400px] h-[300px] object-cover"
          />
        </div>
        {/* country info */}
        <div className="">
          <h4 className="font-bold pb-3">{common}</h4>
          <article className=" grid md:gap-32 grid-cols-1 md:grid-cols-2 mb-6 md:mb-0 text-VeryDarkBlue dark:text-gray-300">
            {/* Country info list 1 */}
            <div className="mb-6 md:mb-0 space-y-3">
              <p>
                <span className="font-bold">
                  Native Name:
                </span>{' '}
                {nativeName}
              </p>
              <p>
                <span className="font-bold">
                  Population:
                </span>{' '}
                {population}
              </p>
              <p>
                <span className="font-bold">Region:</span>{' '}
                {region}
              </p>
              <p>
                <span className="font-bold">
                  Sub Region:
                </span>{' '}
                {subregion}
              </p>
              <p>
                <span className="font-bold">Capital:</span>{' '}
                {capital}
              </p>
            </div>
            {/* end of Country info list 1 */}
            {/* country info list 2 */}
            <div className="space-y-3">
              <p>
                <span className="font-bold">
                  Top Level domain:
                </span>{' '}
                {tld}
              </p>
              <p>
                <span className="font-bold">
                  Currencies:
                </span>{' '}
                {Object.values(currencies)[0]?.name}
              </p>
              <p>
                <span className="font-bold">Language:</span>{' '}
                {Object.values(countryInfo.languages).map(
                  (lan, index) => (
                    <li className="inline-block mr-2">
                      {lan}
                    </li>
                  ),
                )}
              </p>
            </div>
            {/* country info list 2 */}
          </article>
          {/* border countries */}
          <div>
            <span className="font-bold">
              Border countries:
            </span>{' '}
            {borders.map((border, index) => {
              return border;
            })}
          </div>
          {/* end of border countries */}
        </div>
        {/* country info */}
      </article>
      {/* end of Flag and country details */}
    </div>
  );
};

export default SingleCountry;
