import React from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import CounterExample from './components/CounterExample'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <div>

    <Header/>
       <HelloWorld name=" Reeba"/>
      {/* <CounterExample/> */}
      <Router>
      <ul>
        <li><Link to = "/" className ="text-blue-500">Homepage</Link></li>
        <li><Link to = "/about" className ="text-blue-500">About</Link></li>
      </ul>
      {/* <Routes>
        <Route path="/" element={<App />}>
          <h1 className="font-bold-text-2xl">This is the homepage</h1>
        </Route>
        <Route path="/about" element={<App />}>
          <h1 className="font-bold-text-2xl" >This is the About page</h1>
        </Route>

      </Routes> */}

      </Router>

      <Footer/>
   </div>
  );
}

export default App;
