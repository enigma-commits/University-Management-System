import { BoxContainer, SubmitButton, BackDrop } from "./common";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Boxcontainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const HeaderContainer = styled.div`
  width: 100%;
  flex-direction: column;
  z-index: 8;
`;
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  color: #fff;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  z-index: 4;
`;

export function Home(props) {
  const history = useHistory();
  function handleSign() {
    history.push("/login");
  }
  function handleSignup() {
    history.push("/register");
  }
  return (
    <Boxcontainer>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>To UMS</HeaderText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <BoxContainer>
          <SubmitButton onClick={handleSign}>SignIn</SubmitButton>
          <SubmitButton onClick={handleSignup}>SignUp</SubmitButton>
        </BoxContainer>
      </InnerContainer>
    </Boxcontainer>
  );
}
