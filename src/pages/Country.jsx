import { useEffect, useState, useTransition } from "react";

// we are fetching the country data from importing it from "postApi"
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

import {CountryCard} from "../components/Layout/CountryCard"

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryData();

      startTransition(() => {
        setCountries(res.data);
      });
    };

    fetchData();
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
