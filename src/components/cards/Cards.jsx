/* eslint-disable react/prop-types */
import { useState } from "react";
import "./cards.css";
import {
  FaAngleUp,
  FaChevronDown,
  FaChevronUp,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { MdMessage, MdOutlineTurnLeft, MdTurnRight } from "react-icons/md";
import { IoMdBulb } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const TechnicalCard = ({ asset }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

  return (
    <div
      className={`card video-card ${
        isDescriptionVisible ? "description-open" : "description-closed"
      }`}
    >
      <div className="head">
        <h4>{asset.asset_title}</h4>
        <div
          className="help"
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        >
          i
        </div>
      </div>
      <div className="content">
        <div className="description">
          <div className="desc">
            <p>
              <b>Description:</b> {asset.asset_description}
            </p>
          </div>
        </div>
        {asset.asset_content && (
          <iframe
            title={asset.asset_title}
            width="100%"
            height="200px"
            src={asset.asset_content}
            frameBorder="0"
          ></iframe>
        )}
      </div>
    </div>
  );
};

const ThreadCard = ({ asset }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  return (
    <div
      className={`card thread-card ${
        isDescriptionVisible ? "description-open" : "description-closed"
      }`}
    >
      <div className="head card-header">
        <h3>{asset.asset_title}</h3>
        <div
          className="help"
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        >
          i
        </div>
      </div>
      <div className="content card-body">
        <div className="description">
          <div className="desc">
            <p>
              <b>Description:</b> {asset.asset_description}
            </p>
          </div>
        </div>
        <div className="thread-container">
          <div className="thread-name">
            {" "}
            <FaChevronUp /> <h2>Thread A</h2>
          </div>
          <div className="thread-item">
            <div className="sub">
              <label htmlFor="sub-thread-1">Sub thread 1</label>
              <input
                type="text"
                id="sub-thread-1"
                placeholder="Enter Text here"
              />
            </div>
            <div className="sub">
              <label htmlFor="sub-interpretation-1">Sub Interpretation 1</label>
              <input
                type="text"
                id="sub-interpretation-1"
                placeholder="Enter Text here"
              />
            </div>
          </div>
          <div className="thread-actions">
            <div className="icons">
              <IoMdBulb size={20} />
              <MdMessage size={20} />
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4499 0H3.11654C1.82154 0 0.783203 0.857143 0.783203 1.90476V15.2381C0.783203 16.2857 1.82154 17.1429 3.11654 17.1429H7.7832L11.2832 20L14.7832 17.1429H19.4499C20.7332 17.1429 21.7832 16.2857 21.7832 15.2381V1.90476C21.7832 0.857143 20.7332 0 19.4499 0ZM12.4499 15.2381H10.1165V13.3333H12.4499V15.2381ZM14.8649 7.85714L13.8148 8.73338C12.9748 9.42861 12.4499 10 12.4499 11.4286H10.1165V10.9524C10.1165 9.90476 10.6414 8.95242 11.4814 8.25718L12.9281 7.05718C13.3598 6.71432 13.6165 6.2381 13.6165 5.71429C13.6165 4.66667 12.5665 3.80952 11.2832 3.80952C9.99987 3.80952 8.94987 4.66667 8.94987 5.71429H6.61654C6.61654 3.60952 8.70487 1.90476 11.2832 1.90476C13.8615 1.90476 15.9499 3.60952 15.9499 5.71429C15.9499 6.55238 15.5299 7.31429 14.8649 7.85714Z"
                  fill="#323232"
                />
              </svg>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4044 6.867C13.236 4.356 12.1786 1.908 10.1952 0C8.19305 1.926 7.08879 4.374 6.87361 6.867C8.07115 7.479 9.17535 8.27101 10.139 9.23401C11.1026 8.28001 12.2069 7.488 13.4044 6.867ZM7.32312 9.25203C7.19214 9.16203 7.04227 9.08099 6.90193 8.99099C7.04227 9.08999 7.19214 9.16203 7.32312 9.25203ZM13.3295 9.02703C13.2078 9.10803 13.0765 9.17103 12.9549 9.26103C13.0765 9.17103 13.2078 9.10803 13.3295 9.02703ZM10.139 12.105C8.1275 9.15296 4.69393 7.2 0.783203 7.2C0.783203 11.988 3.92655 16.038 8.29571 17.541C8.88512 17.748 9.50281 17.901 10.139 18C10.7752 17.892 11.3835 17.739 11.9823 17.541C16.3515 16.038 19.4948 11.988 19.4948 7.2C15.5841 7.2 12.1505 9.15296 10.139 12.105Z"
                  fill="#323232"
                />
              </svg>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle">
                Select Categ
                <FaChevronDown />
              </button>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle">
                Select Proces <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary"
          style={{
            width: "30%",
            borderRadius: "10px",
            height: "10%",
            border: "none",
            background: "#0029ff",
            color: "white",
            fontSize: "medium",
          }}
        >
          + Sub-thread
        </button>
        <div className="thread-container" style={{ marginTop: "10px" }}>
          <div className="thread-item">
            <div className="sub" style={{ width: "90%", height: "100%" }}>
              <label htmlFor="summary">Summary for Thread A</label>
              <input
                id="summary"
                placeholder="Enter Text Here"
                style={{ height: "80px" }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StructureCard = ({ asset }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  return (
    <div
      className={`card structure-card ${
        isDescriptionVisible ? "description-open" : "description-closed"
      }`}
    >
      <div className="head card-header">
        <h3>{asset.asset_title}</h3>
        <div
          className="help"
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        >
          i
        </div>
      </div>
      <div className="content">
        <p className="description">
          <b>Description:</b>
          {asset.asset_description}
        </p>

        <div className="content-editor">
          <div className="editor">
            <div className="text">
              <h4>Text</h4>
              <input type="text" />
            </div>
            <div className="editor-option">
              <div className="text">
                <h4>Content</h4>
              </div>
              <div className="option-box">
                <button className="btn btn-secondary">File</button>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-secondary">View</button>
                <button className="btn btn-secondary">Insert</button>
                <button className="btn btn-secondary">Format</button>
                <button className="btn btn-secondary">Tools</button>
                <button className="btn btn-secondary">Table</button>
                <button className="btn btn-secondary">Help</button>
                <MdTurnRight size={20} />
                <MdOutlineTurnLeft size={20} />
                <FaExpandArrowsAlt size={20} />
                <input type="text" placeholder="Paragraph" />
                <BsThreeDots size={20} />
              </div>
            </div>
            <div className="editor-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MethodCard = ({ asset }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  return (
    <div
      className={`card method-card ${
        isDescriptionVisible ? "description-open" : "description-closed"
      }`}
    >
      <div className="head card-header">
        <h3>{asset.asset_title}</h3>
        <div
          className="help"
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        >
          i
        </div>
      </div>
      <div className="content">
        <p className="description" style={{ paddingBottom: "20px" }}>
          <b>Description:</b>
          {asset.asset_description}
        </p>
        <div className="method-content">
          <div className="method-section">
            <div className="thread-name">
              <h4>
                {" "}
                <FaAngleUp />
                Introduction
              </h4>
            </div>
            <p>The 4SA Method , How to bring a idea into progress ?</p>
            <button className="btn btn-primary">See More</button>
          </div>
          <div className="method-section">
            <div
              className="thread-name"
              style={{ background: "white", border: "0.1px solid #D9D7D7" }}
            >
              <h4>
                <FaAngleUp />
                Thread A
              </h4>
            </div>
            <p>
              How are you going to develop your strategy? Which method are you
              going to use to develop a strategy? What if the project is
              lengthy?
            </p>
            <button className="btn btn-primary">See More</button>
          </div>
          <div className="method-section side">
            <div
              className="example thread-name"
              style={{ background: "white", border: "0.1px solid #D9D7D7" }}
            >
              <h4>Example 1</h4>
            </div>
            <p>You have a concept , How will you put into progress?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Card Components
const Cards = ({ assets }) => {
  return (
    <div
      className="cards-container"
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {assets.map((asset) => {
        switch (asset.asset_title) {
          case "Technical Project Management":
            return <TechnicalCard key={asset.asset_id} asset={asset} />;
          case "Threadbuild":
            return <ThreadCard key={asset.asset_id} asset={asset} />;
          case "Structure you pointers":
            return <StructureCard key={asset.asset_id} asset={asset} />;
          default:
            return <MethodCard key={asset.asset_id} asset={asset} />;
        }
      })}
    </div>
  );
};

export default Cards;
