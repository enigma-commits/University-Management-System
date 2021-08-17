import React from "react";
import Table from "./Table";
export function IT(props) {
  const arr = [
    {
      subjectName: "THEORY OF COMPUTATION",
      subjectCode: "BCS-16",
      totalMarks: 100,
      credits: 4,
      type: "Theory",
    },
    {
      subjectName: "COMPUTER ORGANIZATION & DESIGN",
      subjectCode: "BCS-17",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
    {
      subjectName: "SOFTWARE LAB-IV",
      subjectCode: "BCS-18",
      totalMarks: 100,
      credits: 2,
      type: "Practical",
    },
    {
      subjectName: "Management Information System",
      subjectCode: "MBA-113",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
  ];
  return <Table arr={arr} />;
}
