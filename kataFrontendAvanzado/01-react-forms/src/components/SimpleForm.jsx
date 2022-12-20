import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // paso 1: Crear los estados donde guardar la informacion tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // paso 4: Manejo la logica del boton 'enviar'
  const handleSubmit = (event) => {
    event.preventDefault() // para prevenir la accion por defect (que se recargue la paguina)
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }

  // paso 2: Crear el formulario base
  return (
    <div className='login'>
      <div className='login-container'>
        <img
          src={logo}
          alt='logo'
          className='logo'
          width='200px'
          height='200px'
        />
        <form>
          {/* paso 3: guardar cada cambio del input en su state correspondiente */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@email.com'
            onChange={(event) => { setEmail(event.target.value) }}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='*******'
            onChange={(event) => { setPassword(event.target.value) }}
          />
          <button onClick={handleSubmit}>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
