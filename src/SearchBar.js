import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form className="my-4" onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search news..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
