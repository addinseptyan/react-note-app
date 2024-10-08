import React from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';
import { showFormattedDate } from '../utils';

export default function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  archived,
  onArchive,
}) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <ButtonDelete id={id} onDelete={onDelete} />
        <ButtonArchive id={id} isArchive={archived} onArchive={onArchive} />
      </div>
    </div>
  );
}
