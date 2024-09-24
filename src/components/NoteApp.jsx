import React from 'react';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import { getData, saveData } from '../utils/browser-storage';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchKeyword: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDelete(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.filter((note) => note.id !== id);
      saveData(updatedNotes);
      return { notes: updatedNotes };
    });
  }

  handleArchive(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) return { ...note, archived: !note.archived };
        return note;
      });
      saveData(updatedNotes);
      return { notes: updatedNotes };
    });
  }

  handleAddNote(newNote) {
    this.setState((prevState) => {
      const updatedNotes = [
        ...prevState.notes,
        {
          id: +new Date(),
          title: newNote.title,
          body: newNote.body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ];
      saveData(updatedNotes);
      return { notes: updatedNotes };
    });
  }

  handleSearch(keyword) {
    this.setState({
      searchKeyword: keyword,
    });
  }

  generateNotesWithSearch = () => {
    const notes = this.state.notes;
    const keyword = this.state.searchKeyword;

    return notes.filter((note) => note.title.toLowerCase().includes(keyword));
  };

  generateActiveNotes = () => {
    return this.generateNotesWithSearch().filter(
      (note) => note.archived === false
    );
  };

  generateArchiveNotes = () => {
    return this.generateNotesWithSearch().filter(
      (note) => note.archived === true
    );
  };

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.handleSearch} />
        <NoteAppBody
          archivedNotes={this.generateArchiveNotes()}
          notes={this.generateActiveNotes()}
          onDelete={this.handleDelete}
          onArchive={this.handleArchive}
          onAddNote={this.handleAddNote}
        />
      </>
    );
  }
}

export default NoteApp;
