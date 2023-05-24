import React from "react";
import Note from "./Note";
import "./NoteContainer.css";

function NoteContainer(props) {
  return (
    <div className="note-container">
      <h2>NOTES</h2>
      <div className="note-container-notes custom-scroll">
        {props.notes.length > 0 ? (
          props.notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                deleteNote={props.deleteNote}
                textChange={props.textChange}
              />
            );
          })
        ) : (
          <h3>No Notes Present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
