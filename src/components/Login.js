import React from "react";

function Login(props) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="text-center mb-4">
            <h2>Sign In</h2>
            <p>Welcome back</p>
          </div>
          <form action="your-login-script.php" method="post">
            <div className="form-group username-icon">
              <input
                type="text"
                className="form-control padding-for-icon"
                id="username"
                name="username"
                placeholder="User name"
                required=""
              />
            </div>
            <div className="form-group password-icon">
              <input
                type="password"
                className="form-control padding-for-icon"
                id="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <button className="password-visibility-button">
                <span className="material-symbols-outlined"> visibility </span>
              </button>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign In
            </button>
          </form>
          <div className="text-center mb-3">
            <small className="text-muted">OR</small>
          </div>
          <div className="text-center mb-3">
            <small>
              Don't have an account? <a href="#top">Sign up</a>
            </small>
          </div>
          <div className="recaptcha-container">
            <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
