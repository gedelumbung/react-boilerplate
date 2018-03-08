import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/users/${user.id}/edit`}>
          <i className="fa fa-edit" /> Edit
        </Link>{" "}
        <Link to={`/users/${user.id}/delete`}>
          <i className="fa fa-trash" /> Delete
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;
