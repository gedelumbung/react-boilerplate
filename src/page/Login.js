/* eslint-disable no-undef */
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions/login";
import LoginForm from "../component/Login/LoginForm";

class Login extends Component {
	constructor(props) {
		super(props);

		this.handleLogin = () => {
			this.props.actions.login();
		};
	}

	render() {
		return <LoginForm handleLogin={this.handleLogin} />;
	}
}

Login.propTypes = {
	loading: PropTypes.bool.isRequired,
	actions: PropTypes.object.isRequired,
	loginData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	const { loading, currentUser, loginData, errorMessage } = state.login;

	return {
		loading,
		currentUser,
		loginData,
		errorMessage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
