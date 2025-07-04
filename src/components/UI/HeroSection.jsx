import { FaArrowRightLong } from "react-icons/fa6";

import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 className="heading-xl">
                Explore The World, One Country at a Time.
              </h1>
              <p className="Paragraph">
                Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need
              </p>
              <NavLink to="/country">
                <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaArrowRightLong />
              </button>
              </NavLink>
    
            </div>
            <div className="hero-image animate-image">
              <img
               src="/images/atlas.jpeg" alt="World is beauty"
               className="banner-image" />
            </div>
          </div>
    
    
        </main>
  )
}