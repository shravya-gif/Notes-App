import React, { useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/Sidebar";

export default function App() {
  const [notes, setNotes] = useState([
    {
      text: "asdfg",
      time: Date.now(),
      color: "cyan",
    },
    {
      text: "HEY",
      time: Date.now(),
      color: "red",
    },
    {
      text: "Hello",
      time: Date.now(),
      color: "Pink",
    },
    {
      text: "Good Day",
      time: Date.now(),
      color: "light blue",
    },
    {
      text: "namastge",
      time: Date.now(),
      color: "orange",
    },
  ]);
  const addNote = (color: any) => {
    const tempNotes = [...notes];
    tempNotes.push({
      text: "",
      time: Date.now(),
      color,
    });
    setNotes;
  };
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}
