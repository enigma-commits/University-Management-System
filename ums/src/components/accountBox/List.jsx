import React from "react";
function List(props) {
  return (
    <>
      <td className="col">{props.id + 1}</td>
      <td className="col">{props.listItem.subjectCode}</td>
      <td className="col">{props.listItem.subjectName}</td>
      <td className="col">{props.listItem.type}</td>
      <td className="col">{props.listItem.totalMarks}</td>
      <td className="col">{props.listItem.credits}</td>
    </>
  );
}
export default List;
