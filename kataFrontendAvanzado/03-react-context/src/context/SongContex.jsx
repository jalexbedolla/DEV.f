import { useEffect, useState, createContext, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'
/* CONTEX tiene que ver con el contexto de estados globales en react, es decir. poder compartir la MISMA informacionentre diferentes niveles de componentes. Para usar CONTEX necesitamos seguir una serie de pasos */

// paso 1. Crear un contexto vacio
const SongContext = createContext()
/* paso 2. Creacion del provedore del contexto. Es decir, de donde se obtiene y como se pasa la informacion */
function SongProvider (props) {
  const [list, setList] = useState([]) // esta es la data de la API
  const [selectedSong, setSelectedSong] = useState({}) // cancion selecionada
  const [loading, setLoading] = useState(true) // indica cuando los datos estan disponibles

  // simulamos la llamada a la API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  /* tenemos que indicar en el provider que datos debe de proveer. estos datos son publicos para todos los componentes */
  const value = {
    list,
    selectedSong,
    setSelectedSong,
    loading
  }

  return (
    <SongContext.Provider value={value} {...props} />
  )
}

/* Paso 3. Consumidor del contexto, que brinda acceso a la data global de mi contexto */

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

export {
  SongProvider, // componente provedor
  useSongContext // componente consumidor
}
