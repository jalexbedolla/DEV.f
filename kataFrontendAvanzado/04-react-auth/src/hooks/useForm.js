import { useEffect, useState } from 'react'

function useForm (callback, defaults) { // los requerimientos para q la maquina de coca colas funcione
  const [input, setInput] = useState(defaults)

  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value })
    console.log(name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    callback(input)
  }

  return {
    input, // esto es el estado
    handleInputChange, // aqui llegan los datos de los input
    handleSubmit // y este es el maldito callback
  }
}

export default useForm
