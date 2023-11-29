import { useContext } from 'react'
import './App.css'
import 'animate.css'
import Header from './Components/Header/Header'
import Mosaico from './Components/Mosaico/Mosaico'
import Navbar from './Components/Navbar/Navbar'
import MyContext from './Context/Context'
import ImageModal from './Components/ImageModal/ImageModal'
import Supporters from './Components/Supporters/Supporters'
import Areas from './Components/Areas/Areas'
import Location from './Components/Location/Location'
import Footer from './Components/Footer/Footer'
import BuyTicket from './Components/BuyTicket/BuyTicket'
import sitePreview from './assets/PreviewImage/sitePreview.png'

function App() {
  const { expandImage } = useContext(MyContext)
  return (
    <main>
      <section>
        <Navbar />
        <Header />
        <Mosaico />
        <Supporters />
        <Areas />
        <Location />
        <BuyTicket />
        <Footer />
      </section>
      {expandImage && <ImageModal />}
    </main>
  )
}

export default App
