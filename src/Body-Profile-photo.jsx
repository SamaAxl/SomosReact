import React from "react";

//esto se encarga de rotar la foto de perfil al momento de dar dos clicks
export default function Photo(props) {
  return (
    //renderiza una imagen con eventos
    <img
      id="mencho"
      onDoubleClick={doubleClick}
      onClick={click}
      onTouchStart={touch}
      className="circle-image photo"
      src={props.image}
      alt="Profile Image"
    />
  );
}

function transition() {
  document.getElementById("mencho").style.transition = "all .5s ease-in-out";
}

function doubleClick() {
  transition();
  document.getElementById("mencho").style.transform = "rotate(-360deg)";
}

function click() {
  transition();
  document.getElementById("mencho").style.transform = "rotate(360deg)";
}
//este es exclusivo de telefonos
function touch() {
  transition();
  document.getElementById("mencho").style.transform = "scale(1.2)";
}
