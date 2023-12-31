import React, { useEffect, useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer";
import Sidebar from "./Components/Sidebar";

export interface Note {
  id: string;
  text: string;
  time: number;
  color: string;
  title:string;
  description:string;
}

export default function App() {
  const storedNotesString = localStorage.getItem("my-app");
  const storedNotes: Note[] = storedNotesString
    ? JSON.parse(storedNotesString)
    : [];

  const [notes, setNotes] = useState<Note[]>(storedNotes);

   let addNote = (note: Note) => {
    const tempNotes = [...notes];

    tempNotes.push(note);
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
