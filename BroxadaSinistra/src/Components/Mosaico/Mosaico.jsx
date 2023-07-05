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
    <>
      <h3 id='local'>O local</h3>
      <section id="mosaico">
        { images.map((image, index) => {
          return (
            <div
              key={ image }
              className="mosaico-image"
              onClick={ () => showModal(image) }
            >
              <img
                src={ image }
                alt={ `Imagem do local ${index + 1}` }
              />
            </div>
          )
        }) }
      </section>
    </>
  )
}
