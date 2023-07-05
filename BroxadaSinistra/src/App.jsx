import { useContext } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Mosaico from './Components/Mosaico/Mosaico'
import Navbar from './Components/Navbar/Navbar'
import MyContext from './Context/Context'
import ImageModal from './Components/ImageModal/ImageModal'

function App() {
  const { expandImage } = useContext(MyContext);
  return (
    <main>
      <section>
        <Navbar/>
        <Header />
        <Mosaico />
      </section>
      {
        expandImage && <ImageModal />
      }
    </main>
  )
}

export default App
