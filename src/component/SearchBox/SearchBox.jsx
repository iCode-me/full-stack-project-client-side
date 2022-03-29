import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <div className="search-box" data-testid="search-box">
      <label htmlFor="" className="search-box__title">For your next course!..</label>
      <input type="text" name={label} placeholder='Enter course title' value={searchTerm} onInput={handleInput} className="search-box__input" />
    </div>
  )
}

export default SearchBox;