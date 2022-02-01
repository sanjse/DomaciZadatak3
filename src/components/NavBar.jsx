import React from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

function NavBar({ votesNum }) {
  return (
    <div className="navBar">
      <a><b>BENIDORM FEST 2022</b></a>
      <div className="votes-items">
        <BsEmojiHeartEyesFill />
        <p className="votes-num">{votesNum}</p>
      </div>
    </div>
  );
}

export default NavBar;
