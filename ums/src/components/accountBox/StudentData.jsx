import React from "react";
import { Cse } from "./Cse";
import { IT } from "./IT";
import { Mech } from "./Mech";
import { Electr } from "./Electr";
export default function StudentData(props) {
  const branch = props.user.branch;
  if (branch === "Computer Science And Engineering") {
    return <Cse />;
  } else if (branch === "Information Technology") {
    return <IT />;
  } else if (branch === "Mechanical Engineering") {
    return <Mech />;
  } else {
    return <Electr />;
  }
}
