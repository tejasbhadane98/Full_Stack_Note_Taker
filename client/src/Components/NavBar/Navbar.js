import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css"


const NavBar=()=>{
    const navigate = useNavigate()
    return(
        <>
        <div className="nav">
            <a href="/home" className="ab">Home </a> 
            <a href="/addnote" className="ab">AddNote </a> 
            <a href="/details" className="ab">DeleteAll </a> 
            <a href="/home" className="ab">Export </a> 
            
            <button className="ab" onClick={()=>{localStorage.clear(); navigate("/")}}>Logout </button>
            
            
        

        </div>
        </>
    )
}
export default NavBar