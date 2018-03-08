import React from "react";

const LoginForm = ({ handleLogin }) => {
  return (
    <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://picsum.photos/100/100" />
                </figure>
                  <div className="field">
                    <div className="control">
                      <input className="input is-large" type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input is-large" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth" onClick={handleLogin}>Login</button>
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> -  <a href="../">Forgot Password</a>
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default LoginForm;
