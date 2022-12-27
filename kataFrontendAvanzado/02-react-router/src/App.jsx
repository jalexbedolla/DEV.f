import './App.css'
import { Routes, Route, Link, useLocation, useParams, Outlet, useNavigate } from 'react-router-dom'

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
        <Route path='/portafolio' element={<Portafolio />}>
          <Route path=':pid' element={<PortafolioDetalle />} />
        </Route>
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
      <ul>
        <li>
          <Link to='/portafolio/1'>Pinterest</Link>
        </li>
        <li>
          <Link to='/portafolio/2'>ATM</Link>
        </li>
        <li>
          <Link to='/portafolio/3'>PokeDex</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

/* PORTAFOLIO DETALLE */
function PortafolioDetalle () {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'clon de pinterest con HTML y CSS' },
    { id: 2, nombre: 'ATM', desc: 'Simular un cajero automatico con HTML CSS y JS' },
    { id: 3, nombre: 'PokeDex', desc: 'consumir la PokeApi y mostrar un listado de pokemones con HTML CSS y JS' }
  ]

  /* useParam me permite leer los params de mis rutas para tener rutas dinamicas */
  const { pid } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <h3>ID: {proyectos[pid - 1].id}</h3>
      <h3>Nombre: {proyectos[pid - 1].nombre}</h3>
      <h3>Descripcion: {proyectos[pid - 1].desc}</h3>

      <button onClick={() => {
        navigate('/portafolio')
        /* truco con el navigate. si quiero ir a la paguina anterior uso navigate(-1) y navigate(1) para el forward */
      }}
      >
        Portafolio
      </button>
    </>
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
