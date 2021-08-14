import React from "react";
import { InnerContainer, SubmitButton } from "./common";
import { useHistory } from "react-router";
export function ThnakYou(props) {
  const user = props.user;
  const history = useHistory();
  function handleClick() {
    history.push("/login");
  }
  return (
    <InnerContainer>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <p>Branch:{user.branch}</p>
      <SubmitButton onClick={handleClick}>CLick To SignIn</SubmitButton>
    </InnerContainer>
  );
}
