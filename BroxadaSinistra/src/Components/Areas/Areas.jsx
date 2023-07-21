import './areas.css'

export default function Areas() {
  return (
    <section>
      <h3>as áreas</h3>
      <div id="vip" className="area">
        <div className="area-description">
          <h4>área VIP</h4>
          <p>
            As áreas VIPS serão no <strong>mezanino</strong> e no{' '}
            <strong>estúdio aquário</strong>.
            <br />
            Acesso ao local com <strong>influenciadores e convidados</strong>.
            <br />
            <strong>Open bar.</strong>
          </p>
        </div>
      </div>
      <div id="common" className="area">
        <div className="area-description">
          <h4>área comum</h4>
          <p>
            A área comum é localizada na <strong>arena</strong>.
            <br />
            <strong>Open bar</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
