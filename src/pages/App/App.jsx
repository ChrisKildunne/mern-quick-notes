import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api'
import NotesPage from '../../pages/NotesPage/NotesPage'
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm'
import NavBar from '../../components/NavBar/NavBar';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([])

  useEffect(() =>{
    async function getNotes(){
      const notes = await notesAPI.getAll();
      console.log(notes)
      setNotes(notes)
    }
    getNotes()
  }, []);

  const addNote =  async (note) => {
    const newNote = await notesAPI.addNew(note)
    setNotes([...notes, newNote])
  }

  return (
    <main className="App">
    
    { user ?
    <>
    <NavBar user={ user } setUser={ setUser } setNotes={setNotes}/>
    <h1>Notes</h1>
    <AddNoteForm addNote= {addNote}/>
    {notes.length > 0 ?
      <NotesPage notes={notes} />
      :
      <p>No Notes Yet</p>
    }
    </>
    :
    <AuthPage setUser={ setUser }  />
    }
    </main>
  );
}


