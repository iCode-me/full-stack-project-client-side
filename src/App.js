import React from 'react'
import './App.scss';
import Form from './component/Form/Form';
// import CourseHome from './containers/CourseHome/CourseHome'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar/NavBar'
import Course from './component/Course/Course'

function App() {
  return (
    <div>
    <Router>
     <NavBar />
     <Routes>
      <Route path="/" element={<Course />} />
      <Route path="add-course" element={<Form />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
