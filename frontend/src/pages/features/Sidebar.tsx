import React from 'react'
import { SectionType } from '../../utils/type'

interface SidebarProps {
    data: SectionType
}

export const Sidebar: React.FC<SidebarProps> = ({ data }) => {
    return (
        <div className="product__sidebar__comment">
            <div className="section-title">
                <h5>{data.title}</h5>
            </div>
            {data.movies.length > 0 && data.movies.map(movie => (
                <div key={movie.id} className="product__sidebar__comment__item">
                    <div className="product__sidebar__comment__item__pic">
                        <img
                            src={movie.thumbnail}
                            alt={movie.name}
                        />
                    </div>
                    <div className="product__sidebar__comment__item__text">
                        <ul>
                            {
                                movie.details.genre.length > 0 && movie.details.genre.map(category => (
                                    <li key={category.id}>{category.name}</li>
                                ))
                            }
                        </ul>
                        <h5>
                            <a href="#">{movie.name}</a>
                        </h5>
                        <span>
                            <i className="fa fa-eye"></i> {movie.details.views.quantity} Views
                        </span>
                    </div>
                </div>
            ))}


        </div>

    )
}