import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter,Route,Routes
} from 'react-router-dom';




//let name="dell";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#222f04';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <div className="blank">Dell</div>
    <nav>
      <li>home</li>
      <li>about</li>
      <li>contact</li>
    </nav>
    <div className="container">
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa in beatae amet officia eos voluptate esse blanditiis nobis corrupti maiores? Veritatis, beatae totam.
      </p>
  </div>*/}
      <BrowserRouter>
        <Navbar title="View" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
              
            </Route>

            <Route exact path="/" element={<TextForm heading="Enter the text-uppercase,lowercase " mode={mode}/>}>
               
                 
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      


    </>

  );
}

export default App;
