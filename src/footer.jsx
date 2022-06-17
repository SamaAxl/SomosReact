import React from "react";

//renderiza el pie de pagina y su informacion
export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <section className="footer-link">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Top Accounts</a>
          <a href="#">Hashtags</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Contact Uploading & Non-Users</a>
        </section>
        <aside className="footer-data">
          <a href="#">English</a>
          <p>©SOMOS SOFT from Meta {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </React.Fragment>
  );
}
