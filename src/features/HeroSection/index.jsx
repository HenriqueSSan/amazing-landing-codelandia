import HeroImg from '../../_assets/img/hero.svg';
import { RevealScroll } from './containers/scrollReveal';
import './block.scss';

export function HeroSection() {
  return (
    <section className="[ hero ] | bg-clr-light-blue-100 mb-150 mb-75">
      <div className="[ container ] { flex-flow grid-col-1 }">
        <RevealScroll
          className="[ hero__data ] flex-1"
          config={{
            easing: 'ease-in-out',
            delay: 200,
            origin: 'right',
            distance: '-200px',
          }}
        >
          <h1 className="| fz-36 fw-r ff-title lh-47 |">
            Lorem ipsum dolor
            <br />
            sit amet
          </h1>
          <p className="| fz-18 lh-32 |">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            massa sit amet augue consectetur ullamcorper non ac massa.
          </p>
          <div className="[ hero__links ]">
            <a
              className="[ hero__link ] [ button ] | fw-b"
              data-type="primary"
              href="#"
            >
              Botão
            </a>
          </div>
        </RevealScroll>
        <RevealScroll
          className="flex-1"
          config={{
            easing: 'ease-in-out',
            delay: 200,
            origin: 'right',
            distance: '200px',
          }}
        >
          <img src={HeroImg} alt="" width={400} height={400} />
        </RevealScroll>
      </div>
    </section>
  );
}
