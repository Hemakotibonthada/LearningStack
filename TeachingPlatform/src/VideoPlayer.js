import React from 'react';

const VideoPlayer = ({ videoPath }) => {
    return (
        <div>
            <h2>Video Player</h2>
            <video id="videoPlayer" controls>
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
