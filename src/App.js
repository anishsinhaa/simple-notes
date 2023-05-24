import React, { useEffect } from "react";

import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/Sidebar";
import "./App.css";
function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  //Add Note Function
  function addNote(color) {
    console.log("Add Note");
    const tempNotes = [...notes];
    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color: color,
    });
    setNotes(tempNotes);
  }

  //Delete Note Function
  function deleteNote(id) {
    console.log("Delete Note");
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((note) => note.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }

  //text Change function
  function textChange(text, id) {
    console.log("Text Change");
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((note) => note.id === id);
    tempNotes[index].text = text;
    setNotes(tempNotes);
  }

  //UseEffect for localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        textChange={textChange}
      />
    </div>
  );
}
export default App;
