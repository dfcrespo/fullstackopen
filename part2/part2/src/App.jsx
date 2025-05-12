import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState(null)
  const [newNote, setNewNote] = useState('') //El valor inicial de newNote es una cadena vacía
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, []) //El segundo argumento vacío [] significa que el efecto solo se ejecutará una vez, al montar el componente
  //El efecto se ejecuta después de que el componente se haya montado y cada vez que se actualice
  //console.log('render', notes.length, 'notes')

  if (!notes) { 
    return null 
  }

  const addNote = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const noteObject = { //Crea un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
      content: newNote,
      important: Math.random() < 0.5,      
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      })
      .catch((error) => {
        console.error(error)
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter((n) => n.id !== id))
      })
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
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => {
          //console.log('Antes del clic, showAll es:', showAll);
          setShowAll(!showAll)}}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>        
        {notesToShow.map(note =>
          <Note key={note.id} 
          note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <Footer />      
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