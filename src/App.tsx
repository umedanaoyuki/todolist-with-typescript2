import './App.css'
import
import {useState} from "react";

function App() {

    const [todo, setTodos] = useState<Todo[]>([]);

    type Todo = {
        inputValue: string;
        id: number;
        checked: boolean;
    };

    return (
    <div className="App">
      <div>
          <h2>Todoリスト with Typescript</h2>
          <form onSubmit={() => {}}>
              <input className="inputText" type="text" onChange={() => {}}></input>
              <input type="submit" value="作成" className="submitButton"></input>
          </form>

      </div>
    </div>
  )
}

export default App
