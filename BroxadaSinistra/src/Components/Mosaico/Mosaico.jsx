import { useContext } from "react"
import { images } from "../../Services/images"
import "./mosaico.css"
import MyContext from "../../Context/Context"

export default function Mosaico() {
  const { setExpandImage, setCurrentExpandedImage } = useContext(MyContext);
  const showModal = async (image) => {
    await setCurrentExpandedImage(image);
    setExpandImage(true)
  }

  return (
    <section>
      <h3 id='local'>O local</h3>
      <section id="mosaico">
        { images.map((image, index) => {
          const { img, thumb } = image;
          return (
            <div
              key={ index }
              className="mosaico-image"
              id={`mosaico-image-${index}`}
              onClick={ () => showModal(img) }
            >
              <img
                loading="lazy"
                height={6}
                width={9}
                src={ thumb }
                alt={ `Imagem do local ${index + 1}` }
              />
              <p>expandir</p>
            </div>
          )
        }) }
      </section>
    </section>
  )
}
