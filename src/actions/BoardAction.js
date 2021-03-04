export const ADD_NEW_NOTE = "ADD_NEW_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

//Action Creator
export const addNewNote = (text) => ({
    type: ADD_NEW_NOTE,
    payload: { text},
});

export const deleteNote = (id) => {
    console.log(id);

    return (
        {
            type: DELETE_NOTE,
            payload: {id},
        }
    )
} 
export const editNote = (note) => {
    console.log(note);

    return (
        {
            type: EDIT_NOTE,
            payload: {note},
        }
    )
} 
