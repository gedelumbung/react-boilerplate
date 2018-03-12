import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class SidebarMenu extends Component {
  render() {
    const { menus } = this.props;
    return (
      <aside className="column is-2 aside">
        <nav className="menu">
          {menus.map((menu, index) => {
            return (
              <Fragment key={index}>
                <p className="menu-label">{menu.group_name}</p>
                <ul className="menu-list">
                  {menu.menu.map((child, index) => {
                    return (
                      <li key={index}>
                        <Link to={`${child.url}`}>
                          <span className="icon is-small">
                            <i className="fa fa-tachometer" />
                          </span>{" "}
                          {child.title}
                        </Link>
                        <ul>
                          <li>
                          {child.childs.map((sub, index) => {
                            return (
                              <Link key={index} to={`${sub.url}`}>{sub.title}</Link>
                            );
                          })}
                          </li>
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            );
          })}
        </nav>
      </aside>
    );
  }
}

SidebarMenu.propTypes = {
  menus: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.menu
  };
}

export default connect(mapStateToProps)(SidebarMenu);
