import React, { useState } from "react";
import List from "./List";
import { div } from "prelude-ls";
function Table(props) {
  const arr = props.arr;
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="row">
            <th className>Sub Code</th>
            <th className>Sub Name</th>
            <th className>Type</th>
            <th className>Total Marks</th>
            <th className>Credits</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, index) => {
            return <List key={index} id={index} listItem={element} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
