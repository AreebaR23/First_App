import React from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
// import CounterExample from './components/CounterExample'
import Footer from './components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import Navigation from './components/Navigation'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div>
       
    <Router>
      <Header/>
        {/* Fix routing issues */}
        <div className="p-3">
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/product/:id" element={<Product />}/>
          </Routes>
        </div> 
        <Footer/>
    </Router>

   </div>
  );
}

export default App;
