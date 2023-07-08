import './location.css'

export default function Location() {
  return (
    <section id="location">
      <h3>localização</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3658.8659628353075!2d-46.8584041!3d-23.5013369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b96bec979b%3A0x4d9d37fcabcf41f4!2sAlfra%20Est%C3%BAdios!5e0!3m2!1spt-BR!2sbr!4v1688613477537!5m2!1spt-BR!2sbr"
        loading="lazy"
        className="map"
        title="map"
      ></iframe>
      <a href="https://goo.gl/maps/2nwVJKYXDfWpfjh59" target='_blank' rel="noreferrer"  className='address'>
        Endereço: Alameda Tocantins 630 - galpão 05, Alphaville Industrial, Barueri, Sp
      </a>
    </section>
  )
}
