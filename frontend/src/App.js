import './App.css';
import Input from '../src/components/InputForm/Input';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import RenderingMeme from './components/FetchingMemes/RenderingMeme';
import { useState,useEffect } from 'react';



function App() {

  const [memes,setMemes] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:8081/memes')
    .then((response) => { 
        setMemes(response.data);
    })

});

  return (
    <>
    <Router>
      <Navbar />
      <Input />
      <RenderingMeme memes={memes} />
      <Footer />
      </Router>
    </>

  );
}

export default App;
