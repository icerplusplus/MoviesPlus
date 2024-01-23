import React from "react"
import { useLoaderData } from "react-router-dom"
import { APITypes } from 'plyr-react';
import { EpisodeList, EpisodeSidebar, Player, Reviews } from "./features"
import { WatchPageType } from "../utils/type";

import "plyr-react/plyr.css"

const Watcher = () => {
    const { comments, episodesNext, source, episodeTotal } = useLoaderData() as WatchPageType;

    const player = React.useRef<APITypes>(null)

    React.useEffect(() => {
        // player.current?.plyr.on('ready', (event) => {
        //     const instance = event.detail.plyr;

        // })
    }, [])

    return (
        <section className="anime-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <Player ref={player} source={source} />

                        <EpisodeList total={episodeTotal} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Reviews comments={comments} />
                        <div className="anime__details__form">
                            <div className="section-title">
                                <h5>Your Comment</h5>
                            </div>
                            <form action="#">
                                <textarea placeholder="Your Comment"></textarea>
                                <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <EpisodeSidebar data={episodesNext} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Watcher