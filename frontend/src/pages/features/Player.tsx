import React from "react"
import Plys, { APITypes, PlyrOptions } from "plyr-react"

export interface VideoSourceType {
    src: string
    type?: 'video/mp4' | 'video/webm'
    size?: '720' | '1080'
    provider?: 'html5' | 'vimeo' | 'youtube'
}

export interface PlayerSource {
    type?: 'video' | 'audio';
    poster: string,
    sources: VideoSourceType[]
}

export interface PlayerProps {
    source: PlayerSource;
    options?: PlyrOptions;
}

export const Player = React.forwardRef<APITypes, PlayerProps>((props, ref) => {

    return <div className="anime__video__player">
        <Plys ref={ref} {...props} source={{
            type: props.source.type ?? 'video',
            poster: props.source.poster,
            sources: props.source.sources.map(s => ({
                ...s,
                size: !s.size ? 1080 : parseInt(s.size),
                type: s.type ?? 'video/mp4'
            }))
        }} />
    </div>
})