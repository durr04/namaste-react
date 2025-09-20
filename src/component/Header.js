import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const btnClickHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button style={{width: "50px", padding:"3px"}}onClick={()=> btnClickHandler()}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

// default export
export default Header;
