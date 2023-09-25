import React from "react";
import Note from "../note/Note";
import "./NotesContainer.css";

const NotesContainer = (props) => {
  const reverArray=(arr)=>{
    const array=[]

    for(let i=arr.length-1;i>=0;i--){
      array.push(arr[i])
    }

    return array
  }

  const notes=reverArray(props.notes)
  return (
    <div className="note-contaier">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length>0 ? notes.map((item, index) => (
          <Note 
          key={item.id} 
          note={item} />
        )):<h3>No Notes Present</h3>}
      </div>
    </div>
  );
};

export default NotesContainer;
