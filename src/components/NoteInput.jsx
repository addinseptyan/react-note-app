import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limitTitle: 50,
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    const value = event.target.value;

    if (value.length <= this.state.limitTitle) {
      this.setState({
        title: value
      });
    }
  }

  handleBody(event) {
    this.setState({
      body: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;

    this.props.onAddNote({title, body});
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.handleSubmit}>
          <p className="note-input__title__char-limit">Sisa karakter: {(this.state.limitTitle) - (this.state.title.length)}</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.handleTitle}
            required
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu disini ..."
            value={this.state.body}
            onChange={this.handleBody}
            required
          ></textarea>
          <button type="submit" className="note-input">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
