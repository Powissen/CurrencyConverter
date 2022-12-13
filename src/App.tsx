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
  const [count, setCount] = useState(0)
  const [dataAPI, setDataAPI] = useState({})

  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("EUR");  


  function getData() {
     //fetch('https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP', options)
     //.then(response => response.json())
     //.then(response => {
     //  let currencyResponse = response.rates;


       //let valueInEUR = document.getElementById('Number')!.value / currencyResponse[currencyFrom];
       //let valueInEUR = 1;
       //console.log(valueInEUR * currencyResponse[currencyTo]);



       console.log("Clicked convert button");

     //})
     //.catch(err => console.error(err));
  }

  function changedSelectValue(e) {
    console.log("Changed select value");
    console.log(e.target.value);
  }

  return (  
    <center>
      <div className="App">
        <Header/>
        <div className='flex-container'>
          <CurrencySelect onChange={changedSelectValue(e)}/>
          <Converter/>
          <CurrencySelect onChange={changedSelectValue(e)}/>
        </div>
        <Convert onClick={getData}/>
      </div>
    </center>  
  )
}

export default App
