import { useState } from 'react'
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
  const [currencyFrom, setCurrencyFrom] = useState("\u20AC");
  const [currencyTo, setCurrencyTo] = useState("k\u010D");
  const [inputNumber, setInputNumber] = useState(0);
  const [result, setResult] = useState("0.000");


  function getData() {
     fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
     .then(response => response.json())
     .then(response => {
         let currencyResponse = response.rates;

         var valueInEUR = inputNumber / currencyResponse[getCurrencyName(currencyFrom)];
         setResult((valueInEUR * currencyResponse[getCurrencyName(currencyTo)]).toFixed(3));
     })
     .catch(err => console.error(err));
  }

    function getCurrencyName(currency) {
        switch (currency)
        {
            case "€", "\u20AC":
                return "EUR";
            case "kè", "k\u010D":
                return "CZK";
            case "$", "\u0024":
                return "USD";
        }
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

  function switchCurrencies() {
      var newCurrencyFrom = currencyTo;
      setCurrencyTo(currencyFrom);
      setCurrencyFrom(newCurrencyFrom);
  }

  return (  
    <center>
      <div className="App">
        <Header/>
        <div className='flex-container'>
          <CurrencySelect currentCurrency={currencyFrom} onChange={changedFromCurrency} />
          <Converter result={result} onChange={changedInputValue} onClick={switchCurrencies}/>
          <CurrencySelect currentCurrency={currencyTo} onChange={changedToCurrency} />
        </div>
        <Convert onClick={getData}/>
      </div>
    </center>  
  )
}

export default App
