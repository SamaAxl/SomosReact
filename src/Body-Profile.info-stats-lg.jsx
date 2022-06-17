import React from "react";

//renderiza las estadisticas del perfil como posts seguidores y siguiendo en telefono
export default function StatsLG(props) {
  return (
    <div className="stats-lg none">
      <section className="stats-lg-content">
        <h5>22</h5>
        <p>posts</p>
      </section>
      <section className="stats-lg-content">
        <h5>20M</h5>
        <p>followers</p>
      </section>
      <section className="stats-lg-content">
        <h5>4</h5>
        <p>following</p>
      </section>
    </div>
  );
}
