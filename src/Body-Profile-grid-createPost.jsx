import React from "react";
import Post from "./Body-Profile-grid-posts.jsx";
import Posts from "./posts.jsx";
import LikedPosts from "./likedPosts.jsx";
import LikedPost from "./Body-Profile-grid-likedPosts.jsx";
import MessageList from "./messageList.jsx";
import { useState } from "react";

//funcion que ayuda a comentar
function CommentPost() {
  const [logged, updatelogged] = useState(false);

  //verifica que este loggeado
  const notLogged = (
    <React.Fragment>
      <div className="notlogged">
        <p>Necesitas iniciar sesión para poder ver el contenido.</p>
      </div>
      <button
        className="login"
        onClick={() => {
          updateLog();
        }}
      >
        Iniciar Sesión
      </button>
    </React.Fragment>
  );

  //funcion que realiza el login del usuario
  function updateLog(event) {
    updatelogged((current) => !current);
  }
  return (
    <React.Fragment>{logged ? <MessageList /> : notLogged}</React.Fragment>
  );
}

//crea un post con el nombre e imagen del usuario
function createPost(Posts) {
  return <Post key={Posts.id} image={Posts.image} />;
}

//estas ayudan a renderizar las imagenes posteadas del usuario
function createLikedPosts(LikedPosts) {
  return <LikedPost key={LikedPosts.id} image={LikedPosts.image} />;
}

export function GridPost() {
  return <React.Fragment>{Posts.map(createPost)}</React.Fragment>;
}
export function MarkPost() {
  return <React.Fragment>{LikedPosts.map(createLikedPosts)}</React.Fragment>;
}

export default CommentPost;
