import Absolut from "../../assets/Supporters/Absolut.svg";
import Jameson from "../../assets/Supporters/Jameson.svg";
import Beefeater from "../../assets/Supporters/Beefeater.svg"
import "./supporters.css"

export default function Supporters() {
  return (
    <section>
      <h3 id="supporters-section">apoios</h3>
      <div id="supporters">
        <img src={ Absolut } alt="Absoluto logo" />
        <img src={ Jameson } alt="Jameson logo" />
        <img src={ Beefeater } alt="Beefeater logo" />
      </div>
    </section>
  )
}
