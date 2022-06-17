import React from "react";

//renderiza las estadisticas del perfil como posts seguidores y siguiendo
export default function Stats(props) {
  return (
    <div className="stats">
      <section>
        <h5>22</h5>
        <p>posts</p>
      </section>
      <section>
        <h5>20M</h5>
        <p>followers</p>
      </section>
      <section>
        <h5>4</h5>
        <p>following</p>
      </section>
    </div>
  );
}
