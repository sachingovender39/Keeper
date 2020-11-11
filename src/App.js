
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Note from './Components/Note'
import {useState} from 'react'
import CreateArea from './Components/CreateArea'
import HighlightIcon from "@material-ui/icons/Highlight";
function App() {
  const [notes, setNotes] = useState([]);

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
          />
        );
      })}
      <Footer />
    </div>
</div>
  );
}

export default App;
