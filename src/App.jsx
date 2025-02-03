import  Header  from "./Components/Header"
import  Footer  from "./Components/Footer"
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";
import {useState} from "react";


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){

    setNotes([...notes, note]);
  }

  function deleteNote(id){

    setNotes(prevNote => {
      return prevNote.filter((noteItem, index)=> {
          return index !== id;
      })
    })

  }

  const NoteList = notes.map((note, index) => {
    return <Note key={index} id={index} title={note.title} content = {note.content} onDelete={deleteNote} />
  })

  return (
    <>
    <Header/>
    <CreateArea onAdd={addNote}/>
    {NoteList}
    <Footer/>
    </>
  )
}

export default App
