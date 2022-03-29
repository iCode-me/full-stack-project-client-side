import React from 'react'
import "./Button.scss"


const Button = (props) => {
  const { buttonText } = props;

  return (
    <div>
      <button>{buttonText}</button>
    </div>
  )
}

export default Button