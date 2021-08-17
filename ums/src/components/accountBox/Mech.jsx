import React from "react";
import Table from "./Table";
export function Mech(props) {
  const arr = [
    {
      subjectName: "Numerical Methods",
      subjectCode: "BAS-29",
      totalMarks: 100,
      credits: 5,
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
      subjectName: "Fluid Mechanics",
      subjectCode: "BME-16",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
    {
      subjectName: "Communication Sk",
      subjectCode: "BAS-20",
      totalMarks: 100,
      credits: 0,
      type: "Audit",
    },
    {
      subjectName: "Kinematics of Machines",
      subjectCode: "BME-17",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
    {
      subjectName: "Energy Conversion Systems",
      subjectCode: "BME-18",
      totalMarks: 100,
      credits: 5,
      type: "Theory",
    },
  ];
  return <Table arr={arr} />;
}
