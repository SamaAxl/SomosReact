import React from "react";

//le da comportamiento a las imagenes guardadas
export default function LikedPost(props) {
  return (
    <React.Fragment>
      <div className="card-content">
        <div className="card-icon">
          <svg
            className="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 9H7V7H17V9Z" fill="currentColor" />
            <path d="M7 13H17V11H7V13Z" fill="currentColor" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <img className="card-image" src={props.image} alt="" />
      </div>
    </React.Fragment>
  );
}
