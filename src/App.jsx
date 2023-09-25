import React, { useState } from 'react'
import NotesContainer from './components/notesContainer/NotesContainer'
import './App.css'
import SideBar from './components/sidebar/SideBar'

const App = () => {

  const [notes,SetNotes]=useState([])

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
  return (
    <div className='App'>
      <SideBar addNote={addNote}/>
      <NotesContainer notes={notes}/>
    </div>
  )
}

export default App