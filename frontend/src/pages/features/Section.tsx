import React from 'react'
import { MovieType } from '../../utils/type';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Movies } from './Movies';

interface SectionProps {
    title: string;
    movies: MovieType[]
}

export const Section: React.FC<SectionProps> = ({ title, movies }) => {
    return (
        <div className="section__product">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                        <h4>{title}</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="btn__all">
                        <a href="#" className="primary-btn">
                            View All <HiArrowNarrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <Movies movies={movies} />
            </div>
        </div>
    )
}
