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
export function LoginFormAdmin(props) {
  const history = useHistory();
  const [email, setemail] = useState("");
  function changeemail(event) {
    setemail(event.target.value);
  }
  const [pass, setPass] = useState("");
  function changePass(event) {
    setPass(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    const user = { email: email, pass: pass };
    axios.post("http://localhost:3001/loginadmin", user).then((res) => {
      if (res.data.message === "Success") {
        props.setUsers(res.data.user);
        props.setLoginUser(res.data.admin);
        history.push("/dashboardadmin");
      } else {
        alert(res.data.message);
      }
    });
  }
  function handleSign() {
    history.push("/regadmin");
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          placeholder="Email"
          type="text"
          name={email}
          value={email}
          onChange={changeemail}
        />
        <Input
          placeholder="Password"
          type="Password"
          name={pass}
          value={pass}
          onChange={changePass}
        />
      </FormContainer>
      <SubmitButtonAdmin type="submit" onClick={handleSubmit}>
        SignIn Admin
      </SubmitButtonAdmin>
      <MutedLink href="#">
        Don't have an aacoount?
        <BoldLink
          href="#"
          onClick={function (event) {
            handleSign();
          }}
        >
          SignUp
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
