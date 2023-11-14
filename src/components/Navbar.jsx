import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <>
      <Fade top>
        <div className="container-fluid nav_bar fixed-top mb-3">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <a className="navbar-brand py-2">
                    <Link to="/">Logo</Link>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto rounded py-2">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page">
                            <Link to="/">Home</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/about">About</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/skills">Skills</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/projects">Projects</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <Link to="/contact">Contact</Link>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <button
                              onClick={handleClick}
                              className="border-0 bg-transparent px-3"
                            >
                              {theme ? "Light Theme" : "Dark Theme"}
                            </button>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Fade>
      <Outlet />
    </>
  );
}
