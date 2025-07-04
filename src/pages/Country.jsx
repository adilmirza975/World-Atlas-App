import { useEffect, useState, useTransition } from "react";

// we are fetching the country data from importing it from "postApi"
import { getCountryData } from "../api/postApi";

import { Loader } from "../components/UI/Loader";
import {CountryCard} from "../components/Layout/CountryCard"
import { SearchFilter } from "../components/UI/SearchFilter";



export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);




  // search filter ke liye data - 
  const [search, setSearch] = useState()
  // filter bar pe by default all hoga
  const [filter, setfilter] = useState('all')
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





  // filter logic -- getting the data of country searched
  const searchCountry = (country) => {
    if (search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
  }

  // select option logic - 
  const filterRegion = (country) => {
    if (filter === "all") 
      {return country};

    return country.region === filter
  }
  

  // here is the main logic for search filter
  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))





  return (

    <section className="country-section">
      
      <SearchFilter 
      search={search} 
      setSearch={setSearch} 
      filter={search}
      setFilter={setfilter}
      countries={countries}
      setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
