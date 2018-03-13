import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { unionWith, isEqual } from "lodash";

import * as actions from "../../actions/users";
import Loading from "../../component/Loading";
import Header from "../../component/Layout/Header";
import Modal from "../../component/Modal";
import Form from "../../component/User/Form";
import Filter from "../../component/User/Filter";
import TableItem from "../../component/User/TableItem";
import Pagination from "../../component/Pagination";

class Users extends Component {
  state = {
    params: {
      _limit: 15,
      _page: 1,
      name_like: "",
      email_like: "",
      isOpen: "",
      selectedItem: null
    }
  };

  onSetParams = (key, value) => {
    return () => {
      let params = {};
      params[key] = value;
      this.setParams(params);
    };
  };

  setParams = filteredParams => {
    let { params } = this.state;
    params = { ...params, ...filteredParams };
    this.setState({
      params
    });
    this.props.actions.getUsers(params);
  };

  onSubmitFilter = e => {
    if (e.charCode == 13 || e.charCode == undefined) {
      const { name, value } = e.target;
      let params = {};
      params[name] = value;
      params["_page"] = 1;
      this.setParams(params);
    }
  };

  onOpenModal = item => {
    return () => {
      this.setState({
        isOpen: "is-active",
        selectedItem: item
      });
    };
  };

  onCloseModal = () => {
    this.setState({
      isOpen: ""
    });
  };

  componentDidMount() {
    const { params } = this.state;
    this.props.actions.getUsers(params);
  }

  render() {
    const { users, loading, pagination_links } = this.props;
    const { params, isOpen, selectedItem } = this.state;

    return (
      <Fragment>
        {selectedItem && (
          <Modal
            isOpen={isOpen}
            onCloseModal={this.onCloseModal}
            item={selectedItem}
            component={Form}
            title="User"
          />
        )}
        <Header title="Users" icon="fa fa-users" />
        <Filter onSubmit={this.onSubmitFilter} />
        <div className="container is-multiline">
          <div className="column">
            <table className="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Loading />
                ) : users.length > 0 ? (
                  users.map((user, index) => {
                    return (
                      <TableItem
                        user={user}
                        key={index}
                        onOpenModal={this.onOpenModal}
                      />
                    );
                  })
                ) : (
                  "No data..."
                )}
              </tbody>
            </table>
            <Pagination
              onClick={this.onSetParams}
              paginations={pagination_links}
              params={params}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ...state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
