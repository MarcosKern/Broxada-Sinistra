import Logo from "../../assets/Logo/banner-min.svg"
import "./header.css"

export default function Header() {
  return (
    <header>
      <img id="logo" className="animate__animated animate__fadeInUp" src={ Logo } alt="Logo do Broxada Sinistra" />
      <h2 id="countdown" className="animate__animated animate__fadeIn animate__delay-1s">
        FALTAM -- MESES, -- DIAS E -- HORAS!
      </h2>
    </header>
  )
}
