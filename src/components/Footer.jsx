import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="container-fluid footer-custom mt-5">
      <div className="container">
        <div className="row mt-3 justify-content-center">
          <div className="col-lg-2 text-center mt-2">
            <Link to="/">
              <img src={logo} alt="Learn Logo" className="logo img-fluid" />
            </Link>
          </div>
          <div className="col-lg-2 text-center mt-2">
            <h5 className="font-weight-bold">Product</h5>
            <nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/features">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 text-center mt-2">
            <h5 className="font-weight-bold">Resources</h5>
            <nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user-guides">
                    User guides
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/webinars">
                    Webinars
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 text-center mt-2">
            <h5 className="font-weight-bold">Company</h5>
            <nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contacts us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" col-8 col-lg-4 text-center mt-2">
            <h5 className="subscribe-heading">Subscribe to our newsletter</h5>
            <small>For product announcements and exclusive insights</small>
            <form
              onSubmit={handleSubscription}
              className="d-flex justify-content-center position-relative mt-2 email-icon"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
                id="subscribe-input"
              />
              <button
                type="submit"
                className="btn btn-primary"
                id="subscribe-button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="row align-items-center flex-wrap-reverse justify-content-between">
          <div className="col-lg-2 d-flex justify-content-center mt-2">
            <select className="language-dropdown">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>

          <div className="col-lg-4 d-flex justify-content-center mt-2">
            <a
              className="social-icons"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fi fi-brands-twitter-alt"></i>
            </a>
            <a
              className="social-icons"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fi fi-brands-facebook"></i>
            </a>
            <a
              className="social-icons"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fi fi-brands-instagram"></i>
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>
              &copy; 2023 Learn, Inc. | <Link to="/privacy">Privacy</Link> |{" "}
              <Link to="/terms">Terms</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
