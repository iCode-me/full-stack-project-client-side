import React from 'react'
import './App.css';
import Form from './component/Form/Form';
import CourseHome from './containers/CourseHome/CourseHome'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar/NavBar'

function App() {
  return (
    <div>
    <Router>
     <NavBar />
      <Route path="/" element={<CourseHome />} />
      <Route path="/" element={<Form />} />
    </Router>
    </div>
  );
}

export default App;
