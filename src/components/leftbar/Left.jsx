import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./left.css";

const Left = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`left ${expanded ? "expanded" : ""}`} onClick={toggleMenu}>
      <div className="lefttab">
        <div className="back">
          <FaArrowRight size={15} />
        </div>
        {expanded && <div className="text">Journey Board</div>}
      </div>
      <div className="leftmenu">
        {expanded ? (
          <ul className="list1">
            <li style={{ fontWeight: 800, marginBottom: 10 }}>
              Explore the world of management
            </li>
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
          </ul>
        ) : (
          <div className="number">1</div>
        )}
      </div>
    </div>
  );
};

export default Left;
