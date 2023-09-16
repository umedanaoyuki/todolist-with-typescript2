import './App.css'
import {ChangeEvent, FormEvent, useState} from "react";

function App() {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    type Todo = {
        inputValue: string;
        id: number;
        checked: boolean;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //あたらしいTODOを作成
        const newTodo: Todo = {
            //inputValueに useStateの箇所の「inputValue」を挿入
            inputValue: inputValue,
            id: todos.length,
            //初期値
            checked: false,
        };

        setTodos([newTodo, ...todos]);
        //フォームは空にする
        setInputValue("");
    }

    const handleEdit = (id: number, inputValue: string) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                // 今打ち込んでいるinputValue
                todo.inputValue = inputValue;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const handleChecked = (id: number, checked: boolean) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.checked = !checked;
            }
            return todo;
        });

        setTodos(newTodos);
    };

    return (
    <div className="App">
      <div>
          <h2>Todoリスト with Typescript</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input className="inputText" type="text" onChange={(e) =>
              handleChange(e)}></input>
              <input type="submit" value="作成" className="submitButton"></input>
          </form>

          <ul className="todoList">
              {todos.map((todo) => (
                  <li key={todo.id}>
                      <input className="inputText" value={todo.inputValue} type="text"
                             onChange={(e) => handleEdit(todo.id, e.target.value)} disabled={todo.checked}></input>
                      <input type="checkbox"
                             onChange={(e) => handleChecked(todo.id, todo.checked)}></input>
                  </li>
              ))}
          </ul>


      </div>
    </div>
  )
}

export default App
