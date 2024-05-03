import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("/api/jokes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jokes");
        }
        return res.json();
      })
      .then((data) => {
        setJokes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <center>
      <h1>This is Aabhushan Dhakal {jokes.length}</h1>
      {jokes.map((joke) => (
        <div className="container" key={joke.id}>
          <p>This is my joke: {joke.title}</p>
          <p>{joke.content}</p>
        </div>
      ))}
    </center>
  );
}

export default App;
