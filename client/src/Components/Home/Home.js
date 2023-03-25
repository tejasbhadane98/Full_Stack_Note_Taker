import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavBar from "../NavBar/Navbar";
import "./Home.css"


const Home = ({data, setData}) => {
    const [allNote, setAllNotes] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        // if (user === null) {
        //     navigate("/")
        // }
        fetch("/note")
            .then(res => res.json())
            .then(data => {
                setAllNotes(data.note)
            })
    }, [])

    function detailHandler(note){
        setData(note)
        navigate("/details")
    }

    function searchHandler(e){
        fetch(`/search/${e.toLowerCase()}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.note, e,searchData.length)
            setSearchData(data.note)
        })
        
    }

    return (
        <>
            <div className="all-content1">
                <NavBar className="up"/>
                <div className="sub-content">
                    <input type="text" onChange={(e) => { setSearch(e.target.value); searchHandler(e.target.value) }} placeholder="Search Note  By Title here" className="search" />
                    <br />
                    <div className="all">
                        {
                            search.length === 0 && allNote.map((note) => {
                                return (
                                    <div onClick={() => detailHandler(note)} className="each">
                                        <span className="info">
                                            {note.title}
                                            <br />
                                            <br />
                                            {note.description}
                                        </span>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="all">
                        {
                            search.length !== 0 && searchData.map((note) => {
                                return (
                                    <div onClick={() => detailHandler(note)} className="each">
                                        <span className="info">
                                            {note.title}
                                            <br />
                                            <br />
                                            {note.description}
                                        </span>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>
            </div>
        </>
    )
}
export default Home