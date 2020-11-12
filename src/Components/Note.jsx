import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Item from "./Item";

function Note(props) {
  function handleClick() {
    if (!props.edit){
      props.unfocus();
    }
    props.onDelete(props.id);
  }

  function focusNote(){
    props.focus(props.id);
  }
  console.log(Array.isArray(props.content));
  console.log(props.content);
  return (
    <div className={props.edit ? 'note': 'note focusNote'}>
      <h1 onClick={props.edit ? focusNote: null}>{props.title}</h1>
      {Array.isArray(props.content) ? 
      <div classname='notelist'>
      <ul>
      {
        props.content.map((currentItem) => 
        <Item name={currentItem} />  
        )}     
      </ul>
      </div> 
      : <p>{props.content}</p> }
        <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;