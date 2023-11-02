import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { AuthContext } from "../AuthContext";

function Login(props) {
  const [isVerified, setIsVerified] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRecaptcha(value) {
    setIsVerified(true);
  }

  function handlePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // Simulating an API call with a 2-second delay
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
      setUsername("");
      setPassword("");
      navigate("/");
    }, 1000);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const visibilityButton = isPasswordVisible ? (
    <span className="material-symbols-outlined">visibility</span>
  ) : (
    <span className="material-symbols-outlined">visibility_off</span>
  );

  const submitButton = (
    <div className="position-relative">
      <button
        disabled={isLoading || !isVerified}
        type="submit"
        className="btn btn-primary btn-block mb-3"
      >
        Sign In
      </button>
      {isLoading && (
        <div className="spinner-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="login-width">
          <div className="text-center mb-4">
            <h2>Sign In</h2>
            <p>Welcome back</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group username-icon">
              <input
                type="text"
                className="form-control padding-for-icon"
                id="username"
                name="username"
                placeholder="User name"
                value={username}
                onChange={handleUsernameChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group password-icon">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control padding-for-icon"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                onClick={handlePasswordVisibility}
                className="visibility-button"
              >
                {visibilityButton}
              </button>
            </div>
            {submitButton}
          </form>
          <div className="text-center mb-3">
            <small className="text-muted">OR</small>
          </div>
          <div className="text-center mb-3">
            <small>
              Don't have an account? <Link to="/Registration">Sign up</Link>
            </small>
          </div>
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleRecaptcha}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
