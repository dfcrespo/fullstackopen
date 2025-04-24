const Hello = (props) => {
  return (
    <div>
      Hola {props.nombre}, tienes {props.edad} años
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Agradecimientos App creada por <a href='https://github.com/mluukkai'>dfcrespo</a>
    </div>
  )
}

const Section = () => {

  const amigos = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <div>
      <p>Hola {amigos[0].name} tienes {amigos[0].age}</p>
      <p>Hola {amigos[1].name} tienes {amigos[1].age}</p>
    </div>
    </div>
  )
} 

const App = () => {

  const nombre = 'Diego'
  const edad = 20

  return (
    <>
      <div>
        <h1>Bienvenido</h1>
        <Hello nombre='George' edad={40 + 2} />
        <Hello nombre={nombre} edad={edad} />
      </div>
      <Section />
      <Footer />
    </>
  )
}



export default App