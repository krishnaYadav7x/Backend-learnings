import express from 'express'
import directoriesData from '../directoriesDB.json' with {type:"json"}
import filesData from "../filesDB.json" with { type: "json" };

const router = express.Router()

router.get('{/:id}',(req,res)=>{
  const {id} = req.params
  if(!id){
    const directoryData = directoriesData[0]
     const files =  directoryData.files.map((fileId)=>{
      return filesData.find((file)=>file.id===fileId)
    })
    res.json({...directoryData,files});
  }else{
    const directoryData = directoriesData.find((directory) => directory.id===id);
    res.json(directoryData)
  }
})

export default router