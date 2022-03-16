import React from 'react'
import './CourseCard.scss'

const CourseCard = (props) => {

  const { name, summary } = props

  return (
    <div className="courseCard">
      <h2>{name}</h2>
      <p>{summary}</p>
    </div>
  )
}

export default CourseCard