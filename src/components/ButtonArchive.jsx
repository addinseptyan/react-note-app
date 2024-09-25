import React from 'react'
import { useNotesContext } from '../providers/NotesProvider'

export default function ButtonArchive({ id, isArchive }) {
  const { handleArchive } = useNotesContext()

  return (
    <button
      className='note-item__archive-button'
      onClick={() => handleArchive(id)}
    >
      {isArchive ? 'Unarchive' : 'Archive'}
    </button>
  )
}
