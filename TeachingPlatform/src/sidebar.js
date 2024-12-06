import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ courses, onLogout }) => {
    return (
        <div className="sidebar">
            <h2>Courses</h2>
            {Object.entries(courses).map(([module, videos]) => (
                <div className="card">
                    <h3>{module}</h3>
                    <ul>
                        {videos.map((video, index) => (
                            <li key={index}>
                                <Link to="#" onClick={() => alert(`Selected video: ${video}`)}>
                                    {video}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            
            {/* Logout Button Positioned at the Bottom */}
            <button className="logout-btn" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default Sidebar;
