import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <aside className="column is-2 aside">
      <nav className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <Link to="/dashboard">
              <span className="icon is-small">
                <i className="fa fa-tachometer" />
              </span>{" "}
              Dashboard
            </Link>
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <a>
              <i className="fa fa-cog" /> Settings
            </a>
            <ul>
              <li>
                <Link to="/users">
                  Users
                </Link>
                <Link to="/roles">
                  Roles
                </Link>
                <Link to="/permissions">
                  Permissions
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarMenu;
