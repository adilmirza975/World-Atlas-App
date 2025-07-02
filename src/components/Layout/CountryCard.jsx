import { FaArrowRightLong } from "react-icons/fa6";

import { NavLink } from "react-router-dom";



export const CountryCard = ({country}) => {

  const {flags, name, population, region, capital} = country;

  return <li className="country-card card">
    <div className="container-card bg-white-box">
      <img src={flags.svg} alt={flags.svg} />

      <div className="countryInfo">

        {/* agar country name bhot bada hai to card ko distor karega ,for this do a logical work */}
        <p className="card-title">{name.common.length > 14 ? name.common.slice(0, 14) + "..." :name.common}</p>
        <p>
          <span className="card-description">Population:</span>{population.toLocaleString()}
        </p>
        <p>
          <span className="card-description">Region</span>{region}
        </p>
        <p>
          <span className="card-description">Capital:</span>{capital[0]}
        </p>

        {/* when we click the read more button it should get us all the data with dynamic route */}
        <NavLink to={`/country/${name.common}`}>
          <button>Read More <FaArrowRightLong /></button>
          </NavLink>

      </div>
    </div>
  </li>
}