import OwlCarousel from "react-owl-carousel";
import { HeroType } from "../../utils/type";

interface HeroProps {
  data: HeroType[]
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="hero">
      <div className="container">
        <OwlCarousel
          className="hero__slider owl-carousel"
          loop
          margin={0}
          items={1}
          dots={true}
          nav={true}
          // navText={[
          //   "<span className='arrow_carrot-left'></span>",
          //   "<span className='arrow_carrot-right'></span>",
          // ]}
          animateOut="fadeOut"
          animateIn="fadeIn"
          smartSpeed={1200}
          // autoHeight={false}
          autoplay={true}
          mouseDrag={false}
        >
          {
            data.length > 0 && data.map(hero => (
              <div
                key={hero.id}
                className="hero__items set-bg"
                style={{
                  backgroundImage: `url(${hero.image})`,
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text">
                      {
                        hero.genre.length > 0 && hero.genre.map(category => (
                          <div key={category.id} className="label">{category.name}</div>
                        ))
                      }
                      <h2>{hero.title}</h2>
                      <p>{hero.description}</p>
                      <a href="#">
                        <span>Watch Now</span> <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            ))
          }
        </OwlCarousel>
      </div>
    </section>
  );
};
