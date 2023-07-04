import Logo from "../../assets/Logo/banner-min.svg"
import "./header.css"

export default function Header() {
  return (
    <header>
      <img id="logo" src={ Logo } alt="Logo do Broxada Sinistra" />
      <h2 id="countdown">
        FALTAM -- MESES, -- DIAS E -- HORAS
      </h2>
    </header>
  )
}
