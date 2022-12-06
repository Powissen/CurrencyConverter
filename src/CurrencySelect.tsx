import { useState } from "react";

export  default function CurrencySelect(){
    const [currentCurrency, setCurrentCurrency] = useState("€")
    const [displayCurrency, setDisplayCurrency] = useState("€")
    function changeCurrency(e) {
        setCurrentCurrency(e.target.value)
        switch (e.target.value)
        {
            case "kč":
                break;
            case "€":
                break;
            case "$":
                break;        
        }
    }

    return(
        <div>
            <a id="currencyName">{currentCurrency}</a>
            <br/>
            <select value={displayCurrency} onChange={changeCurrency}>
                <option value="kč">CZK</option>
                <option value="€">EUR</option>
                <option value="$">USD</option>
            </select>
	    </div>
    );
}

