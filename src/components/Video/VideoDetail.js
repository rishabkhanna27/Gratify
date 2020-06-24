import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}/?autoplay=1`;
    console.log(typeof(video));
    return (
        <div className="vdeo">
            <div className='ui embed'>
                <iframe src={videoSrc} title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                {/* <p>{video.snippet.description}</p> */}<br></br>
            </div>
        </div>

    )
}

export default VideoDetail;