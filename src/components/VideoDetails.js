import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) {
        return ( 
            <div class="ui active inline loader">
            <br/>
            <br/>
                 <div class="ui text">Loading:</div>
            </div>
        );

    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return ( 
    <div>
        <div className="ui embed" >
             <iframe allow="fullscreen" title="video Player" src={videoSrc} />
        </div>
        <div className="ui segment" style={{backgroundColor:' #274555 ',}}>
            <h4 className="ui header" >{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
    );
};

export default VideoDetails;
