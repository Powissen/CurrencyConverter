import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import CurrencySelect from './assets/CurrencySelect'
import CurrencyChanger from './assets/CurrencyChanger'
import CurrencyConverter from './assets/CurrencyConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div className='flex-container'>
      <CurrencySelect/>
      <CurrencyChanger/>
      <CurrencySelect/>
      </div>
      <CurrencyConverter/>
    </div>
  )
}

export default App
