import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
          <li>
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <footer>ⓒ Atole con el dedo. Todos los Derechso Reservados. 2022</footer>
    </div>
  )
}

/* ATENCION.. lo que sigue no es una buena practica.. pero lo vamos hacer asi solo para demostrativo. crearemos todos los componentes aqui mismo para mas rapido */

/* HOME */
function Home () {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

/* PORTAFOLIO */
function Portafolio () {
  return (
    <div>
      <h1>Portafolio</h1>
    </div>
  )
}

/* CONTACTO */
function Contacto () {
  return (
    <div>
      <h1>Contacto</h1>
    </div>
  )
}

/* not Found */
function Error404 () {
  const location = useLocation()
  return (
    <div>
      <h1>Error 404</h1>
      <p>No encontre: {location.pathname}</p>
      <p>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </p>
    </div>
  )
}

export default App
