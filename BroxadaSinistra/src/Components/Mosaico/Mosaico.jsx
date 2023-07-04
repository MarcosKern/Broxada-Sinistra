import { images } from "../../Services/images"
import "./mosaico.css"

export default function Mosaico() {
  return (
    <section id="mosaico">
      { images.map((image, index) => {
        return (
          <img
            className="mosaico-image"
            key={ image }
            src={ image }
            alt={ `Imagem do local ${index + 1}` }
          />
        )
      }) }
    </section>
  )
}
