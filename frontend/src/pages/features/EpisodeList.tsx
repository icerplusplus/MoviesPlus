import React from 'react'

interface EpisodeListProps {
    total: number
}

export const EpisodeList: React.FC<EpisodeListProps> = ({ total }) => {
    if (total === 0) return;
    return (
        <div className="anime__details__episodes">
            <div className="section-title">
                <h5>Episode list</h5>
            </div>
            {
                [...Array(total).keys()].map(episode => (
                    <a href="#">Ep {episode + 1}</a>
                ))
            }
        </div>
    )
}

export default EpisodeList