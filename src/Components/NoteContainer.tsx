import React from 'react'
import Note from './Note'
import "./NoteContainer.css"
export default function NoteContainer(props:any) {
  return (
    <div className='note_container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
            {
                props.notes.map((item: any,index: any)=><Note key={index} note={item}{...item.time}/>)
            }
    
      </div>
    </div>
  )
}
