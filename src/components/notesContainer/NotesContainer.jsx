import React, { useState } from "react";
import Note from "../note/Note";
import "./NotesContainer.css";

const NotesContainer = (props) => {
  const [query,SetQuery]=useState()
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }

    return array;
  };

  let notes = reverArray(props.notes);
  
  let notes1=notes.filter((item)=>{
      return item.text.includes(query)
  })

  notes=[...notes1]

  console.log(notes1)

  return (
    <div className="note-contaier">
      <div className="notes-top">
        <h2>Notes</h2>
        <input
        value={query}
        onChange={(e)=>SetQuery(e.target.value)} 
        type="text" 
        placeholder="search"/>
      </div>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item, index) => (
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
