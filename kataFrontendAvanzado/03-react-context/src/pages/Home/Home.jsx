import './home.css'
import SongLIst from '@/components/SongList/SongLIst'
import SongDetails from '@/components/SongDetails/SongDetails'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <SongLIst />
      </div>

      <div className='derecho'>
        <h2>Lado Derecho</h2>
        <SongDetails />
      </div>
    </div>
  )
}

export default Home
