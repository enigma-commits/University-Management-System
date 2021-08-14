import React from "react";
function List(props) {
  return (
    <tr>
      <td className="col">{props.listItem.subjectCode}</td>
      <td className="col">{props.listItem.subjectName}</td>
      <td className="col">{props.listItem.type}</td>
      <td className="col">{props.listItem.totalMarks}</td>
      <td className="col">{props.listItem.credits}</td>
    </tr>
  );
}
export default List;
//{ purchase: pur, category: cat, date: dt, cost: ct },
