const Hello = ({nombre, edad}) => {
  const nacimientoYear = () => new Date().getFullYear() - edad    

  return (
    <div>
      <p>
        Hola {nombre}, tienes {edad} años
      </p>
      <p>
        Probablemente naciste en el año {nacimientoYear()}
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Agradecimientos App creada por <a href='https://github.com/dfcrespo'>dfcrespo</a>
    </div>
  )
}

/* const Section = () => {

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
}  */

const App = () => {

  const nombre = 'Diego'
  const edad = 44

  return (
    <>
      <div>
        <h1>Bienvenido</h1>
        <Hello nombre='George' edad={40 + 2} />
        <Hello nombre={nombre} edad={edad} />
      </div>
      {/* <Section /> */}
      <Footer />
    </>
  )
}



export default App