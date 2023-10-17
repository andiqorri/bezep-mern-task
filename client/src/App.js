import { useEffect, useState } from "react";  
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo} from "./utils/HandleApi";
import Clock from "./components/date/Clock" 
import Time from "./components/date/Time";

function App() {

  const [toDo, setToDo] = useState ([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")


  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

const updateMode =  (_id, text) => {
  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}

  return (
    <div className="App">
    <div className="container">
    <Clock />
    <h1 className="h1app">To-Do List App</h1>
    <div className="top">
    <input 
    type="text" 
    placeholder="Add ToDos..." 
    value={text}
    onChange={(e) => setText(e.target.value)}
/>

      <div 
      className="add" 
      onClick={isUpdating ? 
          () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
          : text ? () => addToDo(text, setText, setToDo) : null
      }
      style={{ cursor: text ? "pointer" : "not-allowed", opacity: text ? 1 : 0.5 }}
  >
      {isUpdating ? "Update" : "Add"}
  </div>
      </div>
    
      <div className="list">

      {toDo.map((item) => <ToDo key={item._id} text={item.text} updateMode = {() => updateMode(item._id, item.text)} deleteToDo={() => deleteToDo(item._id, setToDo)}  /> )}

   
      </div>
      <Time />
    
    </div>
    </div>
  );
}

export default App; 
