import logo from "./logo.svg";
import "./App.css";
import Header from "./compoments/Header";
import Footer from "./compoments/Footer";
import Note from "./compoments/Note";
import Notes from "./notesContent";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import AddNote from "./compoments/addNote";
// let notes = [];

function App() {
  const [notes, setNotes] = useState();
  function addNote(newNote) {
    // setNotes((prevNotes) => {
    //   return [...prevNotes, newNote];
    // });
    axios.post("http://localhost:3000/", newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    console.log(id);
    axios.delete("http://localhost:3000/", { data: { _id: id } });
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note._id !== id;
      });
    });
  }
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setNotes(res.data);
      console.log(notes);
      setLoading(false);
    });
  }, []);
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note) => {
        return (
          <Note
            _id={note._id}
            key={note._id + 1}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          ></Note>
        );
      })}
      <Footer />
    </>
  );
}

export default App;
