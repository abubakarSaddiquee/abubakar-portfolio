import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
function Logo(props) {
  const { text = "Abubakar", text2 = "Saddiq" } = props;

  const logo192Url = process.env.PUBLIC_URL + "/favicon.ico";

  return (
    <Link className="logo" to="">
      <img src={logo192Url} alt="" />
      <span>
        <strong>{text}</strong>
        <span>{text2}</span>
      </span>
    </Link>
  );
}
export default Logo;
