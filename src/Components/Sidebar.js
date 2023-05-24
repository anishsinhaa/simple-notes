import React from "react";
import plus from "../Images/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  console.log("Sidebar Rendered");
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = React.useState(false);

  return (
    <div className="sidebar">
      <img
        src={plus}
        alt="Add Note"
        onClick={() => setListOpen(!listOpen)}
      ></img>
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((color, index) => {
          return (
            <li
              key={index}
              className="sidebar-list-item"
              style={{ backgroundColor: color }}
              onClick={() => props.addNote(color)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
