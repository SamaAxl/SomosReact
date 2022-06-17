import "./styles.css";
import Header from "./Header.jsx";
import BodyProfile from "./Body-Profile.jsx";
import Footer from "./footer.jsx";
import React from "react";

//renderiza la estructura (el perfil) de la pagina XD
export default function Profile() {
  return (
    <React.Fragment>
      <Header />
      <BodyProfile />
      <Footer />
    </React.Fragment>
  );
}

//esto no hace nada es codigo obsoleto
/*export function Main() {
  return (
    <React.Fragment>
      <Header />
      <Footer />
    </React.Fragment>
  );
}*/
