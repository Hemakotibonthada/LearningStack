import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import Signup from './Signup';
import Login from './Login';
import './styles.css';

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
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
