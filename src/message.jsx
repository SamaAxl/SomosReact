import React from "react";

//renderiza el usuario que comenta al momento de iniciar sesion
function Message(props) {
  return (
    <React.Fragment>
      <div className="user">
        <img
          className="comment-image"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG5plcXYJJFDA/profile-displayphoto-shrink_200_200/0/1517285311837?e=1657756800&v=beta&t=Ha8FWmgabIKjrYgjgtFsN8_8TYunmcOjJwERaOL8Udw"
          alt="Image"
        />
        <div className="user-data">
          <h4 className="user-name">Rubio Rascon</h4>
          <p>{props.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Message;
