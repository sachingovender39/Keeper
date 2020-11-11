import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Item from "./Item";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  console.log(Array.isArray(props.content));
  console.log(props.content);
  return (
    <div className="note">
      <h1>{props.title}</h1>
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