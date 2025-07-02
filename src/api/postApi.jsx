// create instace for our axios
import axios from "axios";


// base url for our API - 
// cleaner code,
// Easier to switch APIs later,
// Makes reusable instances possible (especially in larger projects)
const api = axios.create({
  baseURL:"https://restcountries.com/v3.1"

})


// http get method - for getting the data we want.
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags")
}