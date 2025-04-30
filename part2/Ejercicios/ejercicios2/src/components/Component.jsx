const Course = ({courses}) => {
  console.log('Courses recibidos:', courses)

  return (
    <>
    {courses.map((course => (
      <div key = {course.id}>
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map((parte) => (
            <li key = {parte.id}>
              {parte.name} - Ejercicios {parte.exercises}
            </li>
          ))}
        </ul>
      </div>
    )))}
    </>
  )
}

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

const Total = ({ total }) => {
  console.log('Total:', total)
  const totalExercises = total.reduce((sumaCursos, curso) =>{
    return sumaCursos + curso.parts.reduce((sumaPartes, parte) => sumaPartes + parte.exercises, 0)
  },0)

  return (
    <p>
      <strong>Cantidad de ejercicios {totalExercises}</strong>
    </p>
  )
}

export { Course, Total }