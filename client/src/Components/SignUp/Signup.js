import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import "../SignUp/Signup.css"

const SignUp =()=>{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const[terms, setTerms] = useState(false)
    const navigate = useNavigate()

    function signUpHandler(e){
        e.preventDefault()
        if(email==="" ||  password==="" || confirmPassword===""){
            return alert("All Fields are Mandatory")
        }

        if(terms===false){
            return alert("Please accept Terms and Condition")
        }
        fetch("/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                email,password,confirmPassword
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                return alert(data.error)
            }
            alert(data.message)
            navigate("/");
        })
    }
    return(
        <>
        <div className="all-content">
            <h2 className="head">Sign UP</h2>
            <form className="form">
                 <label>Email:</label>
                 <input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                 <br/> <br/>

                 <label>Password:</label>
                 <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                 <br/> <br/>

                 <label>Repeat Password:</label>
                 <input type="password" value={confirmPassword} placeholder="Repeat Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                 <br/> <br/>

                 <input type="checkbox" id="terms" value={terms} onChange={(e)=>setTerms(!terms)}/>
                 <label for="terms">I agree with Terms and Conditions</label>
                 <br/>
                 <button className="btn" onClick={(e)=>signUpHandler(e)}>CONTINUE</button>
            </form>
            <Link to="/" className="a" > Already have an Account? Sign In Here</Link>  


        </div>
        </>
    )
}
export default SignUp


  