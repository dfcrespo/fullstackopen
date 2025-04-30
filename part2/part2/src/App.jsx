const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note => {
        console.log(note.important)
        return <li key={note.id}>{note.content} has {note.important ? 'Yes' : 'No'}</li>
      })}      
      </ul>
    </div>
  )
}

export default App