import Logo from "../../assets/Logo/banner.svg"

export default function Header() {
  return (
    <header>
      <img src={ Logo } alt="" />
      <h2 id="countdown">
        FALTAM  -- MESES, -- DIAS E -- HORAS
      </h2>
    </header>
  )
}
