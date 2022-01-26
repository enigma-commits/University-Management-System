import React from "react";
import { InnerContainer, SubmitButtonAdmin } from "./common";
import { useHistory } from "react-router";
export function ThnakYouAdmin(props) {
  const user = props.user;
  console.log("here");
  console.log(user);
  const history = useHistory();
  function handleClick() {
    history.push("/loginadmin");
  }
  return (
    <InnerContainer>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <SubmitButtonAdmin onClick={handleClick}>
        CLick To SignInAdmin
      </SubmitButtonAdmin>
    </InnerContainer>
  );
}
