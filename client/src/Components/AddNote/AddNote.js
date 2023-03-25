import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../NavBar/Navbar";
import "./AddNote.css"

const AddNote = () => {
    const [title, setTitle]=useState("")
    const [description, setDescription]=useState("")
    const navigate=useNavigate()
    function SubmitHandler(e){
        e.preventDefault()
        fetch("/create",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title:title.toLowerCase(),description
            })
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message)
            navigate("/home")
        })
    }

  return (
    <div className='AddNote'>
        <NavBar/>
        <div className='content'>

        <h2>Create a Note</h2>

        <label className='t1'>Title:</label><br></br>
        <input type="text" className='ipt' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
        <br></br>
        <label className='t1'>Description:</label><br></br>
        <textarea className='largeInput' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Whats On Your Mind?'/>
        <br></br>
        
        <button onClick={(e)=>SubmitHandler(e)} className="btn2">Add Note</button>
        </div>
    </div>
  )
}

export default AddNote