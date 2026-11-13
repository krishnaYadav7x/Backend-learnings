import { useEffect } from "react";
import { apiData } from "./api";
import "./style.css";
export default function StorageApplication({
  setDirItems,
  dirItems,
  fileLoadedPercentage,
  setFileLoadedPercentage,
}) {
  function handleInput(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://10.253.238.185:1000/", true);
    xhr.upload.addEventListener("progress", (e) => {
      setFileLoadedPercentage(`${((e.loaded / e.total) * 100).toFixed(2)}%`);
    });
    xhr.setRequestHeader("filename", file.name);
    xhr.send(file);
  }

  useEffect(() => {
    async function getData() {
      const data = await apiData();
      setDirItems(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h2>StorageApplication</h2>
      <h2>Progress complete {fileLoadedPercentage}</h2>
      <input type="file" onInput={handleInput} />
      {dirItems.length === 0 ? (
        <h2>No data available</h2>
      ) : (
        <GetDirectoryItems dirItems={dirItems} />
      )}
    </div>
  );
}

function GetDirectoryItems({ dirItems }) {
  return dirItems.map((item, i) => {
    return (
      <div className="getDirectory-items" key={i}>
        <p className="item">{item}</p>
        <a href={`http://10.253.238.185:1000/${item}?action=open`}>{"Open"}</a>
        <a href={`http://10.253.238.185:1000/${item}?action=download`}>
          {"Download"}
        </a>
      </div>
    );
  });
}
