import React, { useState } from 'react';
import NoteItem from './NoteItem';
import { Icons } from './Icons';

export default function NoteList({ children, notes, onDelete, onArchive, isCollapse }) {
  const [collapse, setCollapse] = useState(isCollapse);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <div>
        <h2 className='notes-list__title'>{children}</h2>
        <button className='notes-list__collapse-button' onClick={handleCollapse}>
          {collapse ? <Icons.ArrowDropDown /> : <Icons.ArrowDropUp />}
        </button>
      </div>

      {!collapse ? (
        notes.length ? (
          <div className='notes-list'>
            {notes.map((note) => (
              <NoteItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))}
          </div>
        ) : (
          <p className='notes-list__empty-message'>Tidak ada catatan</p>
        )
      ) : null}
    </>
  );
}
