import Navbar from "./components/navbar/Navbar";
import Right from "./components/rightbar/Right";
import Left from "./components/leftbar/Left";
import { FaQuestion } from "react-icons/fa";
import meeting from "../public/meeting.png";
import schedule from "../public/schedule.png";
import api from "../public/api.json";
import Cards from "./components/cards/Cards";

const App = () => {
  console.log(api.tasks[0].assets);

  return (
    <div className="app">
      <Navbar />
      <Right />
      <Left />
      <div className="options">
        <div className="question icons">
          <FaQuestion size={18} />
        </div>
        <div className="meeting icons">
          <img src={meeting} alt="" />
        </div>
        <div className="calender icons">
          <img src={schedule} alt="" />
        </div>
      </div>

      <div className="main">
        <header>
          <div className="content">
            <h1>Technical Project Management</h1>
          </div>
          <button>Submit Now</button>
        </header>
        <div className="explore">
          <h2>Explore the world of management</h2>
          <p style={{ fontSize: 20 }}>
            As a project manager, you play an important reole in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each and
            every step of your life?
          </p>
        </div>
        <div className="group">
          <Cards assets={api.tasks[0].assets} />
        </div>
      </div>
    </div>
  );
};

export default App;
