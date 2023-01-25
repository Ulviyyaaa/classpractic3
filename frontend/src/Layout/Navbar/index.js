import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Navbar() {
  return (
    <>
      <div className="mainNav">
        <div className="navLogo">
          <h3>Studio</h3>
        </div>
        <div className="navLii">
          <Link className="li" to={"/"}>Home</Link>
          <Link className="li" to={"/add"}>Add</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
