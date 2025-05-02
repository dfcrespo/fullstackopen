import { useState } from 'react'
import { PersonForm, Filter, AllPersons } from './components/Agenda'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newTelephone, setNewTelephone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    
    const personObject = { //Crea un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
      name: newName,
      telephone: newTelephone,
      id: persons.length + 1, //Identificador único id se genera en función del número total de notas, sera unico           
    }
    
    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    setPersons(persons.concat(personObject))//Concat crea un nuevo array en la que se incluyen el contenido del array anterior y el nuevo elemento.
    setNewName('')//Restablece el valor del elemento de input llamando a la función setNewNote del estado de newNote
    setNewTelephone('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleTelephoneChange = (event) => {
    console.log(event.target.value)
    setNewTelephone(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const personsToShow = newFilter === '' 
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {newName}</div> */}
      
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        valueName={newName} onChangeName={handlePersonChange} newName={newName} persons={persons}
        valueTelephone={newTelephone} onChangeTelephone={handleTelephoneChange} newTelephone={newTelephone}
        buttonText="add" type="submit"
      />     
        
      <h2>Filter</h2>      
      <Filter text="filter shown with:" type="text" value={newFilter} onChange={handleFilterChange} newFilter={newFilter} personsToShow={personsToShow}/>
      <h2>Numbers</h2>
      <AllPersons persons={persons} />
    </div>
  )
}

export default App