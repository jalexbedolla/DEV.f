
function Login () {
  return (
    <form className='container'>
      <div className='mt-5 mb-3'>
        <label
          htmlFor='exampleFormControlInput1'
          className='form-label'
        >Email
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          placeholder='name@example.com'
        />
      </div>

      <div className='mb-3'>
        <label
          htmlFor='inputPassword'
          className='form-label'
        >Password
        </label>
        <input
          type='password'
          className='form-control'
          id='password'
          placeholder='*******'
        />
      </div>
      <div />
      <div className='d-grid'>
        <button type='button' className='mt-3 btn btn-dark'>Login</button>
      </div>
    </form>
  )
}

export default Login
