import React, { useEffect, useState } from 'react'
import NotesContainer from './components/notesContainer/NotesContainer'
import './App.css'
import SideBar from './components/sidebar/SideBar'

const App = () => {

  const [notes,SetNotes]=useState(JSON.parse(localStorage.getItem('notes-app')) || [])

  const addNote=(color)=>{
      const tempNotes=[...notes]
      tempNotes.push({
        id:Date.now() + ""+Math.floor(Math.random()*78),
        text:'',
        time:Date.now(),
        color,
      })

      SetNotes(tempNotes)
  }

  const deleteNote=(id)=>{
      const tempNotes=[...notes]

      const index=tempNotes.findIndex(item=>item.id===id)

      if(index<0) return

      tempNotes.splice(index,1)
      SetNotes(tempNotes)
  }

  const updateText=(text,id)=>{
    const tempNotes=[...notes]

      const index=tempNotes.findIndex(item=>item.id===id)

      if(index<0) return
      tempNotes[index].text=text
      SetNotes(tempNotes)
  }

  useEffect(()=>{
    localStorage.setItem('notes-app',JSON.stringify(notes))
  },[notes])
  return (
    <div className='App'>
      <SideBar addNote={addNote}/>
      <NotesContainer notes={notes}
      SetNotes={SetNotes}
      deleteNote={deleteNote}
      updateText={updateText}
      />
    </div>
  )
}

export default App