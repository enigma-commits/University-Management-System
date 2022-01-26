import React from "react";
import TableAdmin from "./TableAdmin";

export default function AdminData(props) {
  return <TableAdmin users={props.users} />;
}
