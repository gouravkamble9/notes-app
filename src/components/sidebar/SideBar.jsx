import React, { useState } from "react";
import add from "../../assets/plus.png";
import "./Sidebar.css";
const SideBar = (props) => {

    const [listOpen,SetListOpen]=useState(false)
    const [spin,SetSpin]=useState(false)

  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <img src={add} alt="" 
      onClick={()=>{
      SetListOpen(!listOpen) 
      SetSpin(!spin)}
      } className={`${spin ? "spin" :" "}`}/>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
