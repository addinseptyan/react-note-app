import React from "react";
export default function ButtonArchive({ id, isArchive, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchive ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}
