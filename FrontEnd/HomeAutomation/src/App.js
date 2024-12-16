import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import Signup from './Signup';
import Login from './Login';
import Profile from "./Profile";
import './styles.css';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('username') !== null);

    const courses = {
        "Module 1": ["video1.mp4", "video2.mp4"],
        "Module 2": ["video3.mp4", "video4.mp4"],
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        alert('Logged out successfully');
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                {/* Main Route */}
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            <div className="main-content">
                                <Sidebar courses={courses} onLogout={handleLogout} />
                                <div className="video-container">
                                    <VideoPlayer />
                                </div>
                            </div>
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                
                {/* Authentication Routes */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

                {/* Teaching Platform Routes */}
                <Route path="/" element={<h2>Welcome to Teaching Platform</h2>} />
                <Route path="/profile/:id" element={<Profile userId="1" />} />
                <Route path="/videos" element={<VideoPlayer />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
};



export default App;
