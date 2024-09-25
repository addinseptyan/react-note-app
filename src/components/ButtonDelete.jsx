import React from 'react'
import { useNotesContext } from '../providers/NotesProvider'

export default function ButtonDelete({ id }) {
  const { handleDelete } = useNotesContext()

  return (
    <button
      className='note-item__delete-button'
      onClick={() => handleDelete(id)}
    >
      Delete <span className='naruto'></span>
    </button>
  )
}
