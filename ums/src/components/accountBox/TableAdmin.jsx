import React, { useState } from "react";
import { div } from "prelude-ls";
import ListAdmin from "./ListAdmin";
function TableAdmin(props) {
  const arr = props.users;
  console.log("here");
  console.log(arr);
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="row">
            <th className>Sr. No.</th>
            <th className>Name</th>
            <th className>Email</th>
            <th className>Branch</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, index) => {
            return <ListAdmin key={index} id={index} listItem={element} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TableAdmin;
