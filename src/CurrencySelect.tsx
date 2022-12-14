import { useState } from "react";

export  default function CurrencySelect({onChange}){
    const [currentCurrency, setCurrentCurrency] = useState("€")

    function changeCurrency(e) {
        switch (e.target.value) {
            case "EUR":
                setCurrentCurrency("€");
                break;
            case "CZK":
                setCurrentCurrency("kč");
                break;
            case "USD":
                setCurrentCurrency("$");
                break;
        }
    }

    return(
        <div>
            <a>{currentCurrency}</a>
            <br/>
            <select onChange={(e) => { onChange(e); changeCurrency(e); }}>
                <option value="EUR">EUR</option>
                <option value="CZK">CZK</option>
                <option value="USD">USD</option>
            </select>
	    </div>
    );
}

