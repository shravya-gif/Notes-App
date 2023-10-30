import React, { useState } from "react";
import plusicon from "../Assets/new-plus-icon.png";
import "./Sidebar.css";

import { Note } from "../App";

export default function Sidebar(props: { addNote: (note: Note) => void }) {
  const colors = ["#BDE4FF", "#8698D9", "#AEA1F0", "#B484D9", "#F596FA"];
  const [listOpen, setListOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 

  const openModal = (color: string) => {
    setSelectedColor(color);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    const newNote: Note = {
      title: title,
      description: description,
      id: "",
      
      text: '',
      time: 0,
      color: selectedColor,
    };

    props.addNote(newNote);
   
  };

  return (
    <div className="sidebar">
      <img src={plusicon} alt="Add" onClick={() => openModal("")}></img>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <label>Title of the Modal</label>
            <input
              type="text"
              placeholder="Enter something"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <label>Description of the Modal goes here.</label>
            <input
              type="text"
              placeholder="Enter something"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <ul className={`sidebar_list ${true ? "sidebar_list_active" : ""}`}>
              {colors.map((color, index) => (
                <li
                  key={index}
                  className="sidebar_list_item"
                  onClick={() => openModal(color)}
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>
            <button onClick={handleClick}>Submit</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
