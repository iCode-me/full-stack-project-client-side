import React from 'react'

const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <>
      <label htmlFor="">For your next course!..</label>
      <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" />
    </>
  )
}

export default SearchBox;