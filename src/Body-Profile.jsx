import React from "react";
import ProfileInfo from "./Body-Profile-info.jsx";
import Grid from "./Body-Profile-grid.jsx";

//renderiza el perfil en conjunto
export default function BodyProfile() {
  return (
    <div className="bodyProfile">
      <ProfileInfo />
      <Grid />
    </div>
  );
}
