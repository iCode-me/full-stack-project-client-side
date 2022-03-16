import React from 'react'


const Button = (props) => {
  const { buttonText } = props;

  return (
    <div>
      <button>{buttonText}</button>
    </div>
  )
}

export default Button