import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteAPI = async () => {
    try {
      const response = await axios.delete(
        "https://645104a2a32219691158561a.mockapi.io/todos/2"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          "https://645104a2a32219691158561a.mockapi.io/todos"
        );

        setTodos(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getAPI();
  }, []);

  if (isLoading) return <p>Loadingg......</p>;

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <button onClick={deleteAPI}>del</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
