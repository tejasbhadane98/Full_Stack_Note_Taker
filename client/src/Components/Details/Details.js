import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Details.css"
import NavBar from "../NavBar/Navbar";

const Details = ({ data, setData }) => {
    const[deleteData, setDeleteData] = useState(true);
    const[updateData, setUpdateData] = useState("");

    return(
        <>

        <div className='col1'>
        <NavBar/>
        
            {<div className='data'>
                
            
                <h2>{data.title}</h2>
                <h5>{data.description}</h5>
                <button onClick={()=>{setDeleteData(true)}} className="delete">Delete</button>
                <button onClick={()=>{setUpdateData(true)}} className="update">Update</button>
                </div>
                
            }

            

        </div>

        </>
    )
}

export default Details