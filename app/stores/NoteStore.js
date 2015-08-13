import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';
import 'core-js/fn/array/find-index';


class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = this.notes || [];
  }
  create(note) {
    let notes = this.notes;

    this.setState({
      notes: notes.concat(note)
    });
  }
  update({id, task}) {
    let notes = this.notes;
    const targetId = notes.findIndex((note) => note.id === id);

    notes[targetId].task = task;

    this.setState({notes});
  }
  delete(id) {
    let notes = this.notes;
    const targetId = notes.findIndex((note) => note.id === id);
    notes.splice(targetId, 1)

    this.setState({notes});
  }
}

export default alt.createStore(NoteStore, 'NoteStore');
