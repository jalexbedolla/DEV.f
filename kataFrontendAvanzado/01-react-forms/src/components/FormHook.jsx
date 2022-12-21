import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/react.svg'

const FormHook = () => {
  /* paso 1:  crear un UNICO estado con toda la informacion en forma de objeto */
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })

  const sendData = (data) => {
    console.log(data)
  }

  /* paso 4: uso mi custom hook useForm */
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  /* paso 2: simular traer data de una API y prerrellenar los datos del formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        // JSON que manda el BackEnd
        nombre: 'Alex',
        apellido: 'Bedolla',
        edad: 44,
        genero: 'M',
        email: 'hola@alex.org',
        password: 'unoMuySeguro'
      }
      setDatos(info)
    }, 2000)
  }, [])

  /* paso 3: crear el formulario */
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
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@email.com'
            onChange={handleInputChange}
            value={input.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='*******'
            onChange={handleInputChange}
            value={input.password}
          />
          <button onClick={handleSubmit}>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormHook
