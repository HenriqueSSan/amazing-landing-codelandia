import Data from './data/card-data.json';
import './block.scss';
import { RevealScroll } from '../HeroSection/containers/scrollReveal';

export function FeatureSection() {
  const classNameBgCardsColors = [
    'bg-clr-red',
    'bg-clr-cyan',
    'bg-clr-purple',
    'bg-clr-lime-green',
    'bg-clr-yellow',
    'bg-clr-light-blue',
  ];

  return (
    <section className="[ feature-1 ] | mb-150 mb-75">
      <div className="[ container ]">
        <div>
          <div className="[ cards__container ]  { grid-col-3 grid-col-2 grid-col-1 }">
            {Data.map((cardData, index) => (
              <article key={cardData.id} className="[ card ] | bg-clr-white">
                <RevealScroll
                  config={{
                    reset: true,
                    delay: 200,
                    duration: 500,
                    origin: 'top',
                    distance: '-200px',
                    easing: 'ease-in-out',
                  }}
                >
                  <div
                    className={`[ card__image ] [ card__img-${cardData.id} ] | ${classNameBgCardsColors[index]}`}
                  >
                  </div>
                  <div className="[ card__data ] { flow-space } | p-t24-r28-b31-l30">
                    <h2 className="| fz-24 ff-title |">{cardData.name}</h2>
                    <p className="| fz-18 |">{cardData.description}</p>
                  </div>
                </RevealScroll>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
