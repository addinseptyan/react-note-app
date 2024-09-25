import React from 'react'
import NoteSearch from './NoteSearch'

export default function NoteAppHeader() {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <NoteSearch />
    </div>
  )
}
