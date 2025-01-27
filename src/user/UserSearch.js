import React from 'react'

export default function ({ query, onChange }) {
  function handleChange(e) {
    onChange(e.target.value)
  }
  return (
    <div className="user_search_container">
      <div className="user_search">
        <i className="fa fa-search icon"></i>
        <input
          value={query}
          placeholder="Enter your search query here..."
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
