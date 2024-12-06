import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const courses = {
    "Module 1": ["path/to/video1.mp4", "path/to/video2.mp4"],
    "Module 2": ["path/to/video3.mp4", "path/to/video4.mp4"],
    // Add dynamically fetched courses here
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App courses={courses} />);
  