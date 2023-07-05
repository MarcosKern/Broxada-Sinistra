import { useContext } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Mosaico from './Components/Mosaico/Mosaico'
import Navbar from './Components/Navbar/Navbar'
import MyContext from './Context/Context'
import ImageModal from './Components/ImageModal/ImageModal'
import Supporters from './Components/Supporters/Supporters'
import Areas from './Components/Areas/Areas'

function App() {
  const { expandImage } = useContext(MyContext);
  return (
    <main>
      <section>
        <Navbar/>
        <Header />
        <Mosaico />
        <Supporters />
        <Areas />
      </section>
      {
        expandImage && <ImageModal />
      }
    </main>
  )
}

export default App
