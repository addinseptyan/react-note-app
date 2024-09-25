import React from 'react'
import NoteList from './NoteList'
import NoteInput from './NoteInput'
import { useNotesContext } from '../providers/NotesProvider'

export default function NoteAppBody() {
  const { generateNotes, generateArchiveNotes } = useNotesContext()

  return (
    <div className='note-app__body'>
      <NoteInput />
      <NoteList notes={generateNotes()}>Notes</NoteList>
      <NoteList notes={generateArchiveNotes()} isCollapse>
        Archive
      </NoteList>
    </div>
  )
}
