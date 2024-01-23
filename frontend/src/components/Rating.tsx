import React from 'react'

interface RatingProps {
    value: number
}

export const Rating: React.FC<RatingProps> = ({ value }) => {
    const valueRounded = Math.floor(value);
    const extra = value - valueRounded;
    return (
        <div className="rating">
            {
                [...Array(valueRounded).keys()].map((r, i) => (
                    <a key={r + i}><i className="fa fa-star"></i></a>
                ))
            }
            {
                extra >= 0.5 ? <a><i className="fa fa-star-half-o"></i></a> : <a><i className="fa fa-star-o"></i></a>
            }
        </div>
    )
}