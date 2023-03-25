import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./Signin.css"

const Signin =()=>{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[terms, setTerms] = useState(false)
    const navigate = useNavigate()

    function signInHandler(e){
        e.preventDefault()
        
        if(terms===false){
            return alert("Please accept Remember Me")
        }
        fetch("/signin",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                email,password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                return alert(data.error)
            }
            alert(data.message)
            localStorage.setItem("user", JSON.stringify(data.user))
            navigate("/home")
        })
    }
    return(
        <>
        <div className="all-content">
            <h2 className="head">Sign In</h2>
            <form className="form">
                 <label>Email Address:</label>
                 <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                 <br/> <br/>

                 <label>Password:</label>
                 <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                 <br/> <br/>
                 <input type="checkbox" id="terms" value={terms} onChange={(e)=>setTerms(!terms)}/>
                 <label for="terms">Remember Me</label>
                 <br/>
                 <button className="btn" onClick={(e)=>signInHandler(e)}>Submit</button>
            </form>
            <Link to="/signup" className="a"> Don't have an Account? Sign up Here</Link>  


        </div>
        </>
    )
}
export default Signin
