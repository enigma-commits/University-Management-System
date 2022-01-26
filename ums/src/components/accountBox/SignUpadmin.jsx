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
  SubmitButtonAdmin,
} from "./common";

export function SignUpadmin(props) {
  const [email, setEmail] = useState("");
  const [uName, setUName] = useState("");
  const [emailF, setEf] = useState(true);
  const [passF, setPf] = useState(true);
  const [p, setP] = useState("");
  const [ap, setap] = useState("");
  const history = useHistory();
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
    return m && p === ap;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      const user = {
        name: uName,
        email: email,
        pass: p,
        confPass: ap,
      };
      axios.post("http://localhost:3001/regadmin", user).then((res) => {
        if (res.data.message === "Success") {
          console.log("this is here");
          console.log(res.data.admin);
          props.setUser(res.data.admin);
          props.setRegister(true);
        } else {
          alert(res.data.message);
        }
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
    history.push("/loginadmin");
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
      <SubmitButtonAdmin type="submit" onClick={handleSubmit}>
        SignUp
      </SubmitButtonAdmin>
      <MutedLink href="#">
        Already have an aacoount?
        <BoldLink href="#" onClick={handleSignup}>
          SignIn Admin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
