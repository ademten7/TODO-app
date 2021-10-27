import React from "react";

const NotFound = (props) => {
  return (
    <div>
      <h1>Page not found</h1>
      {/* <img onClick={() => props.history.push("/")} */}
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg"
        alt=""
        width="400"
      />
      <button
        className="btn not-found-btn"
        onClick={() => props.history.push("/")}
      >
        Home Page
      </button>
    </div>
  );
};

export default NotFound;
