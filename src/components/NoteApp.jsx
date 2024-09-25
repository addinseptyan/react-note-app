import React, { useState } from 'react'
import NoteAppBody from './NoteAppBody'
import NoteAppHeader from './NoteAppHeader'
import NotesProvider from '../providers/NotesProvider'

function NoteApp() {
  return (
    <>
      <NotesProvider>
        <NoteAppHeader />
        <NoteAppBody />
      </NotesProvider>
    </>
  )
}

export default NoteApp
