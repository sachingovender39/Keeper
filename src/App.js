
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Item from './Components/Item'
import notes from './notes.js'
function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(noteItem => {return <Item key={noteItem.key} title={noteItem.title} content={noteItem.content} />})}
      <Footer />
    </div>
  );
}

export default App;
