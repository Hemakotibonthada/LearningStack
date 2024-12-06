import React from 'react';

const Sidebar = ({ courses, onVideoSelect }) => {
    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {Object.entries(courses).map(([module, videos]) => (
                    <li key={module}>
                        <strong>{module}</strong>
                        <ul>
                            {videos.map((video, index) => (
                                <li key={index}>
                                    <a href="#" onClick={() => onVideoSelect(video)}>
                                        {video.split('/').pop()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
