import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';

const courses= {
  "Module 1": ["Path/to/video1.mp4","path/to/video2.mp4"],
  "Module 2": ["Path/to/video3.mp4","path/to/video4.mp4"],

};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App courses={courses} />);