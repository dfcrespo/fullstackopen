const Header = (props) => {
  return (
    <h2>
      Hola {props.curso}
    </h2>
  )
}

const Content = (props) => {
  return (
    <div>
      <Parte parte={props.parte1} ejercicios={props.exercises1}/>
      <Parte parte={props.parte2} ejercicios={props.exercises2}/>
      <Parte parte={props.parte3} ejercicios={props.exercises3}/>
    </div>       
  )
}

const Total = (props) => {
  return (
    <p>
      Cantidad de ejercicios {props.total}
    </p>       
  )
}

const Parte = (props) => {
  return (
  <p>
    Parte: {props.parte} - Ejercicios: {props.ejercicios}
  </p>
  )
}
 
const App = () => {
  
  const parte1 = 'Fundamentos de React'
  const exercises1 = 10
  const parte2 = 'Using props to pass data'
  const exercises2 = 7
  const parte3 = 'State of a component'
  const exercises3 = 14
  const totalEjercicios = exercises1 + exercises2 + exercises3

  return (
    <>
      <div>

        <h1>Bienvenido</h1>
        <Header curso='Half Stack application development'/>
        
        <Content 
          parte1={parte1} 
          exercises1={exercises1}
          parte2={parte2} 
          exercises2={exercises2}
          parte3={parte3} 
          exercises3={exercises3}
        />        
                
        <p>
        <Total total={totalEjercicios}/>
        </p>

      </div>
    </>
  )
}

export default App