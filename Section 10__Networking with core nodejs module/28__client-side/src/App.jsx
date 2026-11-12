import { useEffect, useRef, useState } from "react";
import { readStream } from "./serverData";
import "./App.css";
import StorageApp from "./storage-app";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const firstTime = useRef(true);
  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
      async function getData() {
        const serverData = await readStream();
        setData(JSON.parse(serverData));
      }
      getData();
    }
  }, []);

  useEffect(() => {});

  return <StorageApp data={data} />;
}

export default App;
