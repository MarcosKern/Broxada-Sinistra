import { useState } from 'react'
import Logo from '../../assets/Logo/banner-min.svg'
import './header.css'
import getTimeRemaining from '../../Services/countdown'

export default function Header() {
  const [hours, setHours] = useState()
  const [days, setDays] = useState()
  const targetDate = new Date('2023-09-01')

  function displayCountdown() {
    const countdown = getTimeRemaining(targetDate)
    setHours(countdown.hours)
    setDays(countdown.days)
  }

  setInterval(displayCountdown, 1000)
  return (
    <header>
      <img
        id="logo"
        className="animate__animated animate__fadeInUp"
        src={Logo}
        alt="Logo do Broxada Sinistra"
        width={200}
        height={200}
      />
      <h2
        id="countdown"
        className="animate__animated animate__fadeIn animate__delay-1s"
      >
        FALTAM {days} DIA{days != 1 && 'S'} E {hours} HORA{hours != 1 && 'S'}!
      </h2>
    </header>
  )
}
