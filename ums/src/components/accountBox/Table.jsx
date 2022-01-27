import React, { useState } from "react";
import List from "./List";
import { div } from "prelude-ls";
function Table(props) {
  function mongooseArrayToArray(mongooseArray) {
    const array = [];
    for (let i = 0; i < mongooseArray.length; i += 1) {
      array.push(mongooseArray[i]);
    }
    return array;
  }
  const subject = mongooseArrayToArray(props.subject);
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
            console.log(element);
            return (
              <tr>
                <List key={index} id={index} listItem={element} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
