import './App.css'
import {ChangeEvent, useState} from "react";

function App() {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    type Todo = {
        inputValue: string;
        id: number;
        checked: boolean;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    return (
    <div className="App">
      <div>
          <h2>Todoリスト with Typescript</h2>
          <form onSubmit={() => {}}>
              <input className="inputText" type="text" onChange={(e) =>
              handleChange(e)}></input>
              <input type="submit" value="作成" className="submitButton"></input>
          </form>

      </div>
    </div>
  )
}

export default App
