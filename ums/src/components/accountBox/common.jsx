import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;
export const MutedLink = styled.a`
  font-size: 12px;
  color: #716f81;
  font-weight: 500;
  margin-top: 8px;
  text-decoration: none;
`;
export const Option = styled.input`
  ${
    "" /* width: 50%;
  height: 50%; */
  }
  display: block;
  position: relative;
  flex-direction: row;
  transition: all 200ms ease-in-out;
`;
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  padding: 5px 0px;
  text-decoration: none;
`;
export const Label = styled.label`
  font-size: 15px;
  line-height: 1.25;
  margin: 2px;
  color: #716f81;
`;
export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 1);
  padding: 0px 10px;
  margin-top: 10px;
  border-bottom: 1.4px solid transparent;
  border: hidden;
  transition: all 200ms ease-in-out;
  &::placeholder {
    color: #716f81;
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px;
  cursor: pointer;
  margin-top: 0.5em;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(241, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
export const SubmitButtonAdmin = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px;
  cursor: pointer;
  margin-top: 0.5em;
  transition: all, 240ms ease-in-out;
  background: #ff7600;
  background: linear-gradient(58deg, rgba(241, 196, 15, 1) 20%, #ff7600 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;
export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(65deg);
  top: -300px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(241, 172, 18, 1) 100%
  );
  z-index: 5;
`;
export const BackDropAdmin = styled(motion.div)`
  width: 160%;
  height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(65deg);
  top: -300px;
  left: -70px;
  background: #ff7600;
  background: linear-gradient(58deg, rgba(241, 196, 15, 1) 20%, ##ff7600 100%);
  z-index: 5;
`;
export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  color: #fff;
`;
export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  z-index: 4;
`;
