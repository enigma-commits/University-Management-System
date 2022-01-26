import React, { useState, useEffect } from "react";
import { arr } from "./Cse";
import List from "./List";
export function SelectSubject(props) {
  //   console.log(props);
  const [selectedSub, setSelectedSub] = useState([]);
  const [alreadyReg, setAlreadyReg] = useState(props.user.subject);
  const [subToChoose, setSubToChoose] = useState([]);
  localStorage.setItem("curUser ", JSON.stringify(props.user));
  console.log("Component Reloaded");

  //( func => call on every reload, list= [set of state])
  useEffect(() => {
    const ToChoose = arr.filter((sub) => {
      return !alreadyReg.includes(sub);
    });
    setSubToChoose(ToChoose);
  }, []);
  //   console.log(subToChoose);
  const RemSub = (sub) => {
    const newList = subToChoose;
    newList.push(sub);
    setSubToChoose(newList);

    const newSelectedSubList = selectedSub.filter((ele) => {
      return ele != sub;
    });
    setSelectedSub(newSelectedSubList);
  };
  const AddSub = (sub) => {
    const newList = selectedSub;
    newList.push(sub);
    setSelectedSub(newList);

    const newSelectList = subToChoose.filter((ele) => {
      return ele != sub;
    });
    setSubToChoose(newSelectList);
  };
  return (
    <div>
      <div>
        <h2>All Subject</h2>
        <table className="table">
          <thead>
            <tr className="row">
              <th className>Sr. No.</th>
              <th className>Sub Code</th>
              <th className>Sub Name</th>
              <th className>Type</th>
              <th className>Total Marks</th>
              <th className>Credits</th>
              <th className>Choose</th>
            </tr>
          </thead>
          <tbody>
            {subToChoose.map((element, index) => {
              return (
                <>
                  <tr className="row">
                    <List key={index} id={index} listItem={element} />
                    <td className>
                      <button
                        onClick={() => {
                          AddSub(element);
                        }}
                      >
                        Add Sub
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Selected Subject</h2>
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
            {selectedSub.map((element, index) => {
              return (
                <>
                  <tr className="row">
                    <List key={index} id={index} listItem={element} />
                    <td className>
                      <button
                        onClick={() => {
                          RemSub(element);
                        }}
                      >
                        Remove Sub
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={() => {}}>Submit</button>
    </div>
  );
}
