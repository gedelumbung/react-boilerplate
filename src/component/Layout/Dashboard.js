import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import TopNavigation from "./TopNavigation";
import Footer from "./Footer";

const Dashboard = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          <TopNavigation />
          <div className="wrapper">
            <div className="columns">
              <SidebarMenu />
              <main className="container main">
                <Component {...matchProps} />
              </main>
            </div>
          </div>
        </Fragment>
      )}
    />
  );
};

export default Dashboard;
