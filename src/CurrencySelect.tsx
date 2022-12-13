import { useState } from "react";

export  default function CurrencySelect({onChange}){
    const [currentCurrency, setCurrentCurrency] = useState("€")

    function changeCurrency(e) {
        switch (e.target.value)
        {
            case "kč":
                setCurrentCurrency("CZK");
                break;
            case "€":
                setCurrentCurrency("EUR");
                break;
            case "$":
                setCurrentCurrency("USD");
                break;        
        }
    }

    return(
        <div>
            <a id="currencyName">{currentCurrency}</a>
            <br/>
            <select onChange={(e) => { onChange(e); changeCurrency(e); }}>
                <option value="CZK">CZK</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
	    </div>
    );
}

