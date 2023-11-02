import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Menu(props) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <ul className="navbar-nav d-flex justify-content-between">
        <li className="nav-item">
          <div className="d-flex justify-content-end">
            <button
              className="image-button"
              aria-label="Close"
              onClick={props.toggleMenu}
            >
              <span className="material-symbols-outlined hamburger-menu">
                right_panel_close
              </span>
            </button>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog" onClick={props.toggleMenu}>
            <span className="material-symbols-outlined menu-icon">rss_feed</span>Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Pricing" onClick={props.toggleMenu}>
            <span className="material-symbols-outlined menu-icon">payments</span>Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" onClick={props.toggleMenu}>
            <span className="material-symbols-outlined menu-icon">manage_search</span>About Us
          </Link>
        </li>
        {isLoggedIn && (
          <div>
            <li className="nav-item">
              <Link className="nav-link" to="/Account">
                <span className="material-symbols-outlined menu-icon">person</span>My Account
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={() => {
                  props.handleSignOut();
                  props.toggleMenu();
                }}
              >
                <span className="material-symbols-outlined menu-icon">logout</span>Sign Out
              </button>
            </li>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <li className="nav-item">
              <Link className="nav-link" to="/Login" onClick={props.toggleMenu}>
                <span className="material-symbols-outlined menu-icon">person</span>Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Registration"
                onClick={props.toggleMenu}
              >
                <span className="material-symbols-outlined menu-icon">app_registration</span>
                Join Us
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
