import { useSongContext } from '../../context/SongContext'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <>
      {
      context.selectedSong.title
        ? <div>
          <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} />
          <h1>{context.selectedSong.title}</h1>
          <h3>{context.selectedSong.artist}</h3>
          <h4>{context.selectedSong.year}</h4>
        </div>
        : <h2>Selecciona una Cancion</h2>
     }
    </>
  )
}

export default SongDetails
