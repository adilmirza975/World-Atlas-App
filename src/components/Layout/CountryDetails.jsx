import { useParams } from "react-router-dom";
import { useTransition, useState, useEffect } from "react";
import { getCountryIndData } from "../../api/postApi";
import { NavLink } from "react-router-dom";

export const CountryDetails = () => {
  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryIndData(params.id);

      startTransition(() => {
        // data agar sab set hai
        if (res.status === 200) {
          setCountry(res.data[0]);
        }
      });
    };

    fetchData();
  }, []);

  // if (isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {/* jab tak country ka data mil na jaaye tab tak koi information render mat kro */}
        {country && (
          <div className="country-image grid grid-two-cols">
            {/* left side */}
            <img
              src={country.flags.svg}
              alt={country.flags.svg}
              className="flag"
            />

            {/* right side */}
            <div className="country-content">
              <p className="card-title"> {country.name.official}</p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>

                <p>
                  <span className="card-description">Population: </span>
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="card-description">Region: </span>
                  {country.region}
                </p>

                <p>
                  <span className="card-description">Sub Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {country.tld[0]}
                </p>

                <p>
                  <span className="card-description">Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Continent: </span>
                 {country.continents[0]}
                </p>

            
              </div>
            </div>
          </div> 
        )}

        <div className="country-card-backbtn">
          <NavLink to="/country">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
