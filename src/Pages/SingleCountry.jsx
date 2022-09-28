import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { BackBtn } from '../Component/Button';
import BorderCountry from '../Component/BorderCountry';
import Loading from '../Component/Loading';

const SingleCountry = () => {
  const { countryId } = useParams();
  const { countries, isLoading } = useGlobalContext();

  const country = countries.find(
    item => item.name.common === countryId,
  );

  if (countries.length === 0) {
    return <Loading />;
  } else {
    const {
      name: { common },
      region,
      subregion,
      capital,
      population,
      borders,
      tld,
      currencies,
    } = country;

    const nativeName = Object.values(
      country.name.nativeName,
    )[0].common;

    const flag = Object.values(country.flags)[0];

    return (
      <div className="container space-y-16 py-8">
        <BackBtn />
        {/* Flag and country details */}
        <article className="md:flex place-items-center gap-[10rem] space-y-12 md:space-y-0">
          <div className="shadow">
            <img
              src={flag}
              alt={common}
              className="w-[400px] h-[300px] object-cover"
            />
          </div>
          {/* country info */}
          <div className="">
            <h4 className="text-[1.6rem] font-bold mb-4">
              {common}
            </h4>
            <article className=" grid md:gap-32 grid-cols-1 lg:grid-cols-2 mb-6 md:mb-0 text-[0.8rem] text-VeryDarkBlue dark:text-gray-300">
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
                  <span className="font-bold">
                    Capital:
                  </span>{' '}
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
                  <span className="font-bold">
                    Language:
                  </span>{' '}
                  {Object.values(country.languages).map(
                    lan => (
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
            {borders ? (
              <div className="flex  gap-2 text-[0.8rem] mt-10 max-w-[500px]">
                <span className="font-bold ">
                  Border countries:
                </span>{' '}
                <article className="flex flex-wrap ">
                  {borders.map((border, index) => {
                    const borderResult = countries.find(
                      bod => bod.cca3 === border,
                    );
                    return (
                      <div className="mb-2">
                        <BorderCountry
                          name={borderResult.name.common}
                          key={borderResult.name.common}
                        />
                      </div>
                    );
                  })}
                </article>
              </div>
            ) : null}

            {/* end of border countries */}
          </div>
          {/* country info */}
        </article>
        {/* end of Flag and country details */}
      </div>
    );
  }
};

export default SingleCountry;
