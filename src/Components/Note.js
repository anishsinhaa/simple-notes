import React from "react";
import trash from "../Images/trash.png";
import "./Note.css";

function Note(props) {
  //Date Formatting
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${hrs}:${min} ${day} ${month} ${year}`;
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note-text"
        placeholder="NEW NOTE"
        value={props.note.text}
        name="text"
        onChange={(event) =>
          props.textChange(event.target.value, props.note.id)
        }
      ></textarea>
      <div className="note-footer">
        <p className="note-time">{formatDate(props.note.time)}</p>
        <img
          src={trash}
          alt="Delete icon"
          onClick={() => props.deleteNote(props.note.id)}
        ></img>
      </div>
    </div>
  );
}

export default Note;
