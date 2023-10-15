import React from 'react'
import "./Note.css";
// import { text } from 'stream/consumers';
export default function Note(props:any) {
    // {
    //     text:"asdfgh",
    //     time:"2:12AM",
    //     color:"red"
    // }
  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
       <textarea className='note_text' defaultValue={props.note.text}/>
       <p>{props.note.time}</p>
    </div>
  )
}
