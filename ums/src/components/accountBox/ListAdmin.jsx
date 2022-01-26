import React from "react";
function ListAdmin(props) {
  return (
    <tr>
      <td className="col">{props.id + 1}</td>
      <td className="col">{props.listItem.name}</td>
      <td className="col">{props.listItem.email}</td>
      <td className="col">{props.listItem.branch}</td>
    </tr>
  );
}
export default ListAdmin;
