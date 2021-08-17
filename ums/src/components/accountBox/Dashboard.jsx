import { BoxContainer, SubmitButton } from "./common";
import { useHistory } from "react-router";
import StudentData from "./StudentData";
export function Dashboard(props) {
  const history = useHistory();
  function logout() {
    props.setLoginUser({});
    history.push("/");
  }
  return (
    <div>
      <BoxContainer>
        <h1>Hello {props.user.name.toUpperCase()}.</h1>
        <p>Branch: {props.user.branch}</p>
        <p>Email:{props.user.email}</p>
        <SubmitButton onClick={logout}>Logout</SubmitButton>
      </BoxContainer>
      <StudentData user={props.user} />
    </div>
  );
}
