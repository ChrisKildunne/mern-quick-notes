import React from 'react';
import { useState } from 'react'

export default function AddNoteForm({addNote}){
    const [newNote, setNewNote] = useState('')

    function handleAddNote(evt) {
        evt.preventDefault();
        addNote(newNote)
        setNewNote('')
        
    }

    return (
        <>
          <h2>New Note</h2>
          <form onSubmit={handleAddNote}>
            <input
              value={newNote}
              onChange={(evt) => setNewNote(evt.target.value)}
              placeholder='New Note'
            />
            <button type="submit" disabled={!newNote}>
              Add Note
            </button>
          </form>
        </>
      );
      
}