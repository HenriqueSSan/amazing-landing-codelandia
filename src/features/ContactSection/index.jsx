import { RevealScroll } from '../HeroSection/containers/scrollReveal';
import './block.scss';

export function ContactSection() {
  return (
    <section className="[ contact ] | bg-clr-light-blue-100">
      <RevealScroll
        className="[ contact__container ]"
        config={{
          reset: true,
          delay: 200,
          duration: 500,
          origin: 'top',
          distance: '-200px',
          easing: 'ease-in-out',
        }}
      >
        <h2 className="| ff-title txt-align-c mb-60 |">Entre em contato</h2>
        <form className="[ form ] [ contact__form ]" action="">
          <fieldset className="{ flow-space }">
            <div className="[ form__box ]">
              <label htmlFor="name">
                <input
                  className="fz-18"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  required
                />
              </label>
            </div>
            <div className="[ form__box ]">
              <label htmlFor="tel">
                <input
                  className="fz-18"
                  type="tel"
                  name="tel"
                  id="tel"
                  pattern="([0-9]{2})-[0-9]{3}-[0-9]{4}"
                  placeholder="Telefone"
                  required
                />
              </label>
            </div>
            <div className="[ form__box-menssage ]">
              <label htmlFor="menssage">
                <textarea
                  className="fz-18"
                  name="menssage"
                  id="menssage"
                  placeholder="Mensagem..."
                  required
                />
              </label>
            </div>
          </fieldset>
          <button
            className="[ button ] | fw-b"
            type="submit"
            data-type="primary"
          >
            Enviar mensagem
          </button>
        </form>
      </RevealScroll>
    </section>
  );
}
