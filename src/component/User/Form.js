import React from "react";

const Form = ({ item }) => {
  return (
    <section className="modal-card-body">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="e.g Alex Smith"
            value={item.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
            value={item.email}
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
