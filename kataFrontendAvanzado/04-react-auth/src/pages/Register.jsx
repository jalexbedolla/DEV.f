import Form from 'react-bootstrap/Form'

function Register () {
  return (
    <form className='container'>
      {/* name */}
      <div className='mt-5 mb-3'>
        <label
          htmlFor='exampleFormControlInput1'
          className='form-label'
        >Nombre
        </label>
        <input
          type='text'
          className='form-control'
          id='name'
          placeholder='Jhon'
        />
      </div>

      {/* last name */}
      <div className='mb-3'>
        <label
          htmlFor='exampleFormControlInput1'
          className='form-label'
        >Apellido
        </label>
        <input
          type='text'
          className='form-control'
          id='last-name'
          placeholder='Doe'
        />
      </div>

      {/* birth date */}
      <div className='mb-3'>
        <label
          htmlFor='exampleFormControlInput1'
          className='form-label'
        >fecha de Nacimiento
        </label>
        <input
          type='date'
          className='form-control'
          id='birth'
        />
      </div>

      {/* gender */}
      <div className='mb-3'>
        <label
          htmlFor='exampleFormControlInput1'
          className='form-label'
        >Genero
        </label>
        <Form.Select aria-label='Default select example'>
          <option>Selecciona un Genero</option>
          <option value='h'>Hombre</option>
          <option value='m'>Mujer</option>
          <option value='o'>Otro`</option>
        </Form.Select>
      </div>

      {/* email */}
      <div className='mb-3'>
        <label
          htmlFor='exampleFormControlInput1'
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
          htmlFor='inputPassword'
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
