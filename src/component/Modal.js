import React from "react";

const Form = ({ title, item, isOpen, onCloseModal, component:Component }) => {
  return (
    <div className={`modal ${isOpen}`} id="form">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onCloseModal}
          />
        </header>
        <Component item={item}/>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={onCloseModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Form;
