import React from 'react'
import Button from '../Button/Button';


const Form = () => {

  return (
    <div>
      <form action="">
        <h1>Add your course</h1>
        <label htmlFor="for name">Name:</label>
        <input type="search" name="location"/>
        <label htmlFor="for location">Location:</label>
        <input type="search" name="location"/>
        <label htmlFor="for price">Price:</label>
        <input type="search" />
        <label htmlFor="for duration">Duration:</label>
        <input type="search" />
        <label htmlFor="for summary">Summary:</label>
        <input type="search" />
      
      <Button buttonText={"Cancel"} className='button'/>
      <Button buttonText={"Save"} className='button'/>

      </form>
    </div>
  )
}

export default Form;