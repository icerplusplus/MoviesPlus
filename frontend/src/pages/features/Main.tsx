import { Sidebar } from "./Sidebar";
import { SectionType } from "../../utils/type";
import { Section } from './Section';
import { TopViews } from "./TopViews";

interface MainProps {
  body: {
    sections: SectionType[];
    topViews: SectionType;
    newMovies: SectionType;
  };
}

export const Main: React.FC<MainProps> = ({ body }) => {
  const { sections, topViews, newMovies } = body

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {
              sections.length > 0 && sections.map(section => (
                <Section key={section.id} title={section.title} movies={section.movies} />
              ))
            }
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="product__sidebar">
              <TopViews data={topViews} />
              <Sidebar data={newMovies} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
