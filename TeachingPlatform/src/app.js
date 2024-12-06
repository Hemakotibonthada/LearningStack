import React, { useState } from 'react';
import Sidebar from './sidebar';
import VideoPlayer from './VideoPlayer';
import './styles.css';

const App = ({ courses }) => {
    const [selectedVideo, setSelectedVideo] = useState("");

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div id="root">
            <div id="sidebar">
                <Sidebar courses={courses} onVideoSelect={handleVideoSelect} />
            </div>
            <div id="content">
                <VideoPlayer videoPath={selectedVideo} />
            </div>
        </div>
    );
};

export default App;
