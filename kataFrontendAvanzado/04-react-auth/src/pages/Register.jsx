import useForm from '@/hooks/useForm'

function Register () {
  const sendData = () => {
    console.log('sendData')
  }
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',
    email: '',
    password: ''
  })

  return (
    <form className='container'>
      {/* name */}
      <div className='mt-5 mb-3'>
        <label
          htmlFor='first_name'
          className='form-label'
        >Nombre
        </label>
        <input
          type='text'
          name='fist_name'
          onChange={handleInputChange}
          value={input.first_name}
          id='first_name'
          placeholder='Jhon'
          className='form-control'
        />
      </div>

      {/* last name */}
      <div className='mb-3'>
        <label
          htmlFor='last_name'
          className='form-label'
        >Apellido
        </label>
        <input
          type='text'
          name='last_name'
          id='last_name'
          placeholder='Doe'
          className='form-control'
        />
      </div>

      {/* birth date */}
      <div className='mb-3'>
        <label
          htmlFor='birth_name'
          className='form-label'
        >fecha de Nacimiento
        </label>
        <input
          type='date'
          className='form-control'
          id='birth_name'
        />
      </div>

      {/* gender */}
      <div className='mb-3'>
        <label
          htmlFor='gender'
          className='form-label'
        >Genero
        </label>
        <select className='form-select'>
          <option>Selecciona tu Genero</option>
          <option value='h'>Hombre</option>
          <option value='m'>Mujer</option>
          <option value='o'>Otro`</option>
        </select>
      </div>

      {/* email */}
      <div className='mb-3'>
        <label
          htmlFor='email'
          className='form-label'
        >Email
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          placeholder='hola@mundo.org'
        />
      </div>

      {/* password */}
      <div className='mb-3'>
        <label
          htmlFor='password'
          className='form-label'
        >Password
        </label>
        <input
          type='password'
          className='form-control'
          id='Password'
          placeholder='*******'
        />
      </div>
      <div />

      {/* button */}
      <div className='d-grid'>
        <button
          type='button'
          className='mt-3 btn btn-dark'
        >Sing Up
        </button>
      </div>
    </form>
  )
}

export default Register
