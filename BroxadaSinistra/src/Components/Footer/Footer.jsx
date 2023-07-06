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
      <img src={ Logo } alt="Logo do Broxada Sinistra Shippuden" width="auto" height="auto" />
      <section className="social-medias">        
        <a
          href="https://www.instagram.com/broxadasinistra/"
          target="_blank"
          rel="noreferrer"
        ><img src={Instagram} alt="Logo do Instagram" width="auto" height="auto" /></a>
        <a 
          href="https://www.youtube.com/c/BroxadaSinistra"
          target="_blank"
          rel="noreferrer"
        ><img src={Youtube} alt="Logo do Youtube" width="auto" height="auto" /></a>
        <a 
          href="https://open.spotify.com/show/3BBBcT8KZzVznZuMWTW3ui"
          target="_blank"
          rel="noreferrer"
        ><img src={Spotify} alt="Logo do Spotify" width="auto" height="auto" /></a>
        <a 
          href="https://www.tiktok.com/@broxadasinistra"
          target="_blank"
          rel="noreferrer"
        ><img src={Tiktok} alt="Logo do TikTok" width="auto" height="auto" /></a>
        <a 
          href="https://www.deezer.com/br/show/1356392"
          target="_blank"
          rel="noreferrer"
        ><img src={Deezer} alt="Logo da Deezer" width="auto" height="auto" /></a>
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
