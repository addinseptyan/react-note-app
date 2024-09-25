import React from 'react'
import { useNotesContext } from '../providers/NotesProvider'

export default function NoteSearch() {
  const { handleSearch } = useNotesContext()

  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Search notes ...'
        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
      />
    </div>
  )
}
