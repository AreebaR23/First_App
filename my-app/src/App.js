import React from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import CounterExample from './components/CounterExample'
import Footer from './components/Footer'

function App() {
  return (
   <div>

    <Header/>
       <HelloWorld name=" Reeba"/>
      {/* <CounterExample/> */}

      <Footer/>
   </div>
  );
}

export default App;
