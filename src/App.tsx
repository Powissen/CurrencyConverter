import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import CurrencySelect from './CurrencySelect'
import Converter from './Converter'
import Convert from './Convert'


function App() {
  const [count, setCount] = useState(0)
  const [dataAPI, setDataAPI] = useState({})


  function getData() {

  }

  return (  
    <center>
      <div className="App">
        <Header/>
        <div className='flex-container'>
          <CurrencySelect/>
          <Converter/>
          <CurrencySelect/>
        </div>
        <Convert/>
      </div>
    </center>
  )
}

export default App
