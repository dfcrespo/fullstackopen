const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input type="text" value={props.valueName} onChange={props.onChangeName} />
      </div>
      <div>
        telephone: <input type="text" value={props.valueTelephone} onChange={props.onChangeTelephone} />
      </div>
      <div>
        <button type={props.type}>{props.buttonText}</button>
      </div>
    </form>
  )
}

const AllPersons = ({ persons }) => {
  return (
    <ul>
      {persons.map(person =>
        <li key={person.id}>{person.name} telephone: {person.telephone}</li>
      )}
    </ul>
  )
}

const Filter = (props) => {
  
  return (    
    <div>
      {props.text}
      <input type={props.type} value={props.value} onChange={props.onChange}/>    
      <ul>
        {props.personsToShow.map(person =>
          <li key={person.id}>{person.name} telephone: {person.telephone}</li>
        )}
      </ul>
    </div>
  )
}

export { PersonForm, AllPersons, Filter }