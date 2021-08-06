import React from 'react'
import { useParams } from 'react-router'
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
import { VideoDat } from './VideoDat';
import '../style/VideoDetailsScreen.css'

export const VideoDetailsScreen = ({ history }) => {

    const { videoId, categoria } = useParams();

    const { items: videos } = useFetchVideos(categoria);

    return (
        <div>
            <div className="contenedor">
                <div className="video-details">
                    <div className="video-details-vid">
                        <iframe
                            allowFullScreen
                            frameBorder="0"
                            title="rick roll"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />

                    </div>
                    <div className="video-details-text">
                        {
                            videos.filter((vid) => vid.videoId === videoId).map((dato) => (
                                <VideoDat
                                    key={dato.id}
                                    title={dato.title}
                                    description={dato.description}
                                />
                            ))
                        }
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
