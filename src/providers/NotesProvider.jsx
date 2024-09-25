import React from 'react'
import { getData, saveData } from '../utils/browser-storage'

const NotesContext = React.createContext()
const notesData = getData()

function NotesProvider({ children }) {
  const [notes, setNotes] = React.useState(notesData)
  const [searchKeyword, setSearchKeyword] = React.useState('')

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    saveData(updatedNotes)
    setNotes(updatedNotes)
  }

  const handleArchive = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) return { ...note, archived: !note.archived }
      return note
    })
    saveData(updatedNotes)
    setNotes(updatedNotes)
  }

  const handleAddNote = (newNote) => {
    const updatedNotes = [
      ...notes,
      {
        id: +new Date(),
        title: newNote.title,
        body: newNote.body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]
    saveData(updatedNotes)
    setNotes(updatedNotes)
  }

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword)
  }

  const generateNotesWithSearch = () => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword)
    )
  }

  const generateNotes = () => {
    return generateNotesWithSearch().filter((note) => note.archived === false)
  }

  const generateArchiveNotes = () => {
    return generateNotesWithSearch().filter((note) => note.archived === true)
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        generateNotes,
        generateArchiveNotes,
        handleAddNote,
        handleDelete,
        handleArchive,
        handleSearch,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export const useNotesContext = () => React.useContext(NotesContext)

export default NotesProvider
