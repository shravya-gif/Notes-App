import React, { useState } from "react";
import plusicon from "../Assets/new-plus-icon.png";
import "./Sidebar.css";
import Note from "./Note";

export default function Sidebar(props: any) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const openModal = (color: string) => {
    setSelectedColor(color);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="sidebar">
      <img src={plusicon} alt="Add" onClick={() => openModal("")}></img>
      {/*  */}

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <label>Title of the Modal</label>
            <input type="text" placeholder="Enter something" />
            <label>Description of the Modal goes here.</label>
            <input type="text" placeholder="Enter something" />
            <ul
              className={`sidebar_list ${
                true ? "sidebar_list_active" : ""
              }`}
            >
              {colors.map((color, index) => (
                <li
                  key={index}
                  className="sidebar_list_item"
                  onClick={() => openModal(color)}
                  style={{ backgroundColor: color }}
                ></li>
              ))}
            </ul>
            <button >Submit</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
