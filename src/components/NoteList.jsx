import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ children, notes, onDelete, onArchive }) {
  const data = [1, 2, 3];
  return (
    <>
      <h2>{children}</h2>
      {notes.length ? (
        <div className="notes-list">
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
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}
