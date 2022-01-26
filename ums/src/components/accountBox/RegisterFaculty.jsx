import React, { useState } from "react";
import styled from "styled-components";
import { BackDropAdmin, InnerContainer } from "./common";
import { ThnakYou } from "./ThankYou";
import { SignUpadmin } from "./SignUpadmin";
import { ThnakYouAdmin } from "./ThankYouAdmin";
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
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  color: #fff;
`;
const SmallText = styled.h5`
  font-size: 11px;
  color: #fff;
`;
export default function RegisterFaculty(props) {
  const [registered, setRegister] = useState(false);
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <BoxContainer>
      <TopContainer>
        <BackDropAdmin />
        {registered === false ? (
          <HeaderContainer>
            <HeaderText>Welcome</HeaderText>
            <HeaderText>To UMS Admin</HeaderText>
            <SmallText>Please SignUp To Continue</SmallText>
          </HeaderContainer>
        ) : (
          <HeaderContainer>
            <HeaderText>ThnakYou For Registering</HeaderText>
          </HeaderContainer>
        )}
      </TopContainer>
      {registered === false ? (
        <InnerContainer>
          <SignUpadmin setUser={setUser} setRegister={setRegister} />
        </InnerContainer>
      ) : (
        <ThnakYouAdmin user={user} />
      )}
    </BoxContainer>
  );
}
