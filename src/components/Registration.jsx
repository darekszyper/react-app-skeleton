import React, { useState } from "react";
import { Link } from "react-router-dom";
import registrationImage from "../registration.png";
import registrationImageFlat from "../registration-flat.png";

function Registration(props) {
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="text-center">
            <h2>Registration</h2>
            <p>Join us</p>
          </div>
          <div className="text-center">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={registrationImageFlat}
              />
              <source media="(min-width: 768px)" srcSet={registrationImage} />
              <img
                src={registrationImage}
                alt="Registration"
                className="img-fluid"
              />
            </picture>
          </div>
        </div>
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="trainer">Trainer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                required
              />
            </div>
            {role === "student" ? (
              <div>
                <div className="form-group">
                  <label htmlFor="date-of-birth">
                    Date of Birth (optional)
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date-of-birth"
                    name="date-of-birth"
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address (optional)</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    placeholder="Country&#10;Street 1/1&#10;Postal Code, City"
                  ></textarea>
                </div>
              </div>
            ) : null}
            {role === "trainer" ? (
              <div className="form-group">
                <label htmlFor="specialization">Specialization</label>
                <select
                  className="form-control"
                  id="specialization"
                  name="specialization"
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="java">Java</option>
                  <option value="javascript">JavaScript</option>
                </select>
              </div>
            ) : null}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Register
            </button>
          </form>
          <div className="text-center mb-3">
            <small className="text-muted">OR</small>
          </div>
          <div className="text-center mb-3">
            <small>
              Already have an account? <Link to="/Login">Sign in</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
