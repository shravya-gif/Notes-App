import React from "react";
import "./Note.css";
import deleteIcon from "../Assets/delete-icon-removebg-preview.png";
let timer = 500,
  timeout: any;
export default function Note(props: any) {
  const formatDate = (value: any) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : 12;
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? 0 + min : min;
    let day = date.getDate();
    let month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };
  const debounce = (func: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
  const updateText = (text: any, id: any) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}   />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        ></img>
      </div>
      
    </div>
  );
}
