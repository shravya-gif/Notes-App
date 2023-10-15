import React, { useState } from "react";
import plusicon from "../Assets/new-plus-icon.png";
import "./Sidebar.css";
export default function Sidebar(props:any) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <img src={plusicon} alt="Add" onClick={()=>setListOpen(!listOpen)}></img>
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
        {colors.map((items, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            onClick={()=>props.addNote(items)}
            style={{ backgroundColor: items }}
          ></li>
        ))}
      </ul>
    </div>
  );
}
