import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ onOpenModal, user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <a onClick={onOpenModal(user)}>
          <i className="fa fa-edit" /> Edit
        </a>
        {' '}
        <a>
          <i className="fa fa-edit" /> Delete
        </a>
      </td>
    </tr>
  );
};

export default TableItem;
