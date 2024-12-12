import React from 'react';
import './styles.css';

const VideoPlayer = ({ videoPath }) => {
    return (
        <div className="video-container">
            <h2>Now Playing</h2>
            {videoPath ? (
                <video id="videoPlayer" controls>
                    <source src={videoPath} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Select a video from the sidebar to start watching.</p>
            )}
        </div>
    );
};

export default VideoPlayer;


