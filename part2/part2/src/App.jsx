import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const noteObject = { //Crea un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1, //Identificador único id se genera en función del número total de notas, sera unico
    }
  
    setNotes(notes.concat(noteObject))//Concat crea un nuevo array en la que se incluyen el contenido del array anterior y el nuevo elemento.
    setNewNote('')//Restablece el valor del elemento de input llamando a la función setNewNote del estado de newNote
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes //Si showAll es true, se muestran todas las notas
    : notes.filter(note => note.important === true) //Si showAll es false, se filtran las notas para mostrar solo las importantes 
    
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => {
          //console.log('Antes del clic, showAll es:', showAll);
          setShowAll(!showAll)}}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>        
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>    
  )
}

{/* {notes.map(note =>
          console.log('note', note) || //otra opcion es console.log('note', note) return <Note key={note.id} ... />   
          <Note key={note.id} note={note.content} important={note.important} /> 
        )}  */}  

//Indices de matriz como claves key
{/* <ul>
  {notes.map((note, i) => 
    <li key={i}>
      {note.content}
    </li>
  )}
</ul> */}

export default App