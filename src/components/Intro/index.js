import "../Intro/style.scss";

function Intro() {
  return (
    <div className="hero">
      <span className="hero-title">Sobre mí</span>
      <section className="hero-container">
        <div className="hero-description">
          <div className="hero-image">Soy la foto</div>
          <div className="description-container">
            <h1 className="description-title">¡Hola! Soy Juli Azzini</h1>
            <p className="description-text">
              Soy Desarrolladora Frontend y vivo en Buenos Aires, Argentina.
              Durante el último año me aboqué a estudiar programación de manera
              autodidacta y mediante cursos. Así es como ha nacido mi fuerte
              pasión por la programación y el código, especialmente por el
              desarrollo web. Dedico mi tiempo a aprender diariamiente sobre las
              últimas tecnologías y perfeccionarme en el uso de ellas.
              Actualmente soy capaz de crear sitios web desde cero, haciendo
              hincapié en el diseño responsive y diseñando una interfaz amigable
              para los usuarios. Mi próximo objetivo es incursionar en el mundo
              del Backend para complementar mis conocimientos actuales.
            </p>
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>
    </div>
  );
}

export default Intro;
