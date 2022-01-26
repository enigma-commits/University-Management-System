import { BoxContainer, SubmitButton } from "./common";
import { useHistory } from "react-router";
import AdminData from "./AdminData";
export function DashboardAdmin(props) {
  const history = useHistory();
  function logout() {
    props.setLoginUser({});
    props.setUsers({});
    history.push("/loginadmin");
  }
  return (
    <div>
      <BoxContainer>
        <h1>Hello {props.user.name.toUpperCase()}.</h1>
        <p>Email:{props.user.email}</p>
        <SubmitButton onClick={logout}>Logout</SubmitButton>
        <AdminData users={props.users} />
      </BoxContainer>
    </div>
  );
}
