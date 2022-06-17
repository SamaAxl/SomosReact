import React from "react";
import CommentPost, {
  MarkPost,
  GridPost
} from "./Body-Profile-grid-createPost.jsx";
//renderiza los iconos mediante vectores y da forma a la rejilla del perfil
export default function Grid(props) {
  return (
    <div className="container">
      <article className="carousel">
        <input type="radio" name="slides" id="slide-1" />
        <input type="radio" name="slides" id="slide-2" />
        <input type="radio" name="slides" id="slide-3" />
        <aside className="slide-nav">
          <label htmlFor="slide-1" id="dot-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4H8V8H4V4Z" fill="currentColor" />
              <path d="M4 10H8V14H4V10Z" fill="currentColor" />
              <path d="M8 16H4V20H8V16Z" fill="currentColor" />
              <path d="M10 4H14V8H10V4Z" fill="currentColor" />
              <path d="M14 10H10V14H14V10Z" fill="currentColor" />
              <path d="M10 16H14V20H10V16Z" fill="currentColor" />
              <path d="M20 4H16V8H20V4Z" fill="currentColor" />
              <path d="M16 10H20V14H16V10Z" fill="currentColor" />
              <path d="M20 16H16V20H20V16Z" fill="currentColor" />
            </svg>
          </label>
          <label htmlFor="slide-2" id="dot-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                fill="currentColor"
              />
            </svg>
          </label>
          <label htmlFor="slide-3" id="dot-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                fill="currentColor"
              />
            </svg>
          </label>
        </aside>
        <ul className="slides">
          <li className="slide">
            <div className="grid container">{<GridPost />}</div>
          </li>
          <li className="slide">
            <div className="grid container">{<MarkPost />}</div>
          </li>
          <li className="slide">
            <div className="container">{<CommentPost />}</div>
          </li>
        </ul>
      </article>
    </div>
  );
}
