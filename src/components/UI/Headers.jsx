import { NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";

export const Headers = () => {

  // navbar responsive ui
  const [show, setShow] = useState(false)
  const handleButtonToggle = () => {
    return setShow(!show)
  }

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div>
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          {/* agar show true hai to mobile wala version hai o dikhaiye warna desktop wala version dikhaiye */}
          <nav className={show ? "menu-mobile": "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}><TiThMenuOutline /></button>
          </div>
        </div>
      </div>
    </header>
  );
};
