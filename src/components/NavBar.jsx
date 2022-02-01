import React from "react";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

function NavBar() {
  return (
    <div className="navBar">
      <a><b>BENIDORM FEST 2022</b></a>
      <div className="votes-items">
        <BsEmojiHeartEyesFill />
        <p className="votes-num">0</p>
      </div>
    </div>
  );
}

export default NavBar;
