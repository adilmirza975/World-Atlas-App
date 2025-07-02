import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

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
        {countries.map((curCountry) => {
          return <CountryCard country={curCountry} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
