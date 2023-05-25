import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          "https://645104a2a32219691158561a.mockapi.io/users"
        );

        setUsers(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    getAPI();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (item) => item.name === username && item.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        placeholder="username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
};

export default Login;
