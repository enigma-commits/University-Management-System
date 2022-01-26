import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { HeaderText, BackDropAdmin } from "./common";
import { LoginFormAdmin } from "./LoginFormAdmin";
const BoxContainer = styled.div`
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

const SmallText = styled.h5`
  font-size: 11px;
  color: #fff;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  z-index: 4;
`;

export default function LoginAdmin(props) {
  const setLoginUser = props.setLoginUser;
  return (
    <BoxContainer>
      <TopContainer>
        <BackDropAdmin />
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>To UMS Admin</HeaderText>
          <SmallText>Please SignIn To Continue</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <LoginFormAdmin setLoginUser={setLoginUser} setUsers={props.setUsers} />
      </InnerContainer>
    </BoxContainer>
  );
}
