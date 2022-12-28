import './home.css'
import SongLIst from '@/components/SongList/SongLIst'
import SongDetails from '@/components/SongDetails/SongDetails'
import { SongProvider } from '@/context/SongContext'
import Header from '@/components/Header/Header'

const Home = () => {
  return (
    <>
      <SongProvider>
        <Header />
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
      </SongProvider>
    </>
  )
}

export default Home
