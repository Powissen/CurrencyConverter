import { useState } from "react";

export  default function CurrencySelect({onChange}){
    const [currentCurrency, setCurrentCurrency] = useState("€")

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
            <select value={currentCurrency} onChange={(e) => { onChange(e); changeCurrency(e); }}>
                <option value="kč">CZK</option>
                <option value="€">EUR</option>
                <option value="$">USD</option>
            </select>
	    </div>
    );
}

