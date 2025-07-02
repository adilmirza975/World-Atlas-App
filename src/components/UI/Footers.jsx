// i am using custom api footerApi.json

import footerContact from "../../api/footerApi.json";
import { NavLink } from "react-router-dom";

// icons import 
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footers = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp/>,
    TbMailPlus: <TbMailPlus/>

  }

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">

        {footerContact.map((curData, index) => {

          // destructure so that i dont have to use curData.icon or anything else ,just icon
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
              <p>{title}</p>
              <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">

            <div className="copyright-text">
              <p>
                copyright &copy; 2024, All Right Reserved 
              </p>
            </div>

             <div className="footer-menu">
              <ul>
                <li>
                    <NavLink to="https://vellavibe.com/" target="_blank">My Clothing Brand - VELLAVIBE</NavLink>
                </li>
              </ul>
             </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
