import React from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ votesNum }) {
  return (
    <div className="navBar">
      <Link to="/"><b>BENIDORM FEST 2022</b></Link>
      <Link to="/votes" className="votes-items">
        <BsEmojiHeartEyesFill />
        <p className="votes-num">{votesNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;
