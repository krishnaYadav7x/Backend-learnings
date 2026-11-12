import React from 'react'

export default function StorageApp({data}) {

  return <div>
    <h1>Storage app</h1>
    <ul>
      {
        !Array.isArray(data)||data.length===0?<li>No data available</li>:
        data.map((data,i)=>{
          return (
            <li key={i}>
              <div>{data}</div>
              <a href={`http://localhost:1000/${data}?action=open`}>Open</a>
              <br />
              <a href={`http://localhost:1000/${data}?action=download`}>Download</a>
            </li>
          );
        })
      }
    </ul>
  </div>
}
