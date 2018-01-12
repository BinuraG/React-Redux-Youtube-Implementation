import React from 'react';

// This is syntactic sugar (ES6), if a object has a property
// say 'video' you can simply have it extracted using { video }
const VideoListItem = ({ video, onVideoSelect }) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li onClick={()=> onVideoSelect(video)}className="list-group-item">
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;