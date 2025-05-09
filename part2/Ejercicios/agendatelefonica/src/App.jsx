import { useState, useEffect } from 'react'
import { PersonForm, Filter, AllPersons } from './components/Agenda'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([]) //El valor inicial de persons es un array vacío
  const [newName, setNewName] = useState('')
  const [newTelephone, setNewTelephone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('')
  const [typeMessage, setTypeMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll('http://localhost:3001/persons') //Realiza una solicitud GET a la URL especificada
      .then(response => {
        console.log('promise fulfilled') //Cuando se cumple la promesa, se ejecuta esta función
        setPersons(response.data) //Actualiza el estado de notes con los datos recibidos de la respuesta
      })
  }, []) //El segundo argumento vacío [] significa que el efecto solo se ejecutará una vez, al montar el componente
  //El efecto se ejecuta después de que el componente se haya montado y cada vez que se actualice
  console.log('render', persons.length, 'notes') //Muestra en la consola el número de notas que se han cargado

  const toggleEraseOf = (id) => {
    console.log('erase of ' + id + ' needs to be toggled')
    if (window.confirm('Delete this contact?')) {

      personService
        .erase(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.error(error)
          setMessage(`Information of ${newName} has already been removed from server`)
          setTypeMessage('error')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
        })       
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)    
    const personObject = { //Crea un nuevo objeto para la nota llamado noteObject que recibirá su contenido del estado del componente newNote
      name: newName,
      telephone: newTelephone,      
    }    
    /* const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    } */     
    const existingPerson = persons.find(p => p.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, telephone: newTelephone }
        personService
          .update(existingPerson.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data))
            setNewName('')
            setNewTelephone('')
            setMessage(`Updated ${newName}`)
            setTypeMessage('success')
            setTimeout(() => {
            setMessage(null)
            }, 5000)
          })
          .catch(error => {
            console.error(error)
            setMessage(`Information of ${newName} has already been removed from server`)
            setTypeMessage('error')
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
        
      }
    } else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewTelephone('')
          setMessage(`Added ${newName}`)
          setTypeMessage('success')
          setTimeout(() => {
          setMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.error(error)
          setMessage(`Error adding ${newName}`)
          setTypeMessage('error')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })        
    }
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
      <Notification typeMessage={typeMessage} message={message} />
      <PersonForm
        onSubmit={addPerson}
        valueName={newName} onChangeName={handlePersonChange} newName={newName} persons={persons}
        valueTelephone={newTelephone} onChangeTelephone={handleTelephoneChange} newTelephone={newTelephone}
        buttonText="add" type="submit"
      />     
        
      <h2>Filter</h2>      
      <Filter text="filter shown with:" type="text" value={newFilter} onChange={handleFilterChange} newFilter={newFilter} personsToShow={personsToShow}/>
      <h2>Numbers</h2>
      <AllPersons persons={persons}
        toggleErase={toggleEraseOf}/>
    </div>
  )
}

export default App