import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import CheckIcon from '@material-ui/icons/Check';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Item from "./Item";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [islist,setList]=useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [items, setItems] = useState([]);
  const [list,listManager] = useState({title:'',content:[]});
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    if (name==='title' && islist){
      console.log(list);
      listManager({
        title:value, content:items
      }
      )
    }
  }

  function submitNote(event) {
    console.log(note);
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    console.log(note);
    event.preventDefault();
    setExpanded(false);
    setList(false)
    setItems([]);
  }
  
  function expand() {
    setExpanded(true);
    console.log(note)
  }
  

  function listmode(event){
    setList(true);
    setExpanded(true);
    event.preventDefault();
  }
  
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, note.content];
    });
    setNote(prevNote => {
      return {
        ...prevNote,
        content:''
      };
    });
    listManager({title:note.title, content:items})
  }
function updateList(){
  listManager(prevList => {
    return {...prevList,content:items};
  })
}
  function submitList(event){

    console.log(list);
    props.onAdd(list);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setExpanded(false);
    setList(false)
    setItems([]);
  }
  return (
    <div>
    <form className="create-note">
      {!isExpanded && (
        <div>
          <span className='expand' onClick={expand}>Take a note</span>
          <div className='Icon inline'> 
          <button id='listIcon' onClick={listmode}><FormatListBulletedIcon /></button>
          <span className='tooltip'>Create List</span>
          </div>
        </div>
        )}
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      )}
      {isExpanded && (
              <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder={islist ? 'Add item...' : "Take a note..."}
              rows={isExpanded ? 3 : 1}
            />
      )}
      <div>
      <ul>
      {items.map((todoItem) => (
            <Item name={todoItem} />
          ))}       
      </ul>
    </div>
      {!islist && (
              <div className='Icon'>
              <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                  <CheckIcon />
                </Fab>
              </Zoom>
              <span className='tooltip'>Add note</span>
              </div>
      )
      }
      {islist && (
      <div onMouseEnter={updateList} className='Icon'>
      <Zoom in={isExpanded}>
        <Fab onClick={submitList}>
          <CheckIcon />
        </Fab>
      </Zoom>
      <span className='tooltip'>Add list</span>
      </div>
      )}
      {islist && (
              <div className='Icon'>
              <Zoom in={isExpanded}>
                <Fab id='addItem'onClick={addItem}>
                  <AddIcon />
                </Fab>
              </Zoom>
              <span className='tooltip'>Add item</span>
              </div>
      )
      }
    </form>
  </div>
  );
}

export default CreateArea;
