// you can give any name to the custom api you made in countryData
import countryFacts from '../api/countryData.json'

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Intresting Facts
        <br />
        we're proud of
      </h2>
      
      <div className="gradient-cards">

    {countryFacts.map( (country) => {

       {/* this is the redundant part of code */}
       const { id, countryName, capital, Population, interestingFact } =
            country;
      return (
      <div className="card" key={id}>
          <div className="container-card bg-blue-box">
            <p className="card-title">{countryName}</p>
            <p>
              <span className="card-description">capital:</span>{capital}
            </p>
            <p>
              <span className="card-description">Population:</span>{Population}
            </p>
            <p>
              <span className="card-description">Intresting Fact:</span>{interestingFact}
            </p>
            
          </div>
        </div>)
    } )}

     
        
      </div>
    </section>
  )
}