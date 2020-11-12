
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Note from './Components/Note'
import {useState} from 'react'
import CreateArea from './Components/CreateArea'
import HighlightIcon from "@material-ui/icons/Highlight";
function App() {
  const [notes, setNotes] = useState([]);
  const [isfocus,setFocus] = useState({enable:false, title:'',content:''});
  var focusNoteindex=0;
  var focusedNote = {}

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }  

  function focus(id){
    focusedNote = notes.filter((noteItem,index) => {
      if(index == id){
        focusNoteindex=index;
      }
      return index == id;
    })[0];

    console.log(focusedNote);
    setFocus({enable:true,title:focusedNote.title,content:focusedNote.content});
    const focusDiv = document.getElementById('focus');
    focusDiv.classList.add('focused');
  }

  function unfocus(){
    const focusDiv = document.getElementById('focus');
    setFocus({enable:false, title:'',content:''});
    focusDiv.classList.remove('focused');
  }
  return (
<div>
  <div className='splash'>
    <h1 className='fade-in'><HighlightIcon />Keeper</h1>
  </div>
  <div className='content'>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            focus={focus}
            edit={true}
          />
        );
      })}
      <Footer />
    </div>
    <div id='focus' onClick={unfocus}>
      {
        isfocus.enable && (
        <Note className='focusNote' key={focusNoteindex} id={focusNoteindex} title={isfocus.title} content={isfocus.content} edit={false} unfocus={unfocus}  onDelete={deleteNote}/>
        )
      }
    </div>
</div>
  );
}

export default App;
