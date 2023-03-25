import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Signin from './Components/SignIn/Signin';
import SignUp from './Components/SignUp/Signup';
import { useState } from 'react';
import Navbar from './Components/NavBar/Navbar';
import AddNote from './Components/AddNote/AddNote';
import Details from './Components/Details/Details';


function App() {
  const[data, setData]=useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/home" element={<Home data={data} setData={setData}/>}/>
          <Route path="/details" element={<Details data={data} setData={setData}/>}/>
          <Route path="/addnote" element={<AddNote/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
