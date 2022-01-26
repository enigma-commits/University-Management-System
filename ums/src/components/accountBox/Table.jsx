import React, { useState } from "react";
import List from "./List";
import { div } from "prelude-ls";
function Table(props) {
  const subject = props.subject;
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="row">
            <th className>Sr. No.</th>
            <th className>Sub Code</th>
            <th className>Sub Name</th>
            <th className>Type</th>
            <th className>Total Marks</th>
            <th className>Credits</th>
          </tr>
        </thead>
        <tbody>
          {subject.map((element, index) => {
            return <List key={index} id={index} listItem={element} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
