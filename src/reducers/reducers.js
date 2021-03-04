//Reducers are functions that are in charge of managing a resource in the store

import {ADD_NEW_NOTE, DELETE_NOTE, EDIT_NOTE} from '../actions/BoardAction';


const initialState = [];

export const notes = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {

    case ADD_NEW_NOTE: {
    const {text} = payload; //Get the information from the payload    
    let newNote = {
            id: Date.now(),
            title: "New Note",
            body: "Sample note body text",
            text: text
        };
    console.log(`Adding a note`);
    console.log(text);
    console.log(state)
    console.log(`---------------`);
    return state.concat(newNote);
    }
    case DELETE_NOTE: {
        const {id} = payload;
        console.log(`Adding a note ${id} and this is the new state ${state}`);
        console.log(`Deleting a note`);
        console.log(id);
        console.log(state)
        console.log(`---------------`);
        return state.filter((note) => note.id !== id);
    }
    case EDIT_NOTE: {
        const {note} = payload;
        
        
        const index = state.findIndex(theNote => theNote.id === note.id);
       
        const newNotesArray = [...state];
        newNotesArray.splice(index, 1, note);
        console.log(newNotesArray);
        console.log(`Editing a note`);
        console.log(note);
        console.log(state)
        console.log(`---------------`);
        return newNotesArray;
    }

    default:
        return state
    }
}
