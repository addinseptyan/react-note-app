import React from 'react';

export default function NoteSearch({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Search notes ...'
        onChange={handleSearch}
      />
    </div>
  );
}
