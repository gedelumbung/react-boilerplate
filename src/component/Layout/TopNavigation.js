import React from "react";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  return (
    <header className="hero is-light">
      <div className="hero-head">
        <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item is--brand">
              <strong>REACT BOILERPLATE</strong>
            </a>
            <button className="button navbar-burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="navbar-menu navbar-end" id="navMenu">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <figure
                  className="image is-32x32"
                  style={{ marginRight: ".5em" }}
                >
                  <img src="https://picsum.photos/100/100" />
                </figure>
                John Doe
              </a>
              <div className="navbar-dropdown is-right">
                <a className="navbar-item">
                  <span className="icon is-small">
                    <i className="fa fa-user-o" />
                  </span>
                  Profile
                </a>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/">
                  <span className="icon is-small">
                    <i className="fa fa-power-off" />
                  </span>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopNavigation;
