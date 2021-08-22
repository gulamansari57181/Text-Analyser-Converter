import React from "react";

export default function Title(props) {
  return (
    <>
      {/* Navbar Componenet with bootstrap */}

      <div className="title">
        <a className="title" href="/">
          {" "}
          {props.appName}{" "}
        </a>
      </div>
    </>
  );
}
