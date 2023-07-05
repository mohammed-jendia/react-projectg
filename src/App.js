import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navs from './Sections/Navs/Navs.jsx'
import Home from './Pages/Home/Home.js'
import Blog from './Pages/Blog/Blog'
import BlogPost from './Pages/BlogPost/BlogPost'
import AboutUs from './Pages/AboutUs/AboutUs'
import Catagory from './Pages/Catagory/Catagory'
import Author from './Pages/Author/Author';
import ContactUs from './Pages/ContactUs/ContactUs';
import Privacy from './Pages/Privacy/Privacy';
import Footer from './Sections/Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
        <Router>
        <Navs/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/BlogPost' element={<BlogPost/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Catagory' element={<Catagory/>}/>
          <Route path='/Author' element={<Author/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Privacy' element={<Privacy/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
