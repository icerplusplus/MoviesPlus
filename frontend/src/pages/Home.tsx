import { dashboard } from "../assets/mocks/home.mock";
import { useMovies } from "../hooks";
import { Dashboard } from "../utils/type";
import { Hero, Main } from "./features";



const Home = () => {
  const {movies} = useMovies()
  console.log(movies)
  const handleGenerateBody = (): Dashboard => {
    return {
      heros: dashboard.heros,
      body: {
        ...dashboard.body,
        sections: [
          {
            id: "section_1",
            title: "trend now",
            movies: movies,
          },
          {
            id: "section_2",
            title: "popular shows",
            movies: movies,
          },
          {
            id: "section_3",
            title: "recently added shows",
            movies: movies,
          },
        ]
      }
    }
  }
  return (
    <div>
      <Hero data={dashboard.heros} />
      <Main body={handleGenerateBody().body} />
    </div>
  );
};

export default Home