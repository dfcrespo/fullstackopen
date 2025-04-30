import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note =>
        console.log('note', note) || //otra opcion es console.log('note', note) return <Note key={note.id} ... />   
        <Note key={note.id} note={note.content} important={note.important} /> 
      )}      
      </ul>
    </div>
  )
}

//Indices de matriz como claves key
{/* <ul>
  {notes.map((note, i) => 
    <li key={i}>
      {note.content}
    </li>
  )}
</ul> */}

export default App