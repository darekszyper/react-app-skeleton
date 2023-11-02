import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../logo.png";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <header className="container-fluid header-custom">
      <div className="row align-items-center flex-nowrap">
        <div className="col-4 col-md-2 d-flex justify-content-start">
          <Link to="/Login">
            <img src={logo} alt="Learn Logo" className="logo" />
          </Link>
        </div>
        <div className="col-7 d-none d-md-block">
          <nav>
            <ul className="navbar-nav d-flex justify-content-start flex-row custom-ul">
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                <span className="material-symbols-outlined menu-icon">rss_feed</span>Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                <span className="material-symbols-outlined menu-icon">payments</span>Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                <span className="material-symbols-outlined menu-icon">manage_search</span>About Us
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                  <span className="material-symbols-outlined menu-icon">person</span>My Account
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="col-md-3 d-none d-md-flex justify-content-start justify-content-end">
          {!isLoggedIn ? (
            <div>
              <Link className="btn btn-outline-primary mr-2" to="/Login">
                Sign In
              </Link>
              <Link className="btn btn-primary" to="/Registration">
                Join Us
              </Link>
            </div>
          ) : (
            <button
              className="btn btn-outline-primary d-none d-md-inline-block"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </div>
        <div className="col-8 d-flex justify-content-end d-md-none">
          <button className="image-button" onClick={toggleMenu}>
            <span className="material-symbols-outlined hamburger-menu">
              menu
            </span>
          </button>
        </div>
        <div
          className={
            isMenuVisible ? "menu-container visible" : "menu-container"
          }
        >
          <Menu toggleMenu={toggleMenu} handleSignOut={handleSignOut} />
        </div>
      </div>
    </header>
  );
}

export default Header;
