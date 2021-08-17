import React from "react";
import Table from "./Table";
export function Electr() {
  const arr = [
    {
      subjectName: "Engineering Mathematics-IV",
      subjectCode: "BAS-23",
      totalMarks: 100,
      credits: 4,
      type: "Theory",
    },
    {
      subjectName: "Industrial Management ",
      subjectCode: "MBA-01",
      totalMarks: 100,
      credits: 3,
      type: "Theory",
    },
    {
      subjectName: "Electromechanical Energy Conversion-I ",
      subjectCode: "BEE-13",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
    {
      subjectName: "Network Analysis and Synthesis",
      subjectCode: "BEE-14",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
    {
      subjectName: "Introduction to Microprocessors ",
      subjectCode: "BEE-15",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
  ];
  return <Table arr={arr} />;
}
