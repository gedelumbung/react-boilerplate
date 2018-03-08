import React, { Fragment } from "react";
import {Link} from "react-router-dom";

const Header = ({ title, icon }) => {
  return (
    <Fragment>
      <nav className="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              {title}
            </a>
          </li>
        </ul>
      </nav>
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="title has-text-primary">
              <i className={icon} /> {title}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
