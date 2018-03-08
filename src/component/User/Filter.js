import React from "react";

const Filter = ({ onSubmit }) => {
  return (
    <div className="columns is-desktop">
      <div className="column">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              name="name_like"
              onKeyPress={onSubmit}
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              name="email_like"
              onKeyPress={onSubmit}
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
