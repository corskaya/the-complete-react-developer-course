import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = e => {
    e.preventDefault()
    setNotes([
      ...notes,
      {
        title,
        body
      }
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title))
  }

  // runs only once at the beginning
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))

    if (notesData) {
      setNotes(notesData)
    }
  }, [])

  // runs at the beginning and when notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note, index) => (
        <Note key={index} note={note} removeNote={removeNote} />
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} ></textarea>
        <button>add note</button>
      </form>
    </div>
  )
}

const Note = ({ note, removeNote }) => {
  // return function is similar to componentDidUnmount
  useEffect(() => {
    console.log('Setting up effect!')

    return () => {
      console.log('Cleaning up effect!')
    }
  }, [])

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
  <NoteApp />
  //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
