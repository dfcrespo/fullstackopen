const Note = ({ note, important }) => {
  return <li>{note} has {important ? 'Yes' : 'No'}</li>
}

export default Note