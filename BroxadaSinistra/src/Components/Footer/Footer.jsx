import Logo from "../../assets/Logo/footer-logo.svg"
import Instagram from "../../assets/Icons/instagram.svg"
import Tiktok from "../../assets/Icons/tiktok.svg"
import Spotify from "../../assets/Icons/spotify.svg"
import Deezer from "../../assets/Icons/deezer.svg"
import Youtube from "../../assets/Icons/youtube.svg"
import "./footer.css"

export default function Footer() {
  return (
    <footer>
      <img src={ Logo } alt="Logo do Broxada Sinistra Shippuden" />
      <section className="social-medias">        
        <a
          href="https://www.instagram.com/broxadasinistra/"
          target="_blank"
          rel="noreferrer"
        ><img src={Instagram} alt="" /></a>
        <a 
          href="https://www.youtube.com/c/BroxadaSinistra"
          target="_blank"
          rel="noreferrer"
        ><img src={Youtube} alt="" /></a>
        <a 
          href="https://open.spotify.com/show/3BBBcT8KZzVznZuMWTW3ui"
          target="_blank"
          rel="noreferrer"
        ><img src={Spotify} alt="" /></a>
        <a 
          href="https://www.tiktok.com/@broxadasinistra"
          target="_blank"
          rel="noreferrer"
        ><img src={Tiktok} alt="" /></a>
        <a 
          href="https://www.deezer.com/br/show/1356392"
          target="_blank"
          rel="noreferrer"
        ><img src={Deezer} alt="" /></a>
      </section>
      <small>Alfra Estúdios e Broxada Sinistra ® Todos direitos reservados. Design e desenvolvido por <a
        href="https://www.linkedin.com/in/marcoskern/"
        target="_blank"
        rel="noreferrer"
      >
        Marcos Kern
      </a>.</small>
    </footer>
  )
}
