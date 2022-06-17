import React from "react";
import Photo from "./Body-Profile-photo.jsx";
import Name from "./Body-Profile-info-name.jsx";
import Button from "./Body-Profile-info-button.jsx";
import Status from "./Body-Profile-info-status.jsx";
import Stats from "./Body-Profile.info-stats.jsx";
import StatsLG from "./Body-Profile.info-stats-lg.jsx";

//contiene la informacion del perfil
export default function ProfileInfo() {
  return (
    <React.Fragment>
      <div className="info container">
        <Photo image="https://nypost.com/wp-content/uploads/sites/2/2018/08/nemesio_oseguera_cervantes_el-mencho-11.jpg?quality=90&strip=all" />
        <div className="info-right">
          <Name name="ElMεμcho" />
          <Button id="profile-edit" button="Edit Profile" />
          <StatsLG />
        </div>
      </div>
      <div className="status container">
        <Status
          dname="Nemesio Oseguera"
          status="Aún así la victoria de Depp no justifica 
          milenios de violencia de género en contra de la mujer, 
          ahora Amber se enfrenta a daños psicológicos, emocional y 
          laborales producto del maltrato que Depp le ocasionaba, 
          si Estados Unidos tuviera mas mujeres en la corte de justicia, hubieran comprendido a Amber y ella ganaría por la deuda histórica que tienen los hombres hacia las 
          mujeres, se tenía que decir y se dijo 😍💋✨"
        />
      </div>
      <Stats />
    </React.Fragment>
  );
}
