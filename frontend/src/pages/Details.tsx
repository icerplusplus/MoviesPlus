import { Breadcrumb, Rating } from "../components"
import { Sidebar, Reviews } from "./features";
import { useLoaderData } from "react-router-dom"
import { DetailsPageType } from "../utils/type";

const Details = () => {
    const movie = useLoaderData() as DetailsPageType;

    return (
        <div>
            <Breadcrumb />
            <section className="anime-details spad">
                <div className="container">
                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div
                                    className="anime__details__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${movie.thumbnail})`,
                                    }}
                                >
                                    <div className="comment"><i className="fa fa-comments"></i> {movie.details.comments.quantity}</div>
                                    <div className="view"><i className="fa fa-eye"></i> {movie.details.views.quantity}</div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>{movie.name}</h3>
                                        <span>{movie.details.author}</span>
                                    </div>
                                    <div className="anime__details__rating">
                                        <Rating value={movie.details.rating.avg} />
                                        <span>{movie.details.rating.votes} Votes</span>
                                    </div>
                                    <p>
                                        {movie.details.description}
                                    </p>
                                    <div className="anime__details__widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Type:</span> {movie.details.type}</li>
                                                    <li><span>Studios:</span> {movie.details.studio}</li>
                                                    <li><span>Date aired:</span> {movie.details.dateAired.start} to {movie.details.dateAired.end}</li>
                                                    <li><span>Status:</span> {movie.details.status}</li>
                                                    <li>
                                                        <span>Genre:</span> {movie.details.genre.length > 0 && <>{movie.details.genre.map(g => g.name).join(', ')}</>}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li><span>Scores:</span> {movie.details.scores.avg} / {movie.details.scores.votes}</li>
                                                    <li><span>Rating:</span> {movie.details.rating.avg} / {movie.details.rating.votes} times</li>
                                                    <li><span>Duration:</span> {movie.details.duration.value + ' ' + movie.details.duration.unit} / episode</li>
                                                    <li><span>Quality:</span> {movie.details.quanlity}</li>
                                                    <li><span>Views:</span> {movie.details.views.quantity}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="anime__details__btn">
                                        <a href="#" className="follow-btn"
                                        ><i className="fa fa-heart-o"></i> Follow</a
                                        >
                                        <a href="#" className="watch-btn"
                                        ><span>Watch Now</span> <i className="fa fa-angle-right"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">

                            <Reviews comments={movie.comments} />

                            <div className="anime__details__form">
                                <div className="section-title">
                                    <h5>Your Comment</h5>
                                </div>
                                <form action="#">
                                    <textarea placeholder="Your Comment"></textarea>
                                    <button type="submit">
                                        <i className="fa fa-location-arrow"></i> Review
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="anime__details__sidebar">
                                <Sidebar data={movie.sidebar} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Details