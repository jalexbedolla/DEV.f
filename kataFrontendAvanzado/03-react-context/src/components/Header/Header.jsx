import { useSongContext } from '@/context/SongContext'
import './header.css'
const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong
  return (
    song.title
      ? (
        <div className='header'>
          <h4>Now Playing...</h4>
          <h2>{song.title}</h2>
        </div>
        )
      : <div>Selecciona una Rola</div>
  )
}

export default Header
