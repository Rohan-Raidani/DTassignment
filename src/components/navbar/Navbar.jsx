import "./navbar.css";
import logo from "../../../public/logo.svg";
import { FaBell, FaHome, FaTools } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <div className="home icons">
          <FaHome size={20} />
        </div>
        <div className="tools icons">
          <FaTools size={20} />
        </div>
        <div className="notification icons">
          <FaBell size={20} />
          <div className="red"></div>
        </div>
        <div className="profile icons">
          {/* <img src={profile} alt="" /> */}
        </div>
        <div className="menu">
          <BsThreeDotsVertical size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
