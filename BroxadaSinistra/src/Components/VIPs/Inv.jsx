import "./inv.css"
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tebet from "../../assets/VIPs/16903176.webp"
import Fred from "../../assets/VIPs/97807571.webp"
import Joao from "../../assets/VIPs/83822132.webp"

export default function Inv() {

  return (
    <div>
      <h3>
        Participações especiais
      </h3>
      <section className="VIPS">
        <Carousel
          showThumbs={ false }
          infiniteLoop={ true }
          autoPlay={ true }
          interval={ 5000 }
          width="40dvw"
        >
          <div className="VIP">
            <p className="name">Antonio Tebet</p>
            <img src={ Tebet } alt="Antonio Tebet"/>
          </div>
          <div className="VIP">
            <p className="name">Antonio Tebet</p>
            <img src={ Fred } alt="Fred Desimpedidos"/>
          </div>
          <div className="VIP">
            <p className="name">Antonio Tebet</p>
            <img src={ Joao } alt="João Carvalho"/>
          </div>
        </Carousel>
      </section>
    </div>
  )
}
