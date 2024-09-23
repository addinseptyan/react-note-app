import React from "react";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.generateNotesWithSearch = this.generateNotesWithSearch.bind(this);
    this.generateActiveNotes = this.generateActiveNotes.bind(this);
    this.generateArchiveNotes = this.generateArchiveNotes.bind(this);
  }

  handleDelete(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id),
    });
  }

  handleArchive(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            if (note.archived) return { ...note, archived: false };
            return { ...note, archived: true };
          }
          return note;
        }),
      };
    });
  }

  handleAddNote(newNote) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, {
          id: +new Date(),
          title: newNote.title,
          body: newNote.body,
          createdAt: (new Date()).toISOString(),
          archived: false
        }]
      }
    });
  }
  
  handleSearch(keyword) {
    this.setState({
      searchKeyword: keyword
    });
  }

  generateNotesWithSearch() {
    const notes = this.state.notes;
    const keyword = this.state.searchKeyword;

    return notes.filter(note => note.title.toLowerCase().includes(keyword));
  }

  generateActiveNotes() {
    return this.generateNotesWithSearch().filter(
      (note) => note.archived === false
    )
  }

  generateArchiveNotes() {
    return this.generateNotesWithSearch().filter(
      (note) => note.archived === true
    )
  }

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
