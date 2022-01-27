import React, { useState, useEffect } from "react";
import axios from "axios";
import { arr } from "./Cse";
import { useHistory } from "react-router";
import List from "./List";
export function SelectSubject(props) {
  const history = useHistory();
  //   console.log(props);
  function mongooseArrayToArray(mongooseArray, element) {
    for (let i = 0; i < mongooseArray.length; i++) {
      if (mongooseArray[i].subjectCode === element.subjectCode) {
        console.log("this works");
        return false;
      }
    }
    return true;
  }
  const [selectedSub, setSelectedSub] = useState(props.user.subject);
  const [alreadyReg, setAlreadyReg] = useState(props.user.subject);
  const [subToChoose, setSubToChoose] = useState([]);
  localStorage.setItem("curUser ", JSON.stringify(props.user));
  console.log("Component Reloaded");
  //( func => call on every reload, list= [set of state])
  useEffect(() => {
    const ToChoose = arr.filter((sub) => {
      return mongooseArrayToArray(alreadyReg, sub);
    });
    setSubToChoose(ToChoose);
  }, []);
  console.log(subToChoose);
  const RemSub = (sub) => {
    const newList = subToChoose;
    newList.push(sub);
    setSubToChoose(newList);

    const newSelectedSubList = selectedSub.filter((ele) => {
      return ele !== sub;
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
  const finalSubmit = () => {
    const user = { id: props.user._id, subj: selectedSub };
    axios.post("http://localhost:3001/selectsubject", user).then((res) => {
      alert(res.data.message);
    });

    history.push("/login");
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
                        Enrol
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
                        UnEnroll
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={finalSubmit}>Submit</button>
    </div>
  );
}
