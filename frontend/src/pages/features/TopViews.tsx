import React from 'react'
import { SectionType } from '../../utils/type'

interface TopViewsProps {
    data: SectionType
}

export const TopViews: React.FC<TopViewsProps> = ({ data }) => {
    return (
        <div className="product__sidebar__view">
            <div className="section-title">
                <h5>{data.title}</h5>
            </div>
            <ul className="filter__controls">
                <li className="active" data-filter="*">
                    Day
                </li>
                <li data-filter=".week">Week</li>
                <li data-filter=".month">Month</li>
                <li data-filter=".years">Years</li>
            </ul>
            <div className="filter__gallery">
                {
                    data.movies.length > 0 && data.movies.map(movie => {
                        const filterKeys = movie?.filters?.join(' ')
                        return (
                            <div
                                key={movie.id}
                                className={`product__sidebar__view__item set-bg mix ${filterKeys}`}
                                style={{
                                    backgroundImage: `url(${movie.thumbnail})`,
                                }}
                            >
                                <div className="ep">{movie.episodeQuantity} / {!movie.details.isPublic && movie.episodeTotal ? movie.episodeTotal : "?"}</div>
                                <div className="view">
                                    <i className="fa fa-eye"></i> {movie.details.views.quantity}
                                </div>
                                <h5>
                                    <a href="#">{movie.name}</a>
                                </h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}