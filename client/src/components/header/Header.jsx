import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h3>Mearn Blog App </h3>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
