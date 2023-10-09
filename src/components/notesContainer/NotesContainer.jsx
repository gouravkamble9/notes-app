import React, { useState } from "react";
import Note from "../note/Note";
import "./NotesContainer.css";

const NotesContainer = (props) => {

  const [result,SetResult]=useState([])
  const [query,SetQuery]=useState("")

  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }

    return array;
  };

  let notes = reverArray(props.notes);

  const handleSearch=()=>{
    if (query.length <= 0) {
      return
    } else {
      const filterBySearch = notes.filter((item) =>
        item.text.toLowerCase().includes(query.toLowerCase())
      );
      SetResult(filterBySearch);
    }
  }


  return (
    <div className="note-contaier">
      <div className="notes-top">
        <h2>Notes</h2>
        <input
        onChange={e=>{SetQuery(e.target.value) 
          handleSearch()}}
        type="text" 
        className="bo"
        placeholder="search"/>
      </div>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          (query.length>0 ? result:notes).map((item, index) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div className="empty-notes">
            <h3>No Notes Present</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesContainer;
