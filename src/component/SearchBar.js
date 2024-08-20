import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchVal, setSearchVal] = useState('');

  const handleSearchClick = () => {
    onSearch(searchVal);
  };

  return (
    <div className="flex justify-center gap-2 items-center">
      <input
        type="text"
        placeholder="Search Ohana ..."
        onChange={e => setSearchVal(e.target.value)}
        className="w-auto h-10 duration-300 rounded border border-orange-700 px-2 py-1 focus:outline-none focus:border-primary"
      />
      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
