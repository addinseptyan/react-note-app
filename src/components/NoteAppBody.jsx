import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

export default function NoteAppBody({
  archivedNotes,
  notes,
  onDelete,
  onArchive,
  onAddNote
}) {
  return (
    <div className="note-app__body">
      <NoteInput onAddNote={onAddNote} />
      <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}>
        Catatan Aktif
      </NoteList>
      <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive}>
        Arsip
      </NoteList>
    </div>
  );
}
