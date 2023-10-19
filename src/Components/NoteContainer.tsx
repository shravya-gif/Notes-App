import React from "react";
import Note from "./Note";
import "./NoteContainer.css";
export default function NoteContainer(props: any) {
  const reverArray=(arr:any)=>{
    const array=[]
    for(let i=arr.length-1;i>=0;--i){
      array.push(arr[i])
    }
    return array;
  }
  const notes=reverArray(props.notes)
  return (
    <div className="note_container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length>0 ?notes.map((item: any) => (
          <Note key={item.id} note={item}
          deleteNote={props.deleteNote} updateText={props.updateText}/>
        )):<h3>No Notes Present</h3>}
      </div>
    </div>
  );
}
