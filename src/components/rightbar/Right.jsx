import { RxCross1 } from "react-icons/rx";
import "./right.css";

const Right = () => {
  return (
    <div className="right">
      <div className="rightmenu">
        <RxCross1 size={25} />
        <div className="notice">
          <div className="">N</div>
          <div className="">O</div>
          <div className="">T</div>
          <div className="">I</div>
          <div className="">C</div>
          <div className="">E</div>
        </div>
        <div className="board">
          <div className="">B</div>
          <div className="">O</div>
          <div className="">A</div>
          <div className="">R</div>
          <div className="">D</div>
        </div>
      </div>
    </div>
  );
};

export default Right;
