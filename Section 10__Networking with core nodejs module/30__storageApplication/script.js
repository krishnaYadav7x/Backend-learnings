const fileInput = document.querySelector('input')
fileInput.addEventListener('change',async(e)=>{
  const file = e.target.files[0]

  // fetch("http://10.253.238.185:1000/", {
  //   method: "POST",
  //   body: file,
  //   headers: {
  //     "fileName": file.name,
  //     "Content-Type": file.type,
  //   },
  // });
  
  const xhr = new XMLHttpRequest()
  xhr.open("POST", "http://10.253.238.185:1000/",true);
  xhr.upload.addEventListener('progress',(e)=>{
    console.log(e)
  })
  xhr.setRequestHeader("filename", file.name);
  xhr.send(file)
})