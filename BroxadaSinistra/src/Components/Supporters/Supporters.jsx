import Absolut from '../../assets/Supporters/Absolut.svg'
import Jameson from '../../assets/Supporters/Jameson.svg'
import Beefeater from '../../assets/Supporters/Beefeater.svg'
import { useInView } from 'react-intersection-observer'
import './supporters.css'
export default function Supporters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <section>
      <h3 id="supporters-section">apoios</h3>
      <div id="supporters">
        <img
          src={Absolut}
          alt="Absoluto logo"
          className={
            inView ? 'animate__animated animate__fadeInUp show' : 'hidden'
          }
          ref={ref}
          width={200}
          height={200}
        />
        <img
          src={Jameson}
          alt="Jameson logo"
          className={
            inView
              ? 'animate__animated animate__fadeInUp show delay-1'
              : 'hidden'
          }
          ref={ref}
          width={200}
          height={200}
        />
        <img
          src={Beefeater}
          alt="Beefeater logo"
          className={
            inView
              ? 'animate__animated animate__fadeInUp show delay-2'
              : 'hidden'
          }
          ref={ref}
          width={200}
          height={200}
        />
      </div>
    </section>
  )
}
