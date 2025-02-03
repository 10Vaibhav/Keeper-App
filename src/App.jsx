import  Header  from "./Components/Header"
import  Footer  from "./Components/Footer"
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {

  return (
    <>
    <Header/>
    <CreateArea/>
    <Note key={1} title={"Note title"} content = {"Note content"} />
    <Footer/>
    </>
  )
}

export default App
