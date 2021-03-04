import React, { useState , useEffect} from "react";
import { connect } from "react-redux";
import "../css/Note.css";

function Note(props) {
  const { title, body, id, editMode } = props.note;
  const {handleDelete, handleEdits} = props;
  const [titleState, setTitleState] = useState(title);
  const [bodyState, setBodyState] = useState(body);
  const [localEditMode, setLocalEditMode] = useState(editMode);
  const [note, setNote] = useState(props.note)
  
  //Watch the titleState and BodyState variables for changes
  useEffect(() => {
   setNote({
      id: props.note.id,
      title: titleState,
      body: bodyState
    
  })
    
  },[titleState, bodyState])

  //If the form values change then update the note component
  useEffect(()=>{
    handleEdits(note);
    
  }, [note])


  const handleEdit = () => {
    setLocalEditMode(true);
  };

  const handleSave = () => {
    const titleContent = document.getElementById("titleContent");
    const bodyContent = document.getElementById("bodyContent");
    setTitleState(titleContent.value);
    setBodyState(bodyContent.value);
    
    setLocalEditMode(false);
    
    
  };

  let titleElement, bodyElement, buttonArea;
  if (localEditMode) {
    titleElement = (
      <textarea
        id="titleContent"
        className="title-textarea"
        defaultValue={titleState}
      ></textarea>
    );
    bodyElement = (
      <textarea
        id="bodyContent"
        className="body-textarea"
        defaultValue={bodyState}
      ></textarea>
    );
    buttonArea = (
      <div>
        <button className="btn btn-info" onClick={handleSave}>
          Save
        </button>
      </div>
    );
  } else {
    titleElement = <h5 className="card-title">{titleState}</h5>;
    bodyElement = <p>{bodyState}</p>;
    buttonArea = (
      <div>
        <button className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
        <button
          className="btn btn-danger ml-1"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    );
  }

  return (
    <div id={id} className="col-sm-6">
      <div className="card card-view">
        <div className="card-body">
          {titleElement}
          {bodyElement}
          {buttonArea}
        </div>
      </div>
    </div>
  );
}

export default connect()(Note)
