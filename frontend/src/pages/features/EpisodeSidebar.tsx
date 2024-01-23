import React from 'react'
import { EpisodeSectionType } from '../../utils/type'

interface EpisodeSidebarProps {
    data: EpisodeSectionType
}

export const EpisodeSidebar: React.FC<EpisodeSidebarProps> = ({ data }) => {
    console.log("data: ", data);
    return (
        <div className="product__sidebar__comment">
            <div className="section-title">
                <h5>{data.title}</h5>
            </div>
            {data.episodes.length > 0 && data.episodes.map(movie => (
                <div key={movie.id} className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                        <img
                            src={movie.poster}
                            alt={movie.movie.name}
                        />
                    </div>
                    <div className="product__sidebar__comment__item__text">
                        <ul>
                            {
                                movie.movie.details.genre.length > 0 && movie.movie.details.genre.map(category => (
                                    <li key={category.id}>{category.name}</li>
                                ))
                            }
                        </ul>
                        <h5>
                            <a href="#">{movie.movie.name}</a>
                        </h5>
                        <span>
                            <i className="fa fa-eye"></i> {movie.movie.details.views.quantity} Views
                        </span>
                    </div>
                </div>
            ))}


        </div>

    )
}