import React, { useState } from 'react'
import { useNotesContext } from '../providers/NotesProvider'

function NoteInput() {
  const [note, setNote] = useState({ title: '', body: '' })
  const { handleAddNote } = useNotesContext()
  const maxLength = 50

  const handleTitle = (e) => {
    if (e.target.value.length <= maxLength) {
      setNote({ ...note, title: e.target.value })
    }
  }

  const handleBody = (e) => {
    setNote({ ...note, body: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddNote(note)
    setNote({ title: '', body: '' })
  }

  return (
    <div className='note-input'>
      <h2>Create your note</h2>
      <form onSubmit={handleSubmit}>
        <p className='note-input__title__char-limit'>
          Remaining characters: {maxLength - note.title.length}
        </p>
        <input
          className='note-input__title'
          type='text'
          placeholder='This is a title ...'
          value={note.title}
          onChange={handleTitle}
          required
        />
        <textarea
          className='note-input__body'
          placeholder='Type your note here ...'
          value={note.body}
          onChange={handleBody}
          required
        ></textarea>
        <button type='submit' className='note-input'>
          Create
        </button>
      </form>
    </div>
  )
}

export default NoteInput
