// REGLAS PARA CREAR UN HOOK
// Custom Hook es una funcion que utiliza otro hook de react
// 1. Siempre debemos usar la palabra'use' al nombrarlo: useForm
// 2. siempre debe de ser 'fuctional component' no 'class component'
// 3. siempre deben usar algun hook de react (useState, useEffect, etcc)
// 4. deben de ser reutilizables.. no para un solo caso especifico

import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // estado unico para guardar los datos en un objeto
  const [input, setInput] = useState(defaults)

  // cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])
  const handleInputChange = (event) => {
    const { name, value } = event.target // destructuring
    // equivale a:
    // const name = event.target.name
    // const value = event.target.value
    console.log(name, value)
    setInput({ ...input, [name]: value }) // actualiza el estado de quien dispara el evento
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
