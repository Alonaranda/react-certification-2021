import React, { useContext } from 'react'
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
import { GlobalContext } from './Context';
import { HeaderNav } from './HeaderNav';
import '../style/VideoDetailsScreen.css'

export const VideoDetailsScreen = () => {

    const { myStateReducer } = useContext(GlobalContext);

    const { items: videos } = useFetchVideos(myStateReducer.search);

    return (
        <div>
            <HeaderNav/>
            <div className="contenedor">
                <div className="video-details">
                    <div className="video-details-vid">
                        <iframe
                            allowFullScreen
                            frameBorder="0"
                            title="rick roll"
                            src={`https://www.youtube.com/embed/${myStateReducer.videoData.videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />

                    </div>

                    <div className="video-details-text">
                        <h2>{myStateReducer.videoData.title}</h2>
                        <p>{myStateReducer.videoData.description}</p>
                    </div>

                </div>
                <hr />
            </div>

            <div className="contenedor-sugeridos">
                <h3>Sugeridos: </h3>
                <div className="sugeridos">
                    {videos.map(vid => (
                        <CardItem
                            key={vid.id}
                            {...vid}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}