

import { useState } from 'react'
import './App.css'
import StorageApplication from './storage-application'

function App() {
  const [dirItems,setDirItems] = useState([])
  const [fileLoadedPercentage, setFileLoadedPercentage] = useState(null)
  console.log(dirItems)
  return (
    <StorageApplication
      setDirItems={setDirItems}
      dirItems={dirItems}
      fileLoadedPercentage={fileLoadedPercentage}
      setFileLoadedPercentage={setFileLoadedPercentage}
    />
  );
  
  
}

export default App
