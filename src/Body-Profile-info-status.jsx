import React from "react";

//renderiza la biografia del perfil
export default function Satus(props) {
  return (
    <React.Fragment>
      <h5>{props.dname}</h5>
      <p>{props.status}</p>
    </React.Fragment>
  );
}
