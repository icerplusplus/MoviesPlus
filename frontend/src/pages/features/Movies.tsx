import React from 'react'
import { MovieType } from '../../utils/type'

interface MoviesProps {
    movies: MovieType[]
}
interface MovieProps {
    movie: MovieType;
}

export const Movie: React.FC<MovieProps> = ({ movie }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="product__item">
                <div
                    className="product__item__pic set-bg"
                    style={{
                        backgroundImage: `url(${movie.thumb_url})`,
                    }}
                >
                    <div className="ep">{movie.episode_current}</div>
                    <div className="comment">
                        <i className="fa fa-comments"></i> {movie.rating_count}
                    </div>
                    <div className="view">
                        <i className="fa fa-eye"></i> {movie.view_total}
                    </div>
                </div>
                <div className="product__item__text">
                    <ul>
                    <li>{movie.quality}</li>
                    <li>{movie.language}</li>
                    </ul>
                    <h5>
                        <a href="#">{movie.name}</a>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export const Movies: React.FC<MoviesProps> = ({ movies }) => {
    if (movies.length === 0) return <p>skeleton</p>
    return movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
    ))
}

