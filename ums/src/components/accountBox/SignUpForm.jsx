import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  OptionContainer,
  Label,
} from "./common";

export function SignUpForm(props) {
  const [email, setEmail] = useState("");
  const [uName, setUName] = useState("");
  const [emailF, setEf] = useState(true);
  const [passF, setPf] = useState(true);
  const [branch, setBranch] = useState("none");
  const [p, setP] = useState("");
  const [ap, setap] = useState("");
  const history = useHistory();
  function changeBranch(event) {
    setBranch(event.target.value);
  }
  function changeEmail(event) {
    setEmail(event.target.value);
  }
  function changeUName(event) {
    setUName(event.target.value);
  }
  function changeP(event) {
    setP(event.target.value);
  }
  function changeaP(event) {
    setap(event.target.value);
  }
  function validate() {
    let m = false;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    m = re.test(String(email).toLowerCase());
    setEf(m);
    setPf(p === ap);
    return m && p === ap && branch !== "none";
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      const user = {
        name: uName,
        email: email,
        pass: p,
        branch: branch,
        confPass: ap,
      };
      console.log(branch);
      console.log(branch);
      axios.post("http://localhost:3001/register", user).then((res) => {
        console.log(res.data.user);
        props.setUser(res.data.user);
        props.setRegister(true);
      });
      setEmail("");
      setUName("");
      setP("");
      setap("");
    } else {
      console.log("check all fields");
    }
  }
  const mystle = {
    color: "red",
    font_size: "1px",
    display: passF ? "none" : "inline",
  };
  function handleSignup() {
    history.push("/login");
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          placeholder="email"
          type="email"
          name={email}
          value={email}
          onChange={changeEmail}
        />
        <p
          style={{
            color: "red",
            font_size: "1px",
            display: emailF ? "none" : "inline",
          }}
        >
          *Invalid Email
        </p>
        <Input
          placeholder="User Name"
          type="text"
          name={uName}
          value={uName}
          onChange={changeUName}
        />
        <OptionContainer>
          <Label>Branch</Label>
          <select name="branch" id="branch" onChange={changeBranch}>
            <option value="none">Select</option>
            <option value="Computer Science And Engineering">CSE</option>
            <option value="Information Technology">Information Tech</option>
            <option value="Mechanical Engineering">Mechanical</option>
            <option value="Electrical Engineering">Electrical</option>
          </select>
        </OptionContainer>
        <Input
          placeholder="Password"
          type="Password"
          name={p}
          value={p}
          onChange={changeP}
        />
        <Input
          placeholder="confirm Password"
          type="Password"
          name={ap}
          value={ap}
          onChange={changeaP}
        />
        <p style={mystle}>*Password must match</p>
      </FormContainer>
      <MutedLink href="#">Forgot Password</MutedLink>
      <SubmitButton type="submit" onClick={handleSubmit}>
        SignUp
      </SubmitButton>
      <MutedLink href="#">
        Already have an aacoount?
        <BoldLink href="#" onClick={handleSignup}>
          SignIn
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
