import { useState } from 'react'
import Logo from '../../assets/Logo/banner-min.svg'
import './header.css'

export default function Header() {
  const [hours, setHours] = useState()
  const [days, setDays] = useState()
  const targetDate = new Date('2023-09-01')

  function getTimeRemaining(endTime) {
    let totalSeconds = Math.floor((endTime - Date.now()) / 1000)

    let days = Math.floor(totalSeconds / (60 * 60 * 24))
    let hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))

    return {
      days: days,
      hours: hours,
    }
  }

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
