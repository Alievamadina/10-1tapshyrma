import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
function App() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setItem([...data]));
    setIsLoading(false);
  }, []);
  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> : <Posts data={item} />}
    </div>
  );
}
export default App;
