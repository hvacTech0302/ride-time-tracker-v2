import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.component.jsx";
import siteLogo from "../../assets/images/Logos/site-logo.png";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar-container">
        <div className="navbar-container-left">
          <Link to="/">
            <Logo
              className="site-logo"
              width={"100rem"}
              height={"100rem"}
              image={siteLogo}
            />
          </Link>
          <h3 className="site-title">Ride Time Tracker</h3>
        </div>
        <div className="navbar-container-right">
          <ul className="nav-links">
            <li>
              <NavLink className="nav-link" to="/disney-world">
                Disney World
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/disneyland">
                Disneyland
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/universal-orlando">
                Universal Studios Orlando
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/universal-hollywood-park">
                Universal Studios Hollywood
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;