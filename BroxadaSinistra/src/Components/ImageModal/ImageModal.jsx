import { useContext } from 'react'
import MyContext from '../../Context/Context'
import closeModal from '../../assets/Icons/closeModal.svg'
import './imageModal.css'

export default function ImageModal() {
  const { currentExpandedImage, setExpandImage } = useContext(MyContext)
  return (
    <section id="image-modal">
      <img
        src={currentExpandedImage}
        alt={currentExpandedImage}
        sizes='1200 x 1024'
      />
      <button
        className="exit-modal-button"
        onClick={() => setExpandImage(false)}
      >
        <img src={closeModal} alt="" />
      </button>
    </section>
  )
}
