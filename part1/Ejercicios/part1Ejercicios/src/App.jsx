const Header = (props) => {
  console.log(props)
  return (
    <h2>
      Hola {props.curso}
    </h2>
  )
}

const Content = (props) => {
  const partes = props.parts.map((parte) => (
    <Parte nombre={parte.name} ejercicios={parte.exercises}/>
  ))
  
  return (
    <div>
      {partes}
    </div>       
  )
}

const Parte = (parts) => {
  return (
  <p>
    Parte: {parts.nombre} - Ejercicios: {parts.ejercicios}
  </p>
  )
}

const Total = ({parts}) => {
  let total = 0
  parts.forEach(parte => {
    total += parte.exercises
  })

  return (
    <p>
      Cantidad de ejercicios {total}
    </p>       
  )
}
 
const App = () => {
  const curso = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <Header curso={curso.name} />
      <Content parts={curso.parts} />
      <Total parts={curso.parts} />
    </div>
  )
}

export default App