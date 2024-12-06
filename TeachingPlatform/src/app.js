import React, { useState } from 'react';
import Sidebar from './sidebar';
import VideoPlayer from './VideoPlayer';
import Login from './Login';
import Signup from './Signup';
import './styles.css';

const App = ({ courses }) => {
    const [selectedVideo, setSelectedVideo] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignup, setIsSignup] = useState(true);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleSignup = () => {
        setIsSignup(false);
    };

    const handleSwitchToSignup = () => {
        setIsSignup(true);
    };

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    return (
        <div id="root">
            {isLoggedIn ? (
                <>
                    <div id="sidebar">
                        <Sidebar courses={courses} onVideoSelect={handleVideoSelect} />
                    </div>
                    <div id="content">
                        <VideoPlayer videoPath={selectedVideo} />
                    </div>
                </>
            ) : isSignup ? (
                <Signup onSignup={handleSignup} onSwitchToLogin={handleSwitchToSignup} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
