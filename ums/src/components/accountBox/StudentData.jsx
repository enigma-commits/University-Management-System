import React from "react";
import { Cse } from "./Cse";
import { IT } from "./IT";
import { Mech } from "./Mech";
import { Electr } from "./Electr";
import { SelectSubject } from "./SelectSubject";
import Table from "./Table";
export default function StudentData(props) {
  const branch = props.user.branch;
  if (branch === "Computer Science And Engineering") {
    return <Table subject={props.user.subject} />;
  } else if (branch === "Information Technology") {
    return <Table subject={props.user.subject} />;
  } else if (branch === "Mechanical Engineering") {
    return <Table subject={props.user.subject} />;
  } else {
    return <Table subject={props.user.subject} />;
  }
}
