import React, { useEffect, useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/Sidebar";

interface Note {
  id: string;
  text: string;
  time: number;
  color: string;
}

export default function App() {
  // Check if there are any notes stored in local storage
  const storedNotesString = localStorage.getItem("my-app");
  const storedNotes: Note[] = storedNotesString
    ? JSON.parse(storedNotesString)
    : [];

  const [notes, setNotes] = useState<Note[]>(storedNotes);

  const addNote = (color: string) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id: string) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const updateText = (text: any, id: any) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("my-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}
