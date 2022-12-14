import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import CurrencySelect from './CurrencySelect'
import Converter from './Converter'
import Convert from './Convert'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be0031aab8msh8250900d57a31e3p1ed628jsn07be2a944c5a',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};


function App() {
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [inputNumber, setInputNumber] = useState();


  function getData() {
     fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
     .then(response => response.json())
     .then(response => {
         let currencyResponse = response.rates;

         var valueInEUR = inputNumber / currencyResponse[currencyFrom];
         console.log(valueInEUR * currencyResponse[currencyTo]);
     })
     .catch(err => console.error(err));
  }

  function changedFromCurrency(e) {
      setCurrencyFrom(e.target.value);
  }

  function changedToCurrency(e) {
      setCurrencyTo(e.target.value);
  }

  function changedInputValue(e) {
      setInputNumber(e.target.value);
  }

  return (  
    <center>
      <div className="App">
        <Header/>
        <div className='flex-container'>
          <CurrencySelect onChange={changedFromCurrency} />
          <Converter onChange={changedInputValue}/>
          <CurrencySelect onChange={changedToCurrency} />
        </div>
        <Convert onClick={getData}/>
      </div>
    </center>  
  )
}

export default App
