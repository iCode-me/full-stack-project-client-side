import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../../Button/Button"

const Course = (props) => {

  const { name, location, price, duration, summary} = props

  return (
    <div className="course">
     <h2>{name}</h2>
     <p></p>

     <h3>{location}</h3>
     <p></p>

     <h3>{price}</h3>
     <p></p>

     <h3>{duration}</h3>
     <p></p>

     <h3>{summary}</h3>
     <p></p>

     <Link to="/CourseHome">
       <Button buttonName="Back to Search" />
     </Link>

    </div>
  )
}

export default Course