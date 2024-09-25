import React, { useState } from 'react'
import NoteItem from './NoteItem'
import { Icons } from './Icons'

export default function NoteList({ notes, isCollapse, children }) {
  const [collapse, setCollapse] = useState(isCollapse)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <>
      <div>
        <h2 className='notes-list__title'>{children}</h2>
        <button
          className='notes-list__collapse-button'
          onClick={handleCollapse}
        >
          {collapse ? (
            <Icons.KeyboardArrowRight />
          ) : (
            <Icons.KeyboardArrowDown />
          )}
        </button>
      </div>

      {!collapse ? (
        notes.length ? (
          <div className='notes-list'>
            {notes.map((note) => (
              <NoteItem key={note.id} {...note} />
            ))}
          </div>
        ) : (
          <p className='notes-list__empty-message'>You have no notes yet!</p>
        )
      ) : null}
    </>
  )
}
