import React from "react";
import { connect } from "react-redux";
import { addNewNote, deleteNote, editNote } from "../actions/BoardAction";
import Note from "./Note";

const BoardContainer = ({ notes, onAddNoteClicked, onDeleteNote , onEditNote}) => (
    <div>
        <h1>Welcome to the Board Notes!</h1>
        {notes.map(note => <Note key={note.id} note={note} handleDelete={onDeleteNote} handleEdits={onEditNote}/>)}
        <button className="btn btn-success add-button" 
        onClick={()=>{onAddNoteClicked()}}>
            Add
        </button>
    </div>
)

const mapStateToProps = state => {

    // console.log(state);

    return {
    notes: state.notes
    }
};

const mapDispatchToProps = dispatch => ({
    onAddNoteClicked: (text) => dispatch(addNewNote(text)),
    onDeleteNote: (id) => dispatch(deleteNote(id)),
    onEditNote: (note) => dispatch(editNote(note))
    // onAddNoteClicked: () => dispatch(onAddNoteClicked())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)