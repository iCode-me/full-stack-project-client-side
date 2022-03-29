import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import "./Course.scss";

const Course = (props) => {

  const { name, location, price, duration, summary} = props

  return (
    <div className="course">
     <h2>{name}</h2>
     <h2>Nology Web Development</h2>

      <div className="course__details">
      <table className="course__details-table">
        <tr>
          <td>{location}</td>
          <td className="course__details-table-title">Location: </td>
          <td>Lorem ipsum</td>
        </tr>

        <tr>  
          <td>{price}</td>
          <td className="course__details-table-title">Price: </td>
          <td>Lorem ipsum</td>
        </tr>  
  
        <tr>
          <td>{duration}</td>
          <td className="course__details-table-title">Duration: </td>
          <td>Lorem ipsum</td>
        </tr>  
      
        <tr>
          <td>{summary}</td>
          <td className="course__details-table-title">Summary: </td>
          <td>Lorem ipsum</td>
        </tr>  
      </table>
      </div>
      
     <Link to="/CourseHome">
       <div className="button">
        <Button buttonText={"Back to Search"} />
       </div>
     </Link>

    </div>
  )
}

export default Course